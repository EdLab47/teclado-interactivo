import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/teclado-interactivo/',  // 👈 IMPORTANTE
  plugins: [react()],
  build: {
    outDir: 'dist', // carpeta generada
  },
})

