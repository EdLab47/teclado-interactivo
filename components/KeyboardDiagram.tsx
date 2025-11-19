import React from 'react';
import { 
    KEYBOARD_MAIN_BLOCK, 
    KEYBOARD_SYSTEM_BLOCK, 
    KEYBOARD_NAVIGATION_BLOCK, 
    KEYBOARD_ARROWS_BLOCK,
    KEYBOARD_NUMPAD_BLOCK
} from '../constants';
import { type SectionName, type KeyLayout } from '../types';
import { WindowsIcon, MenuIcon, EnterIcon, BackspaceIcon } from './icons';

interface KeyboardDiagramProps {
    highlightedSection: SectionName | null;
    practiceKey: string | string[] | null;
}

const SECTION_COLORS: Record<SectionName, string> = {
    'Teclado alfanumérico': 'bg-sky-500/90 border-sky-600 text-white',
    'Teclas de función': 'bg-orange-400/90 border-orange-500 text-white',
    'Teclas de sistema': 'bg-rose-500/90 border-rose-600 text-white',
    'Teclas de aplicación': 'bg-purple-500/90 border-purple-600 text-white',
    'Teclado numérico': 'bg-indigo-400/90 border-indigo-500 text-white',
    'Cursores de navegación': 'bg-emerald-500/90 border-emerald-600 text-white',
    'Teclas entrar': 'bg-yellow-400/90 border-yellow-500 text-slate-900',
    'Otras': 'bg-slate-300/90 border-slate-400 text-slate-900',
};

const getSectionColors = (section: SectionName) => {
    return SECTION_COLORS[section] || 'bg-slate-700 border-slate-800 text-white';
};

const Key: React.FC<{ layout: KeyLayout; isHighlighted: boolean; isPracticeKey: boolean }> = ({ layout, isHighlighted, isPracticeKey }) => {
    const baseClasses =
        'h-12 flex items-center justify-center rounded-md border font-mono transition-all duration-100 transform active:translate-y-px relative shrink-0 text-sm';
    const sizeClass = layout.size || 'w-12 flex-1';

    let colorClasses;
    if (isPracticeKey) {
        colorClasses =
            'bg-indigo-500 border-indigo-700 text-white animate-pulse shadow-xl scale-110 z-10 border-b-2';
    } else if (isHighlighted) {
        const highlightColors = getSectionColors(layout.section);
        colorClasses = `${highlightColors} shadow-lg scale-105 border-b-2`;
    } else {
        colorClasses =
            'bg-gradient-to-b from-gray-700 to-gray-900 border-gray-950 border-b-4 text-white hover:from-gray-600 hover:to-gray-800 active:border-b-2';
    }

    const keyContent = layout.display || layout.key;

    let content;
    const iconProps = { className: 'w-6 h-6' };

    if (keyContent === 'icon:win') content = <WindowsIcon {...iconProps} />;
    else if (keyContent === 'icon:menu') content = <MenuIcon {...iconProps} />;
    else if (keyContent === 'icon:enter') content = <EnterIcon {...iconProps} />;
    else if (keyContent === 'icon:backspace') content = <BackspaceIcon {...iconProps} />;
    else if (keyContent === 'icon:tab') content = <span className="text-xs">TAB</span>;
    else if (layout.key === ' ') content = null;
    else {
        content = (
            <div className="flex flex-col items-center justify-center w-full h-full p-1">
                {layout.shiftKey && (
                    <span className="absolute top-1 left-1.5 text-xs font-semibold">
                        {layout.shiftKey}
                    </span>
                )}
                <span className={`font-bold uppercase ${layout.shiftKey ? 'pt-1' : ''}`}>
                    {keyContent}
                </span>
                {layout.secondaryDisplay && (
                    <span className="absolute bottom-1 right-1.5 text-xs font-semibold text-cyan-300">
                        {layout.secondaryDisplay}
                    </span>
                )}
            </div>
        );
    }

    return (
        <div className={`${baseClasses} ${sizeClass} ${colorClasses}`}>
            {content}
        </div>
    );
};

const Legend: React.FC = () => {
    const sections = Object.keys(SECTION_COLORS) as SectionName[];
    return (
        <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2">
            {sections.map((section) => (
                <div key={section} className="flex items-center">
                    <span
                        className={`w-4 h-4 rounded-sm mr-2 ${
                            getSectionColors(section).split(' ')[0]
                        }`}
                    ></span>
                    <span className="text-sm text-slate-600">{section}</span>
                </div>
            ))}
        </div>
    );
};

