# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.0] — 2026-03-14

### Added
- Initial project scaffold using Vite + React + TypeScript
- `portfolioData.ts` — centralized data layer for all journalist content (works, resume, bio)
- **Home page** — hero section with name/bio/contact, reporting beats grid, featured works, languages section
- **Multimedia page** — full-bleed feature cards for Fulbright multimedia story and $315B deportation interactive data viz
- **Writing page** — tabbed interface (All / Tech & Business / Local News) with outlet filter; 6 articles from Bay Area News Group, Mission Local, Oakland North, East Bay Times
- **Photography page** — visual grid with 6 photo/documentary journalism entries linked to published stories; exhibition curation highlight
- **Resume page** — two-column layout with work experience, education, skills, research and publications; print-ready CSS
- Sticky responsive navbar with active-state highlighting and mobile hamburger menu
- Footer with contact info and site navigation
- Light, vibrant color palette — primary blue (#3B82F6), cyan teal (#06B6D4), accent orange (#F97316), violet (#8B5CF6), emerald (#10B981)
- Google Fonts: Playfair Display (headings) + Inter (body)
- CSS custom properties for full design token system
- GitHub Actions workflow (`.github/workflows/deploy.yml`) for automatic deployment to GitHub Pages on push to `main`
- `404.html` SPA redirect for GitHub Pages client-side routing support
- Vite `base` config set to `/tina-chen-portfolio/` for GitHub Pages subdirectory hosting
- Open Graph meta tags and SEO description in `index.html`
- `tina-chen-info/journalist-profile.md` — structured journalist profile document

[1.0.0]: https://github.com/username/tina-chen-portfolio/releases/tag/v1.0.0
[Unreleased]: https://github.com/username/tina-chen-portfolio/compare/v1.0.0...HEAD
