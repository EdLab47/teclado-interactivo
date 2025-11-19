// src/services/geminiService.ts

// En esta versión ya no llamamos a la API.
// Devolvemos directamente toda la información estática
// para que siempre se vea igual en GitHub Pages.

export async function getKeyboardInfo() {
  return {
    definicion: {
      titulo: "¿Qué es un Teclado?",
      descripcion:
        "El teclado es un dispositivo de entrada que permite la interacción con computadoras y otros sistemas digitales. Funciona como una interfaz que traduce las pulsaciones físicas de sus teclas en señales eléctricas que son interpretadas como caracteres, comandos o funciones por el sistema operativo, posibilitando la escritura de texto, la ejecución de operaciones y la navegación en entornos digitales."
    },

    importancia: {
      titulo: "La Importancia del Teclado en la Interacción Humano–Computadora (HCI)",
      descripcion:
        "Dentro del campo de la Interacción Humano–Computadora, el teclado es crucial por ser el medio principal para la entrada de datos y comandos. Facilita una comunicación precisa y eficiente entre el usuario y la máquina, permitiendo la creación de documentos, programación, diseño gráfico, juegos y la gestión de sistemas. Su diseño ergonómico y su disposición estandarizada han sido clave para su adopción universal, democratizando el acceso a la tecnología y potenciando la productividad y la creatividad humana en la era digital."
    },

    comoFunciona: {
      titulo: "La magia detrás de las teclas",
      descripcion:
        "Cuando presionas una tecla, cierras un circuito eléctrico momentáneamente. El controlador del teclado detecta qué tecla se activó, genera un código (código de escaneo) y lo envía a la computadora. El sistema operativo lo traduce en un carácter, comando u acción específica. En teclados modernos pueden intervenir matrices de contactos, membranas o interruptores mecánicos individuales, así como controladores que filtran pulsaciones simultáneas y atajos especiales."
    },

    historia: {
      titulo: "La Fascinante Evolución del Teclado: De la Máquina de Escribir al Dispositivo Digital",
      contenido: [
        "La génesis del teclado moderno se encuentra en la máquina de escribir. A finales del siglo XIX, Christopher Latham Sholes inventó el diseño QWERTY en 1874. Este diseño fue pensado para evitar el atasco de las palancas en las máquinas de escribir mecánicas, y sorprendentemente se ha mantenido hasta hoy.",
        "Durante gran parte del siglo XX, los teletipos (teleprinters) extendieron el concepto del teclado para la comunicación a distancia. Estos dispositivos permitían enviar y recibir mensajes de texto a través de líneas telegráficas, utilizando un teclado similar al de una máquina de escribir.",
        "Con la llegada de las computadoras en las décadas de 1960 y 1970, el teclado se adaptó como el principal dispositivo de entrada para las terminales de computadora. Estos teclados estaban directamente conectados a grandes mainframes o minicomputadoras, permitiendo a los operadores ingresar comandos y datos.",
        "La verdadera masificación del teclado llegó con la era de la computadora personal (PC) a principios de los años 80. El IBM PC, lanzado en 1981, estandarizó la distribución de 83 teclas, sentando las bases para los teclados que conocemos hoy en día, consolidando su rol indispensable como herramienta de interacción universal."
      ],
      fuentes: [
        "Sholes, C. L. (1874). QWERTY Keyboard Patent.",
        "Computer History Museum – Timeline of Computer Keyboards.",
        "IEEE Annals of the History of Computing – The Evolution of Human–Computer Input Devices."
      ]
    },

    // 🕒 Línea de tiempo / infografía
    infografia: {
      titulo: "Hitos Clave en la Historia del Teclado",
      eventos: [
        {
          anio: "1874",
          titulo: "Invención del Teclado QWERTY",
          descripcion:
            "Christopher Latham Sholes patenta el diseño del teclado QWERTY, optimizado para máquinas de escribir mecánicas y que se convertiría en el estándar global."
        },
        {
          anio: "1930s",
          titulo: "Expansión de los Teletipos",
          descripcion:
            "Los teletipos, que utilizaban un teclado para enviar y recibir mensajes a larga distancia, se vuelven fundamentales en la comunicación comercial y militar."
        },
        {
          anio: "1960–1970",
          titulo: "Teclados para Terminales de Computadora",
          descripcion:
            "Los primeros teclados electrónicos se integran a terminales conectadas a grandes computadoras centrales, permitiendo la introducción de comandos de texto y la interacción remota."
        },
        {
          anio: "1981",
          titulo: "Estandarización del Teclado de 83 Teclas",
          descripcion:
            "Con la llegada del IBM PC se populariza un diseño de teclado con 83 teclas, que sentó las bases para el arreglo actual en la mayoría de los equipos de escritorio."
        },
        {
          anio: "1990s",
          titulo: "Teclados Multimedia y Ergonomía",
          descripcion:
            "Surgen teclados con teclas adicionales para controlar volumen, reproducción de medios y acceso rápido, así como diseños ergonómicos para reducir la fatiga y prevenir lesiones."
        },
        {
          anio: "Actualidad",
          titulo: "Teclados Mecánicos, Inalámbricos y Portátiles",
          descripcion:
            "Los teclados modernos combinan tecnologías mecánicas y de membrana, conexiones inalámbricas y diseños compactos para laptops y dispositivos móviles, manteniendo la misma lógica de distribución de teclas."
        }
      ]
    },

    tipos: {
      titulo: "Tipos de teclados",
      teclados: [
        {
          nombre: "Mecánico",
          descripcion: "Utiliza interruptores individuales por tecla. Ofrece sensación táctil precisa, alta durabilidad y es muy apreciado por programadores y gamers.",
          icono: "mechanical"
        },
        {
          nombre: "Membrana",
          descripcion: "Emplea una capa flexible de membrana. Son silenciosos, ligeros y económicos, comunes en oficinas y entornos escolares.",
          icono: "membrane"
        },
        {
          nombre: "Ergonómico",
          descripcion: "Diseñados para reducir la tensión en muñecas y hombros. Suelen dividir el teclado en dos bloques o inclinarlo para una postura más natural.",
          icono: "ergonomic"
        },
        {
          nombre: "Inalámbrico",
          descripcion: "Se conecta mediante Bluetooth o receptores USB, permitiendo mayor libertad de movimiento y escritorios más limpios.",
          icono: "wireless"
        }
      ]
    },

    partes: {
      titulo: "Un mundo en tus manos",
      introduccion:
        "El teclado organiza las teclas en grupos o secciones que facilitan su uso. Reconocer estas partes ayuda a escribir más rápido, usar atajos y comprender mejor cómo interactuamos con la computadora.",
      secciones: [
        {
          nombre: "Teclado alfanumérico",
          descripcion:
            "Es la zona principal. Incluye letras, números superiores y símbolos básicos. Es equivalente a la máquina de escribir tradicional y es donde sucede la mayor parte de la escritura."
        },
        {
          nombre: "Teclas de función",
          descripcion:
            "Las teclas F1 a F12 activan funciones rápidas dependiendo del programa: abrir ayuda, refrescar una página, cambiar el brillo, controlar volumen, entre otras."
        },
        {
          nombre: "Teclas de sistema",
          descripcion:
            "Incluyen teclas como Ctrl, Alt, Shift, Windows o Command. Se usan combinadas con otras teclas para crear atajos que aceleran el trabajo."
        },
        {
          nombre: "Teclas de aplicación",
          descripcion:
            "Incluyen la tecla de menú contextual o accesos directos específicos. Permiten abrir menús rápidos o acciones asociadas a una aplicación."
        },
        {
          nombre: "Teclado numérico",
          descripcion:
            "Ubicado a la derecha en muchos teclados. Facilita la captura rápida de números, operaciones básicas y funciones de cálculo."
        },
        {
          nombre: "Cursores de navegación",
          descripcion:
            "Flechas y teclas como Inicio, Fin, RePág y AvPág. Sirven para desplazarse por documentos, hojas de cálculo y páginas web sin usar el mouse."
        },
        {
          nombre: "Teclas entrar",
          descripcion:
            "Incluye la tecla Enter principal y la tecla Enter del teclado numérico. Se usan para confirmar acciones, enviar formularios y saltar de línea al escribir."
        },
        {
          nombre: "Otras",
          descripcion:
            "Teclas como Esc, Impr Pant, Bloq Despl o Pausa/Inter. Aunque se usan menos, son útiles para funciones específicas como cancelar acciones o capturar la pantalla."
        }
      ]
    },

    // 🌐 Ciudadanía digital y netiqueta
    ciudadania: {
      titulo: "Ciudadanía Digital y Netiqueta al Usar el Teclado",
      introduccion:
        "Escribir en un teclado no solo implica teclear rápido; también significa comunicarnos de forma respetuosa, clara y responsable en entornos digitales.",
      reglas: [
        {
          regla: "Piensa antes de escribir",
          explicacion:
            "Antes de enviar un mensaje, correo o comentario, revisa si es respetuoso y claro. Lo que escribes puede ser leído y guardado por muchas personas."
        },
        {
          regla: "Evita escribir con mayúsculas todo el tiempo",
          explicacion:
            "EN INTERNET, LAS MAYÚSCULAS SE INTERPRETAN COMO GRITOS. Úsalas solo cuando sean necesarias, por ejemplo, para siglas o títulos."
        },
        {
          regla: "Cuida la ortografía y el tono",
          explicacion:
            "Un buen uso del lenguaje demuestra respeto hacia tus lectores y evita malentendidos. Usa signos de puntuación y saludos adecuados."
        },
        {
          regla: "Respeta la privacidad",
          explicacion:
            "No escribas ni compartas datos personales tuyos o de otras personas sin permiso (direcciones, teléfonos, contraseñas, etc.)."
        }
      ]
    },

    // ⌨️ Atajos de productividad
    atajos: {
      titulo: "Atajos de Teclado para Ser Más Productivo",
      lista: [
        { teclas: "Ctrl + C", funcion: "Copiar el texto o elemento seleccionado." },
        { teclas: "Ctrl + V", funcion: "Pegar el contenido copiado." },
        { teclas: "Ctrl + X", funcion: "Cortar (mover) el texto o elemento seleccionado." },
        { teclas: "Ctrl + Z", funcion: "Deshacer la última acción realizada." },
        { teclas: "Ctrl + Y", funcion: "Rehacer la acción que acabas de deshacer." },
        { teclas: "Ctrl + S", funcion: "Guardar rápidamente un documento o proyecto." },
        { teclas: "Alt + Tab", funcion: "Cambiar entre ventanas abiertas en el sistema." },
        { teclas: "Win + D", funcion: "Mostrar el escritorio y minimizar todas las ventanas." }
      ]
    },

    actividades: {
      titulo: "¡Hora de practicar!",
      introduccion:
        "Vamos a explorar el teclado con actividades sencillas que puedes realizar en el aula o en casa.",
      lista: [
        "Escribe tu nombre completo usando solo el teclado alfanumérico.",
        "Escribe la misma palabra usando mayúsculas con la tecla Shift y luego con Bloq Mayús.",
        "Escribe tu edad utilizando únicamente el teclado numérico (si tu teclado lo tiene).",
        "Utiliza las flechas de dirección para desplazarte por un texto sin usar el mouse.",
        "Practica un párrafo corto respetando mayúsculas, acentos y signos de puntuación."
      ]
    },

    consejos: {
      titulo: "Consejos de Mecanografía y Salud",
      tips: [
        {
          titulo: "Postura correcta",
          consejo:
            "Siéntate derecho, apoya bien la espalda, mantén los pies en el piso y coloca el monitor a la altura de los ojos."
        },
        {
          titulo: "Manos relajadas",
          consejo:
            "No estires demasiado los dedos ni golpees las teclas con fuerza. Usa movimientos suaves y naturales."
        },
        {
          titulo: "Descansos activos",
          consejo:
            "Cada 20–30 minutos descansa un poco: estira dedos, muñecas y hombros para evitar tensión muscular."
        }
      ]
    },

    filaGuia: {
      titulo: "La Fila Guía",
      descripcion:
        "En los teclados en español, las teclas ASDF y JKLÑ forman la fila guía para la mecanografía. Colocar correctamente los dedos sobre estas teclas permite escribir sin mirar el teclado. Las teclas F y J tienen una pequeña marca táctil que ayuda a encontrar la posición sin usar la vista."
    }
  };
}
