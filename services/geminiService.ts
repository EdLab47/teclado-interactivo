export async function getKeyboardInfo() {
  return {
    definicion: {
      titulo: "¿Qué es un Teclado?",
      descripcion: "Un teclado es un dispositivo que permite ingresar letras, números y comandos a una computadora."
    },
    importancia: {
      titulo: "¿Por qué es importante?",
      descripcion: "El teclado es fundamental para escribir, buscar información y usar programas."
    },
    comoFunciona: {
      titulo: "La magia detrás de las teclas",
      descripcion: "Cada tecla envía una señal única a la computadora, igual que un interruptor."
    },
    historia: {
      titulo: "De la máquina de escribir a tus dedos",
      contenido: [
        "Los teclados modernos vienen de las máquinas de escribir.",
        "Se adaptaron para funcionar con computadoras."
      ]
    },
    tipos: {
      titulo: "Tipos de teclados",
      teclados: [
        { nombre: "Mecánico", descripcion: "Teclas fuertes y precisas.", icono: "mechanical" },
        { nombre: "Membrana", descripcion: "Suaves y silenciosos.", icono: "membrane" },
        { nombre: "Ergonómico", descripcion: "Diseñados para comodidad.", icono: "ergonomic" },
        { nombre: "Inalámbrico", descripcion: "Se conectan sin cables.", icono: "wireless" }
      ]
    },
    partes: {
      titulo: "Un mundo en tus manos",
      introduccion: "El teclado organiza las teclas en grupos.",
      secciones: [
        { nombre: "Teclado alfanumérico", descripcion: "Incluye letras, números y signos." },
        { nombre: "Teclas de función", descripcion: "F1-F12 son atajos." },
        { nombre: "Teclas de sistema", descripcion: "Ctrl, Alt y Shift." },
        { nombre: "Teclas de aplicación", descripcion: "Menú contextual." },
        { nombre: "Teclado numérico", descripcion: "Útil para ingresar números rápido." },
        { nombre: "Cursores de navegación", descripcion: "Moverse por documentos." },
        { nombre: "Teclas entrar", descripcion: "Enter principal y del numérico." },
        { nombre: "Otras", descripcion: "Esc, Impr Pant, Pausa." }
      ]
    },
    actividades: {
      titulo: "¡Hora de practicar!",
      introduccion: "Vamos a explorar el teclado.",
      lista: [
        "Escribe tu nombre usando el teclado.",
        "Presiona una letra con Shift para mayúscula.",
        "Escribe tu edad con el teclado numérico."
      ]
    },
    consejos: {
      titulo: "Consejos útiles",
      tips: [
        { titulo: "Postura correcta", consejo: "Siéntate derecho y relaja los brazos." },
        { titulo: "Escribe suave", consejo: "No presiones las teclas con fuerza." }
      ]
    },
    filaGuia: {
      titulo: "Fila guía",
      descripcion: "ASDF y JKLÑ ayudan a escribir sin mirar. Las teclas F y J tienen marcas."
    }
  };
}
