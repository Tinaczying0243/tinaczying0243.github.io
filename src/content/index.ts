import type { ComponentType } from "react";
import { journalist } from "./journalist";
import type { ArticleFrontmatter, HostedArticle, WorkCatalogItem, WorkItem } from "./types";
import { worksCatalog } from "./works";

type ArticleModule = {
  default: ComponentType<Record<string, unknown>>;
  frontmatter: ArticleFrontmatter;
};

const articleModules = import.meta.glob<ArticleModule>("./articles/*.mdx", {
  eager: true,
});

const hostedArticlesBySlug = new Map<string, HostedArticle>();

for (const articleModule of Object.values(articleModules)) {
  const { default: Content, frontmatter } = articleModule;
  if (!frontmatter?.slug) {
    throw new Error("All hosted article MDX files must include a slug in frontmatter.");
  }
  if (hostedArticlesBySlug.has(frontmatter.slug)) {
    throw new Error(`Duplicate article slug detected: ${frontmatter.slug}`);
  }

  hostedArticlesBySlug.set(frontmatter.slug, {
    ...frontmatter,
    Content,
  });
}

function enrichWork(work: WorkCatalogItem): WorkItem {
  if (work.hosted) {
    const article = hostedArticlesBySlug.get(work.slug);
    if (!article) {
      throw new Error(`Hosted work "${work.id}" points to missing slug "${work.slug}".`);
    }

    return {
      id: work.id,
      title: article.title,
      outlet: article.outlet,
      date: article.date,
      description: work.description,
      url: `/articles/${article.slug}`,
      tags: article.tags,
      category: work.category,
      featured: work.featured,
      type: article.type,
      hosted: true,
      sector: work.sector,
    };
  }

  return {
    ...work,
    hosted: false,
  };
}

export function enrichWorks(items: WorkCatalogItem[] = worksCatalog): WorkItem[] {
  return items.map(enrichWork);
}

export function getArticle(slug: string): HostedArticle | undefined {
  return hostedArticlesBySlug.get(slug);
}

export const articles: HostedArticle[] = [...hostedArticlesBySlug.values()];
export const works: WorkItem[] = enrichWorks();

export { journalist, worksCatalog };
export type { ArticleFrontmatter, HostedArticle, WorkCatalogItem, WorkItem };
