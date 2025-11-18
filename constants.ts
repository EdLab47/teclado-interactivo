import { type KeyLayout, type SectionName } from './types';

const S: { [key: string]: SectionName } = {
    ALPHA: 'Teclado alfanumérico',
    FUNC: 'Teclas de función',
    SYS: 'Teclas de sistema',
    APP: 'Teclas de aplicación',
    NUM: 'Teclado numérico',
    NAV: 'Cursores de navegación',
    ENTER: 'Teclas entrar',
    OTHER: 'Otras',
};

// Layout for a full 105-key Spanish (Latin America) Keyboard
export const KEYBOARD_MAIN_BLOCK: KeyLayout[][] = [
    // Function Row
    [
        { key: 'Escape', display: 'Esc', section: S.OTHER, size: 'w-12' },
        { key: 'F1', section: S.FUNC }, { key: 'F2', section: S.FUNC }, { key: 'F3', section: S.FUNC }, { key: 'F4', section: S.FUNC },
        { key: 'F5', section: S.FUNC }, { key: 'F6', section: S.FUNC }, { key: 'F7', section: S.FUNC }, { key: 'F8', section: S.FUNC },
        { key: 'F9', section: S.FUNC }, { key: 'F10', section: S.FUNC }, { key: 'F11', section: S.FUNC }, { key: 'F12', section: S.FUNC },
    ],
    // Number Row
    [
        { key: '°', shiftKey: '|', section: S.ALPHA }, { key: '1', shiftKey: '!', section: S.ALPHA }, { key: '2', shiftKey: '"', section: S.ALPHA }, { key: '3', shiftKey: '#', section: S.ALPHA }, { key: '4', shiftKey: '$', section: S.ALPHA }, { key: '5', shiftKey: '%', section: S.ALPHA }, { key: '6', shiftKey: '&', section: S.ALPHA },
        { key: '7', shiftKey: '/', section: S.ALPHA }, { key: '8', shiftKey: '(', section: S.ALPHA }, { key: '9', shiftKey: ')', section: S.ALPHA },
        { key: '0', shiftKey: '=', section: S.ALPHA }, { key: "'", shiftKey: '?', secondaryDisplay: '\\', section: S.ALPHA }, { key: '¡', shiftKey: '¿', section: S.ALPHA },
        { key: 'Backspace', display: 'icon:backspace', section: S.ALPHA, size: 'flex-grow w-24' },
    ],
    // QWERTY Row
    [
        { key: 'Tab', display: 'icon:tab', section: S.ALPHA, size: 'w-20' },
        { key: 'q', secondaryDisplay: '@', section: S.ALPHA }, { key: 'w', section: S.ALPHA }, { key: 'e', secondaryDisplay: '€', section: S.ALPHA }, { key: 'r', section: S.ALPHA }, { key: 't', section: S.ALPHA }, { key: 'y', section: S.ALPHA }, { key: 'u', section: S.ALPHA }, { key: 'i', section: S.ALPHA }, { key: 'o', section: S.ALPHA }, { key: 'p', section: S.ALPHA },
        { key: '´', shiftKey: '¨', secondaryDisplay: '{', section: S.ALPHA }, { key: '+', shiftKey: '*', secondaryDisplay: '}', section: S.ALPHA },
        
    ],
    // ASDF (Home) Row
    [
        { key: 'CapsLock', display: 'Bloq Mayús', section: S.ALPHA, size: 'w-24' },
        { key: 'a', section: S.ALPHA }, { key: 's', section: S.ALPHA }, { key: 'd', section: S.ALPHA }, { key: 'f', section: S.ALPHA }, { key: 'g', section: S.ALPHA }, { key: 'h', section: S.ALPHA }, { key: 'j', section: S.ALPHA }, { key: 'k', section: S.ALPHA }, { key: 'l', section: S.ALPHA }, { key: 'ñ', section: S.ALPHA },
        { key: '[', shiftKey: '{', secondaryDisplay: '^', section: S.ALPHA }, { key: ']', shiftKey: '}', section: S.ALPHA },
        { key: 'Enter', display: 'Entrar', section: S.ENTER, size: 'flex-grow w-20' },
    ],
    // ZXCV Row
    [
        { key: 'ShiftLeft', display: 'Mayús', section: S.SYS, size: 'w-16' },
        { key: '<', shiftKey: '>', section: S.ALPHA },
        { key: 'z', section: S.ALPHA }, { key: 'x', section: S.ALPHA }, { key: 'c', section: S.ALPHA }, { key: 'v', section: S.ALPHA }, { key: 'b', section: S.ALPHA }, { key: 'n', section: S.ALPHA }, { key: 'm', section: S.ALPHA },
        { key: ',', shiftKey: ';', section: S.ALPHA }, { key: '.', shiftKey: ':', section: S.ALPHA }, { key: '-', shiftKey: '_', section: S.ALPHA },
        { key: 'ShiftRight', display: 'Mayús', section: S.SYS, size: 'flex-grow w-36' },
    ],
    // Bottom Row
    [
        { key: 'ControlLeft', display: 'Ctrl', section: S.SYS, size: 'w-20' },
        { key: 'MetaLeft', display: 'icon:win', section: S.SYS, size: 'w-16' },
        { key: 'AltLeft', display: 'Alt', section: S.SYS, size: 'w-16' },
        { key: ' ', display: '', section: S.ALPHA, size: 'flex-grow' },
        { key: 'AltRight', display: 'Alt Gr', section: S.SYS, size: 'w-16' },
        { key: 'MetaRight', display: 'icon:win', section: S.SYS, size: 'w-16' },
        { key: 'ContextMenu', display: 'icon:menu', section: S.APP, size: 'w-16' },
        { key: 'ControlRight', display: 'Ctrl', section: S.SYS, size: 'w-20' },
    ],
];

