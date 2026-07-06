import type { ComponentType } from "react";

export type WorkCategory = "multimedia" | "writing-tech" | "writing-local";

export interface Journalist {
  name: string;
  email: string;
  location: string;
  bio: string;
  bioShort: string;
  languages: string[];
  github: string;
}

export interface ArticleImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ArticleFrontmatter {
  slug: string;
  title: string;
  deck: string;
  outlet: string;
  author: string;
  date: string;
  tags: string[];
  type?: string;
  originalUrl?: string;
  paywalled?: boolean;
  image?: ArticleImage;
}

export interface HostedArticle extends ArticleFrontmatter {
  Content: ComponentType<Record<string, unknown>>;
}

interface WorkCatalogBase {
  id: string;
  description: string;
  category: WorkCategory;
  featured?: boolean;
  sector?: string;
}

export interface HostedWorkCatalogItem extends WorkCatalogBase {
  hosted: true;
  slug: string;
}

export interface ExternalWorkCatalogItem extends WorkCatalogBase {
  hosted?: false;
  title: string;
  outlet: string;
  date: string;
  url: string;
  tags: string[];
  type?: string;
}

export type WorkCatalogItem = HostedWorkCatalogItem | ExternalWorkCatalogItem;

export interface WorkItem {
  id: string;
  title: string;
  outlet: string;
  date: string;
  description: string;
  url: string;
  tags: string[];
  category: WorkCategory;
  featured?: boolean;
  type?: string;
  hosted?: boolean;
  sector?: string;
}
