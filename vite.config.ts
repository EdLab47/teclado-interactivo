import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Cargar variables de entorno desde archivos .env (localmente)
  // Usamos '.' como directorio raíz para evitar problemas de tipado con process.cwd()
  const env = loadEnv(mode, '.', '');

  return {
    // IMPORTANTE: Esto le dice a la app que vivirá en esta subcarpeta en GitHub Pages
    base: '/teclado-interactivo/', 
    plugins: [react()],
    define: {
      // Inyectar la API Key en la aplicación.
      // Prioridad: 
      // 1. process.env.API_KEY (Entorno del sistema, ej. GitHub Actions Secret)
      // 2. env.API_KEY (Archivo .env local)
      'process.env.API_KEY': JSON.stringify(process.env.API_KEY || env.API_KEY)
    }
  }
})