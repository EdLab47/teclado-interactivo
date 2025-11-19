
import { GoogleGenAI, Type } from "@google/genai";
import { type KeyboardInfo } from '../types';

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
                fuentes: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Lista de instituciones o fuentes históricas reales" }
            },
            required: ['titulo', 'contenido', 'fuentes']
        },
        infografia: {
            type: Type.OBJECT,
            properties: {
                titulo: { type: Type.STRING },
                eventos: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            anio: { type: Type.STRING },
                            titulo: { type: Type.STRING },
                            descripcion: { type: Type.STRING }
                        },
                        required: ['anio', 'titulo', 'descripcion']
                    }
                }
            },
            required: ['titulo', 'eventos']
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
        },
        ciudadania: {
            type: Type.OBJECT,
            properties: {
                titulo: { type: Type.STRING },
                introduccion: { type: Type.STRING },
                reglas: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            regla: { type: Type.STRING },
                            explicacion: { type: Type.STRING }
                        },
                        required: ['regla', 'explicacion']
                    }
                }
            },
            required: ['titulo', 'introduccion', 'reglas']
        },
        atajos: {
            type: Type.OBJECT,
            properties: {
                titulo: { type: Type.STRING },
                lista: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            teclas: { type: Type.STRING },
                            funcion: { type: Type.STRING }
                        },
                        required: ['teclas', 'funcion']
                    }
                }
            },
            required: ['titulo', 'lista']
        }
    },
     required: ['definicion', 'importancia', 'comoFunciona', 'historia', 'infografia', 'tipos', 'partes', 'actividades', 'consejos', 'filaGuia', 'ciudadania', 'atajos']
};

export async function getKeyboardInfo(): Promise<KeyboardInfo> {
    try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

        const prompt = `
        Actúa como un historiador de la tecnología y educador experto alineado con la Nueva Escuela Mexicana (NEM).
        
        OBJETIVO: Crear material educativo sobre el teclado que fomente el pensamiento crítico, la responsabilidad ciudadana y la alfabetización digital.
        
        REQUISITOS ESTRICTOS:
        1. Información histórica precisa y verídica (fuentes reales).
        2. Tono educativo, inclusivo y humanista.
        
        ESTRUCTURA JSON REQUERIDA:
        1. **Definición:** Técnica y funcional.
        2. **Importancia:** HCI (Interacción Humano-Computadora).
        3. **Cómo Funciona:** Del interruptor al código binario.
        4. **Historia:** Sholes (QWERTY), Teletipos, Terminales, PC. Citar fuentes reales.
        5. **Infografía:** 5 hitos con año, título y descripción.
        6. **Partes:** Zonas del teclado.
        7. **Tipos:** Mecánico, Membrana, etc.
        8. **Actividades:** Ejercicios prácticos.
        9. **Consejos:** Ergonomía y salud.
        10. **Fila Guía:** Mecanografía al tacto.
        
        11. **Ciudadanía Digital (NEM):** 
            - Título: "Netiqueta y Ciudadanía Digital".
            - Introducción: Cómo el uso del teclado refleja nuestros valores y respeto en línea.
            - Reglas: 4 reglas esenciales de convivencia digital (ej: No usar mayúsculas sostenidas porque equivale a gritar, respeto en foros, seguridad de contraseñas).
            
        12. **Atajos (Productividad):**
            - Título: "Poder y Eficiencia: Atajos de Teclado".
            - Lista: 6 atajos universales que fomenten la eficiencia (Ctrl+C, Ctrl+V, Ctrl+Z, Alt+Tab, Ctrl+F, Win+L).
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
        // En caso de error crítico, podríamos devolver datos estáticos de respaldo, 
        // pero por ahora dejamos que la UI maneje la excepción.
        throw new Error("Failed to retrieve keyboard information.");
    }
}
