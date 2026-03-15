import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base must match the GitHub repository name for GitHub Pages deployment
export default defineConfig({
  plugins: [react()],
  base: '/tina-chen-portfolio/',
})
