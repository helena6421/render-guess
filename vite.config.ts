import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  // На GitHub Pages сайт живёт по подпути /render-guess/
  // Локально (npm run dev) base остаётся '/'
  base: process.env.GITHUB_ACTIONS ? '/render-guess/' : '/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
