/// <reference types="vite/client" />

declare module "*.mdx" {
  import type { ComponentType } from "react";
  import type { ArticleFrontmatter } from "./content/types";

  const MDXComponent: ComponentType<Record<string, unknown>>;
  export default MDXComponent;
  export const frontmatter: ArticleFrontmatter;
}
