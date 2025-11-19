
export type SectionName = 
    | 'Teclado alfanumérico'
    | 'Teclas de función'
    | 'Teclas de sistema'
    | 'Teclas de aplicación'
    | 'Teclado numérico'
    | 'Cursores de navegación'
    | 'Teclas entrar'
    | 'Otras';

export interface KeyboardSection {
    nombre: string;
    descripcion: string;
}

export interface KeyboardType {
    nombre: string;
    descripcion: string;
    icono: 'mechanical' | 'membrane' | 'ergonomic' | 'wireless';
}

export interface TypingTip {
    titulo: string;
    consejo: string;
}

export interface HistoryInfo {
    titulo: string;
    contenido: string[];
    fuentes: string[];
}

export interface TimelineEvent {
    anio: string;
    titulo: string;
    descripcion: string;
}

export interface InfographicInfo {
    titulo: string;
    eventos: TimelineEvent[];
}

export interface ActivityInfo {
    titulo: string;
    introduccion: string;
    lista: string[];
}

// Nueva interfaz para Ciudadanía Digital (NEM)
export interface CitizenshipInfo {
    titulo: string;
    introduccion: string;
    reglas: {
        regla: string;
        explicacion: string;
    }[];
}

// Nueva interfaz para Atajos (Productividad)
export interface ShortcutInfo {
    titulo: string;
    lista: {
        teclas: string;
        funcion: string;
    }[];
}

export interface KeyboardInfo {
    definicion: {
        titulo: string;
        descripcion: string;
    };
    importancia: {
        titulo: string;
        descripcion: string;
    };
    comoFunciona: {
        titulo: string;
        descripcion: string;
    };
    historia: HistoryInfo;
    infografia: InfographicInfo;
    tipos: {
        titulo: string;
        teclados: KeyboardType[];
    };
    partes: {
        titulo: string;
        introduccion: string;
        secciones: KeyboardSection[];
    };
    actividades: ActivityInfo;
    consejos: {
        titulo: string;
        tips: TypingTip[];
    };
    filaGuia: {
        titulo: string;
        descripcion: string;
    };
    // Nuevas secciones
    ciudadania: CitizenshipInfo;
    atajos: ShortcutInfo;
}

export interface KeyLayout {
    key: string;
    display?: string;
    shiftKey?: string;
    secondaryDisplay?: string;
    size?: string;
    section: SectionName;
}