export const KEYBOARD_SYSTEM_BLOCK: KeyLayout[][] = [
    [
        { key: 'PrintScreen', display: 'Imp Pant', section: S.OTHER },
        { key: 'ScrollLock', display: 'Bloq Despl', section: S.OTHER },
        { key: 'Pause', section: S.OTHER },
    ],
];

export const KEYBOARD_NAVIGATION_BLOCK: KeyLayout[][] = [
    [
        { key: 'Insert', section: S.NAV },
        { key: 'Home', display: 'Inicio', section: S.NAV },
        { key: 'PageUp', display: 'Re Pág', section: S.NAV },
    ],
    [
        { key: 'Delete', display: 'Supr', section: S.NAV },
        { key: 'End', display: 'Fin', section: S.NAV },
        { key: 'PageDown', display: 'Av Pág', section: S.NAV },
    ],
];

export const KEYBOARD_ARROWS_BLOCK: KeyLayout[][] = [
    [{ key: 'ArrowUp', display: '▲', section: S.NAV }],
    [
        { key: 'ArrowLeft', display: '◀', section: S.NAV },
        { key: 'ArrowDown', display: '▼', section: S.NAV },
        { key: 'ArrowRight', display: '▶', section: S.NAV },
    ],
];

export const KEYBOARD_NUMPAD_BLOCK: KeyLayout[][] = [
    [
        { key: 'NumLock', display: 'Bloq Num', section: S.NUM },
        { key: '/', section: S.NUM },
        { key: '*', section: S.NUM },
        { key: '-', section: S.NUM },
    ],
    [
        { key: '7', secondaryDisplay: 'Inicio', section: S.NUM },
        { key: '8', secondaryDisplay: '▲', section: S.NUM },
        { key: '9', secondaryDisplay: 'RePág', section: S.NUM },
        { key: '+', section: S.NUM, size: 'h-24' },
    ],
     [
        { key: '4', secondaryDisplay: '◀', section: S.NUM },
        { key: '5', section: S.NUM },
        { key: '6', secondaryDisplay: '▶', section: S.NUM },
    ],
    [
        { key: '1', secondaryDisplay: 'Fin', section: S.NUM },
        { key: '2', secondaryDisplay: '▼', section: S.NUM },
        { key: '3', secondaryDisplay: 'AvPág', section: S.NUM },
        { key: 'NumpadEnter', display: 'Intro', section: S.ENTER, size: 'h-24' },
    ],
    [
        { key: '0', secondaryDisplay: 'Ins', section: S.NUM, size: 'w-24' },
        { key: '.', secondaryDisplay: 'Supr', section: S.NUM },
    ]
];

export const SHIFTED_CHARS_MAP: { [key: string]: string } = {
    '|': '°', '!': '1', '"': '2', '#': '3', '$': '4', '%': '5', '&': '6', '/': '7', '(': '8', ')': '9', '=': '0',
    '?': "'", '¿': '¡', '¨': '´', '*': '+', '{': '[', '}': ']', '>': '<', ';': ',', ':': '.', '_': '-'
};

const unshiftedSymbols = "°'¡´+[]<`,.-";
const shiftedSymbols = '|!"#$%&/()=?¿¨*{}><;:_';
export const PRACTICE_CHARS = `abcdefghijklmnñopqrstuvwxyz1234567890${unshiftedSymbols}${shiftedSymbols}`;