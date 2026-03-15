import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// User pages site (username.github.io) — always serves at root, so base is /
export default defineConfig({
  plugins: [react()],
  base: '/',
})
