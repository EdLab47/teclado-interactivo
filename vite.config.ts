import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/teclado-interactivo/',  // NECESARIO PARA GITHUB PAGES
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});

