import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Set base path for GitHub Pages deployment under repository name
  base: '/Learn-Latvial-App-2/',
  plugins: [react()],
})

