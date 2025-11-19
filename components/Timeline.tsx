import React from 'react';
import { type InfographicInfo } from '../types';

interface TimelineProps {
    data?: InfographicInfo; // puede venir undefined
}

const Timeline: React.FC<TimelineProps> = ({ data }) => {
    // Asegurar estructura
    const titulo = data?.titulo ?? "Línea de Tiempo";
    const eventos = data?.eventos ?? []; // evita error .map

    // Si no hay eventos, mostramos algo sencillo pero no rompemos React
    if (eventos.length === 0) {
        return (
            <div className="mt-8 text-center text-slate-400 italic">
                (La línea de tiempo no tiene información disponible)
            </div>
        );
    }

    return (
        <div className="mt-8">
            <h3 className="text-xl font-bold text-indigo-700 mb-6 text-center">
                {titulo}
            </h3>

            <div className="relative border-l-4 border-indigo-300 ml-3 md:ml-6 space-y-8">
                {eventos.map((evento, index) => (
                    <div key={index} className="mb-8 ml-6 md:ml-10 relative group">

                        {/* Punto de la línea */}
                        <span className="absolute -left-[42px] md:-left-[58px] top-1 flex items-center justify-center w-8 h-8 bg-indigo-100 rounded-full border-4 border-indigo-500 group-hover:scale-110 transition-transform">
                            <span className="w-2.5 h-2.5 bg-indigo-600 rounded-full"></span>
                        </span>

                        <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                            <span className="inline-block px-3 py-1 mb-2 text-xs font-bold tracking-wider text-white uppercase bg-indigo-600 rounded-full">
                                {evento?.anio ?? "Año desconocido"}
                            </span>

                            <h4 className="text-lg font-bold text-slate-800 mb-1">
                                {evento?.titulo ?? "Sin título"}
                            </h4>

                            <p className="text-slate-600 text-sm leading-relaxed">
                                {evento?.descripcion ?? "Sin descripción."}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;
