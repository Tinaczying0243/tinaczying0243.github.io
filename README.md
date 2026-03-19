# Tina Chen — Portfolio Website

Portfolio website for Tina Chen, multimedia journalist at UC Berkeley Graduate School of Journalism. Built with **Vite + React + TypeScript**, deployed via **GitHub Pages**.

## Live Site

`https://tinaczying0243.github.io/`

## Stack

- **Framework:** Vite + React 19 + TypeScript
- **Routing:** React Router v7 (BrowserRouter with `basename`)
- **Styling:** Custom CSS with design tokens (no external UI library)
- **Fonts:** Playfair Display + Inter (Google Fonts)
- **Deployment:** GitHub Actions → GitHub Pages

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, reporting beats, featured works, languages |
| Multimedia | `/multimedia` | Interactive projects and multimedia packages |
| Writing | `/writing` | Tech/Business + Local News tabs with 6 articles |
| Photography | `/photography` | Visual journalism and documentary photography |
| Resume | `/resume` | Full CV with experience, education, skills |

## Development

```bash
npm install
npm run dev       # Start dev server at localhost:5173
npm run build     # Production build to dist/
npm run preview   # Preview production build
```

## Deployment to GitHub Pages

1. Create a GitHub repo named `tina-chen-portfolio`
2. Push this code to the `main` branch
3. In repo Settings → Pages, set source to **GitHub Actions**
4. The workflow in `.github/workflows/deploy.yml` will auto-deploy on every push to `main`

> **Note:** The `base` in `vite.config.ts` and `basename` in `App.tsx` are both set to `/tina-chen-portfolio/`. Update these if your repo has a different name.

## Project Structure

```
src/
  data/portfolioData.ts   # All content data (works, resume, journalist info)
  components/             # Navbar, Footer, WorkCard
  pages/                  # Home, Multimedia, Writing, Photography, Resume
  index.css               # Global styles + CSS custom properties
```

## Changelog

See [CHANGELOG.md](./CHANGELOG.md)
