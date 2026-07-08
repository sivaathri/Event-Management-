import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'copy-404',
      closeBundle() {
        const indexHtml = path.resolve('dist/index.html')
        const fallbackHtml = path.resolve('dist/404.html')
        if (fs.existsSync(indexHtml)) {
          fs.copyFileSync(indexHtml, fallbackHtml)
          console.log('✓ Copied index.html to 404.html for SPA routing support.')
        }
      }
    }
  ],
  base: '/',
})
