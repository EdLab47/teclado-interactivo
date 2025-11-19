# Explorador de Teclado Interactivo ⌨️

¡Bienvenido al Explorador de Teclado Interactivo! Esta es una aplicación web educativa diseñada para enseñar a estudiantes principiantes (y curiosos) todo sobre el teclado de la computadora, desde su historia hasta cómo usarlo correctamente.

La aplicación utiliza **Inteligencia Artificial (Google Gemini)** para generar contenido educativo, historias y consejos personalizados en cada sesión.

## 🚀 Características Principales

*   **Lecciones Interactivas:** Explora definiciones, historia y el funcionamiento interno del teclado.
*   **Mapa del Teclado:** Un diagrama visual e interactivo donde puedes pasar el mouse para aprender sobre las diferentes secciones (Alfanumérico, Función, Numérico, etc.).
*   **Práctica de Mecanografía:** Un minijuego integrado para practicar la ubicación de las teclas y mejorar la velocidad.
*   **Contenido Generado por IA:** Cada vez que cargas la app, Gemini actúa como un profesor experto para explicar los conceptos de forma amigable.
*   **Diseño Responsivo:** Funciona bien en computadoras de escritorio y tabletas.

## 🛠️ Tecnologías Utilizadas

*   **React 19:** Para la construcción de la interfaz de usuario.
*   **TypeScript:** Para un código robusto y tipado seguro.
*   **Tailwind CSS:** Para el diseño visual moderno y adaptativo.
*   **Google GenAI SDK:** Para conectar con la API de Gemini (modelo `gemini-2.5-flash`).
*   **Vite/Esbuild:** (Implícito en el entorno de desarrollo) Para el empaquetado y ejecución.

## 📋 Requisitos Previos

Para ejecutar este proyecto, necesitas una API Key de Google Gemini.

1.  Obtén tu clave gratis en [Google AI Studio](https://aistudio.google.com/).
2.  No compartas tu clave públicamente.

## 🔧 Instalación y Uso

Si descargas este código para ejecutarlo en local:

1.  Clona el repositorio:
    ```bash
    git clone https://github.com/EdLab47/teclado-interactivo.git
    ```
2.  Instala las dependencias (si usas Node.js):
    ```bash
    npm install
    ```
3.  Crea un archivo `.env` en la raíz del proyecto y agrega tu clave (asegúrate de que este archivo esté en tu `.gitignore`):
    ```env
    API_KEY=tu_clave_api_aqui
    ```
4.  Ejecuta el proyecto:
    ```bash
    npm run dev
    ```

## 🛡️ Estructura del Proyecto

*   `/components`: Contiene las piezas visuales (Header, Diagrama del Teclado, Tarjetas de información).
*   `/services`: Lógica de conexión con la IA.
*   `App.tsx`: El componente principal que orquesta la aplicación.
*   `types.ts` y `constants.ts`: Definiciones y datos estáticos del teclado.

---
Creado con ❤️ y tecnología de Google Gemini.