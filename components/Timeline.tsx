
import React from 'react';
import { type InfographicInfo } from '../types';

interface TimelineProps {
    data: InfographicInfo;
}

const Timeline: React.FC<TimelineProps> = ({ data }) => {
    return (
        <div className="mt-8">
            <h3 className="text-xl font-bold text-indigo-700 mb-6 text-center">{data.titulo}</h3>
            <div className="relative border-l-4 border-indigo-300 ml-3 md:ml-6 space-y-8">
                {data.eventos.map((evento, index) => (
                    <div key={index} className="mb-8 ml-6 md:ml-10 relative group">
                        {/* Dot */}
                        <span className="absolute -left-[42px] md:-left-[58px] top-1 flex items-center justify-center w-8 h-8 bg-indigo-100 rounded-full border-4 border-indigo-500 group-hover:scale-110 transition-transform">
                            <span className="w-2.5 h-2.5 bg-indigo-600 rounded-full"></span>
                        </span>
                        
                        <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                            <span className="inline-block px-3 py-1 mb-2 text-xs font-bold tracking-wider text-white uppercase bg-indigo-600 rounded-full">
                                {evento.anio}
                            </span>
                            <h4 className="text-lg font-bold text-slate-800 mb-1">{evento.titulo}</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                {evento.descripcion}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;
