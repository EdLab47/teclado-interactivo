import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Carga las variables de entorno desde .env.* según el modo (development, production, etc.)
  // Usamos '.' como raíz para que tome los .env en el directorio del proyecto.
  const env = loadEnv(mode, '.', '')

  // Tomamos la API_KEY ya sea del entorno del sistema (por ejemplo en GitHub Actions)
  // o del archivo .env local. Si no existe, será cadena vacía.
  const apiKey = process.env.API_KEY || env.API_KEY || ''

  return {
    // MUY IMPORTANTE: nombre EXACTO del repositorio en GitHub Pages
    // https://usuario.github.io/teclado-interactivo/
    base: '/teclado-interactivo/',
    plugins: [react()],
    define: {
      // Inyectamos la API_KEY como texto en el bundle del frontend
      'process.env.API_KEY': JSON.stringify(apiKey),
    },
  }
})
