import { defineConfig } from "vite";
import mdx from "@mdx-js/rollup";
import react from "@vitejs/plugin-react";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

// https://vite.dev/config/
// base must match the GitHub repository name for GitHub Pages deployment
export default defineConfig({
  plugins: [
    mdx({
      providerImportSource: "@mdx-js/react",
      remarkPlugins: [remarkFrontmatter, [remarkMdxFrontmatter, { name: "frontmatter" }]],
    }),
    react(),
  ],
  base: "/",
});
