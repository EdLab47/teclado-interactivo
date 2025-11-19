import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // 👇 muy importante para GitHub Pages
  base: '/teclado-interactivo/',
  plugins: [react()],
  build: {
    outDir: 'dist', // carpeta donde Vite deja los archivos estáticos
  },
})