const KeyboardDiagram: React.FC<KeyboardDiagramProps> = ({ highlightedSection, practiceKey }) => {
    const isPracticeKey = (keyLayout: KeyLayout): boolean => {
        if (!practiceKey) return false;

        const keyId = keyLayout.key;

        if (Array.isArray(practiceKey)) {
            if (keyId.startsWith('Shift') && practiceKey.includes('Shift')) return true;
            if (keyId.startsWith('Control') && practiceKey.includes('Control')) return true;
            if (keyId.startsWith('Alt') && practiceKey.includes('Alt')) return true;
            return practiceKey.some((pk) => pk.toLowerCase() === keyId.toLowerCase());
        } else {
            if (practiceKey === ' ' && keyId === ' ') return true;
            return practiceKey.toLowerCase() === keyId.toLowerCase();
        }
    };

    const renderKey = (keyLayout: KeyLayout) => (
        <Key
            layout={keyLayout}
            isHighlighted={highlightedSection === keyLayout.section}
            isPracticeKey={isPracticeKey(keyLayout)}
        />
    );

    const keyId = (k: KeyLayout) => k.key + (k.display || '');

    return (
        <>
            <div className="w-full p-2 overflow-x-auto bg-gradient-to-b from-gray-900 to-black rounded-xl shadow-2xl border-t border-gray-700 sm:p-4">
                <div className="flex justify-center items-start gap-x-4 min-w-max">
                    {/* Main Keyboard Block */}
                    <div className="flex flex-col gap-y-1">
                        <div className="flex w-full gap-x-1">
                            {KEYBOARD_MAIN_BLOCK[0].map((k) => (
                                <React.Fragment key={keyId(k)}>{renderKey(k)}</React.Fragment>
                            ))}
                        </div>
                        {KEYBOARD_MAIN_BLOCK.slice(1).map((row, rowIndex) => (
                            <div key={`main-row-${rowIndex}`} className="flex w-full gap-x-1">
                                {row.map((k) => (
                                    <React.Fragment key={keyId(k)}>{renderKey(k)}</React.Fragment>
                                ))}
                            </div>
                        ))}
                    </div>

                    {/* Middle Block (Sys, Nav, Arrows) */}
                    <div className="flex flex-col gap-y-8">
                        <div className="flex w-full gap-x-1">
                            {KEYBOARD_SYSTEM_BLOCK[0].map((k) => (
                                <React.Fragment key={keyId(k)}>{renderKey(k)}</React.Fragment>
                            ))}
                        </div>
                        <div className="grid grid-cols-3 grid-rows-2 gap-1">
                            {KEYBOARD_NAVIGATION_BLOCK[0].map((k) => (
                                <React.Fragment key={keyId(k)}>{renderKey(k)}</React.Fragment>
                            ))}
                            {KEYBOARD_NAVIGATION_BLOCK[1].map((k) => (
                                <React.Fragment key={keyId(k)}>{renderKey(k)}</React.Fragment>
                            ))}
                        </div>
                        <div className="grid grid-cols-3 grid-rows-2 gap-1 w-40">
                            <div className="col-start-2">
                                {renderKey(KEYBOARD_ARROWS_BLOCK[0][0])}
                            </div>
                            {KEYBOARD_ARROWS_BLOCK[1].map((k) => (
                                <React.Fragment key={keyId(k)}>{renderKey(k)}</React.Fragment>
                            ))}
                        </div>
                    </div>

                    {/* Numpad Block */}
                    <div className="grid grid-cols-4 grid-rows-5 gap-1">
                        {KEYBOARD_NUMPAD_BLOCK[0].map((k) => (
                            <div key={keyId(k)} className="col-span-1">
                                {renderKey(k)}
                            </div>
                        ))}

                        <div className="col-span-1 row-span-2">
                            {renderKey(KEYBOARD_NUMPAD_BLOCK[1][3])}
                        </div>

                        {KEYBOARD_NUMPAD_BLOCK[1].slice(0, 3).map((k) => (
                            <div key={keyId(k)} className="col-span-1">
                                {renderKey(k)}
                            </div>
                        ))}

                        {KEYBOARD_NUMPAD_BLOCK[2].map((k) => (
                            <div key={keyId(k)} className="col-span-1">
                                {renderKey(k)}
                            </div>
                        ))}

                        <div className="col-span-1 row-span-2">
                            {renderKey(KEYBOARD_NUMPAD_BLOCK[3][3])}
                        </div>

                        {KEYBOARD_NUMPAD_BLOCK[3].slice(0, 3).map((k) => (
                            <div key={keyId(k)} className="col-span-1">
                                {renderKey(k)}
                            </div>
                        ))}

                        <div className="col-span-2">
                            {renderKey(KEYBOARD_NUMPAD_BLOCK[4][0])}
                        </div>
                        <div className="col-span-1">
                            {renderKey(KEYBOARD_NUMPAD_BLOCK[4][1])}
                        </div>
                    </div>
                </div>
            </div>
            <Legend />
        </>
    );
};

export default KeyboardDiagram;
