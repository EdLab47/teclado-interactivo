
import React from 'react';
import { KeyboardIcon } from './icons';

const Header: React.FC = () => {
    return (
        <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-10 border-b border-slate-200">
            <div className="container mx-auto px-4 md:px-8 py-4 flex items-center justify-center">
                <KeyboardIcon className="w-10 h-10 text-indigo-600 mr-4" />
                <div className="text-center">
                    <h1 className="text-2xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-500">
                        Explorador de Teclado Interactivo
                    </h1>
                    <p className="text-xs md:text-sm font-semibold text-slate-500 tracking-wide">Una Aventura de Aprendizaje Interactivo</p>
                </div>
            </div>
        </header>
    );
};

export default Header;
