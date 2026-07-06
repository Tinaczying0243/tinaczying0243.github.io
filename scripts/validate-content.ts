import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { worksCatalog } from "../src/content/works.ts";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDir, "..");
const articlesDir = path.join(projectRoot, "src", "content", "articles");

interface ParsedFrontmatter {
  slug?: string;
  paywalled: boolean;
  originalUrl?: string;
}

function stripQuotes(value: string): string {
  const trimmed = value.trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

function parseFrontmatter(content: string): ParsedFrontmatter {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) {
    return { paywalled: false };
  }

  const frontmatter = match[1];
  const slugMatch = frontmatter.match(/^slug:\s*(.+)$/m);
  const paywalledMatch = frontmatter.match(/^paywalled:\s*(.+)$/m);
  const originalUrlMatch = frontmatter.match(/^originalUrl:\s*(.+)$/m);

  return {
    slug: slugMatch ? stripQuotes(slugMatch[1]) : undefined,
    paywalled: paywalledMatch ? stripQuotes(paywalledMatch[1]).toLowerCase() === "true" : false,
    originalUrl: originalUrlMatch ? stripQuotes(originalUrlMatch[1]) : undefined,
  };
}

async function main() {
  const errors: string[] = [];

  const files = (await readdir(articlesDir))
    .filter((file) => file.endsWith(".mdx"))
    .sort();

  const slugsByFile = new Map<string, string>();

  for (const file of files) {
    const fullPath = path.join(articlesDir, file);
    const content = await readFile(fullPath, "utf8");
    const parsed = parseFrontmatter(content);
    const fileSlug = file.replace(/\.mdx$/, "");

    if (!parsed.slug) {
      errors.push(`${file}: missing slug in frontmatter.`);
      continue;
    }

    if (parsed.slug !== fileSlug) {
      errors.push(`${file}: slug "${parsed.slug}" does not match filename "${fileSlug}".`);
    }

    if (slugsByFile.has(parsed.slug)) {
      const duplicateFile = slugsByFile.get(parsed.slug);
      errors.push(`${file}: duplicate slug "${parsed.slug}" already used by ${duplicateFile}.`);
    } else {
      slugsByFile.set(parsed.slug, file);
    }

    if (parsed.paywalled && !parsed.originalUrl) {
      errors.push(`${file}: paywalled articles must include originalUrl.`);
    }
  }

  const hostedWorks = worksCatalog.filter((work) => work.hosted);

  for (const work of hostedWorks) {
    if (!slugsByFile.has(work.slug)) {
      errors.push(
        `worksCatalog entry "${work.id}" references missing MDX slug "${work.slug}".`
      );
    }
  }

  if (errors.length > 0) {
    console.error("Content validation failed:\n");
    for (const error of errors) {
      console.error(`- ${error}`);
    }
    process.exit(1);
  }

  console.log(`Content validation passed (${files.length} article files, ${hostedWorks.length} hosted works).`);
}

main().catch((error) => {
  console.error("Content validation crashed:", error);
  process.exit(1);
});
