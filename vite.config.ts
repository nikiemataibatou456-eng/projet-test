import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/projet-test/',

  plugins: [
    tailwindcss(),
  ],
})
