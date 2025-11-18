
import { GoogleGenAI, Type } from "@google/genai";
import { type KeyboardInfo } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

const responseSchema = {
    type: Type.OBJECT,
    properties: {
        definicion: {
            type: Type.OBJECT,
            properties: {
                titulo: { type: Type.STRING },
                descripcion: { type: Type.STRING },
            },
            required: ['titulo', 'descripcion']
        },
        importancia: {
            type: Type.OBJECT,
            properties: {
                titulo: { type: Type.STRING },
                descripcion: { type: Type.STRING },
            },
            required: ['titulo', 'descripcion']
        },
        comoFunciona: {
            type: Type.OBJECT,
            properties: {
                titulo: { type: Type.STRING },
                descripcion: { type: Type.STRING },
            },
            required: ['titulo', 'descripcion']
        },
        historia: {
            type: Type.OBJECT,
            properties: {
                titulo: { type: Type.STRING },
                contenido: { type: Type.ARRAY, items: { type: Type.STRING } },
            },
            required: ['titulo', 'contenido']
        },
        tipos: {
            type: Type.OBJECT,
            properties: {
                titulo: { type: Type.STRING },
                teclados: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            nombre: { type: Type.STRING },
                            descripcion: { type: Type.STRING },
                            icono: { type: Type.STRING, enum: ['mechanical', 'membrane', 'ergonomic', 'wireless'] }
                        },
                        required: ['nombre', 'descripcion', 'icono']
                    }
                }
            },
            required: ['titulo', 'teclados']
        },
        partes: {
            type: Type.OBJECT,
            properties: {
                titulo: { type: Type.STRING },
                introduccion: { type: Type.STRING },
                secciones: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            nombre: { type: Type.STRING },
                            descripcion: { type: Type.STRING },
                        },
                         required: ['nombre', 'descripcion']
                    },
                },
            },
            required: ['titulo', 'introduccion', 'secciones']
        },
        actividades: {
            type: Type.OBJECT,
            properties: {
                titulo: { type: Type.STRING },
                introduccion: { type: Type.STRING },
                lista: { type: Type.ARRAY, items: { type: Type.STRING } },
            },
            required: ['titulo', 'introduccion', 'lista']
        },
        consejos: {
             type: Type.OBJECT,
            properties: {
                titulo: { type: Type.STRING },
                tips: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            titulo: {type: Type.STRING},
                            consejo: { type: Type.STRING }
                        },
                        required: ['titulo', 'consejo']
                    }
                }
            },
            required: ['titulo', 'tips']
        },
        filaGuia: {
            type: Type.OBJECT,
            properties: {
                titulo: { type: Type.STRING },
                descripcion: { type: Type.STRING },
            },
            required: ['titulo', 'descripcion']
        }
    },
     required: ['definicion', 'importancia', 'comoFunciona', 'historia', 'tipos', 'partes', 'actividades', 'consejos', 'filaGuia']
};

export async function getKeyboardInfo(): Promise<KeyboardInfo> {
    try {
        const prompt = `
        Eres un educador excepcional y experto en tecnología, diseñando el contenido para una primera clase de 1 hora sobre el teclado para estudiantes principiantes. El teclado que verán es uno completo de 105 teclas, incluyendo teclado numérico y bloque de navegación.
        La información debe ser verídica, muy fácil de entender, motivadora y en español. El objetivo es que pierdan el miedo y se sientan cómodos explorando.
        Genera el contenido completo en formato JSON según el esquema proporcionado.

        Detalles del contenido a generar:
        1.  **Definicion:** Explica qué es un teclado de forma muy simple. Título: "¿Qué es un Teclado?".
        2.  **Importancia:** Explica por qué es una herramienta poderosa para estudiar, comunicarse y divertirse. Título: "¿Por Qué es Importante Aprender a Usarlo?".
        3.  **ComoFunciona:** Usa una analogía sencilla. Por ejemplo, "Cada tecla es como un interruptor de luz que envía un código único a la computadora". Título: "La Magia Detrás de las Teclas".
        4.  **Historia:** En 2-3 párrafos, cuenta una breve y fascinante historia desde las máquinas de escribir hasta hoy. Título: "De la Máquina de Escribir a tus Dedos".
        5.  **Partes:**
            - Titulo: "Un Mundo en tus Manos".
            - Introduccion: Un texto corto que invite a explorar, como "Un teclado organiza las teclas en grupos, ¡vamos a conocerlos!".
            - Secciones: Proporciona una descripción educativa, simple y clara para CADA UNO de los siguientes nombres de sección EXACTAMENTE:
                - 'Teclado alfanumérico': El corazón del teclado, con letras, números y puntuación.
                - 'Teclas de función': F1-F12, son atajos para programas.
                - 'Teclas de sistema': Dan órdenes directas (Ctrl, Alt, Shift, Windows).
                - 'Teclas de aplicación': La tecla de menú contextual.
                - 'Teclado numérico': El bloque a la derecha para introducir números rápidamente.
                - 'Cursores de navegación': Las flechas y el bloque de teclas para moverse por documentos (Inicio, Fin, Av Pág, Re Pág, Ins, Supr).
                - 'Teclas entrar': La tecla Enter principal y la del teclado numérico.
                - 'Otras': Teclas como Esc, Impr Pant, Bloq Despl, Pausa.
        6.  **Tipos:**
            - Titulo: "No Todos los Teclados son Iguales".
            - Teclados: Describe de forma sencilla los teclados mecánicos, de membrana, ergonómicos y inalámbricos, asignando el 'icono' correspondiente.
        7.  **Actividades:**
            - Titulo: "¡Es Hora de Practicar!".
            - Introduccion: Un párrafo motivador para que empiecen a interactuar.
            - Lista: Crea una lista de 4-5 actividades guiadas. Incluye alguna con el teclado numérico. Ejemplos: "Busca y presiona las letras de tu nombre", "Usa la tecla 'Shift' y una letra para escribir tu inicial en mayúscula", "Escribe tu edad usando el teclado numérico".
        8.  **Consejos:**
            - Titulo: "Consejos para Escribir Mejor y Más Cómodo".
            - Tips: Genera 2-3 consejos prácticos. Cada consejo debe tener un 'titulo' (ej: "Postura Correcta") y el 'consejo' (ej: "Siéntate derecho con la espalda recta...").
        9.  **Fila Guia:**
            - Titulo: "El Secreto de los Expertos: La Fila Guía".
            - Descripcion: Explica de forma clara qué es la fila guía (ASDF y JKLÑ), por qué es importante para escribir sin mirar, y menciona las pequeñas marcas en las teclas F y J.
        `;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: responseSchema,
            },
        });

        const jsonText = response.text.trim();
        const data = JSON.parse(jsonText);
        return data as KeyboardInfo;

    } catch (error) {
        console.error("Error fetching data from Gemini API:", error);
        throw new Error("Failed to retrieve keyboard information.");
    }
}