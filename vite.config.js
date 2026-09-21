import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import oxlint from 'vite-plugin-oxlint'
import { cloudflare } from '@cloudflare/vite-plugin'

export default defineConfig({
  plugins: [
    react(),
    oxlint(),
    cloudflare(),
  ],
})