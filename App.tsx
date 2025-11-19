
import React, { useState, useEffect, useCallback } from 'react';
import { getKeyboardInfo } from './services/geminiService';
import { type KeyboardInfo, type SectionName, KeyboardType } from './types';
import Header from './components/Header';
import InfoCard from './components/InfoCard';
import KeyboardDiagram from './components/KeyboardDiagram';
import TypingPractice from './components/TypingPractice';
import Timeline from './components/Timeline';
import { LoadingIcon, ErrorIcon, MechanicalKeyboardIcon, MembraneKeyboardIcon, ErgonomicKeyboardIcon, WirelessKeyboardIcon, TipIcon, HistoryIcon, ActivityIcon, KeyboardIcon, IdeaIcon, ShieldIcon, LightningIcon } from './components/icons';

const App: React.FC = () => {
    const [keyboardInfo, setKeyboardInfo] = useState<KeyboardInfo | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [highlightedSection, setHighlightedSection] = useState<SectionName | null>(null);
    const [practiceKey, setPracticeKey] = useState<string | string[] | null>(null);
    const [activeSectionDescription, setActiveSectionDescription] = useState<string | null>(null);

    const fetchInfo = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const info = await getKeyboardInfo();
            setKeyboardInfo(info);
        } catch (err) {
            setError('No se pudo cargar la información. Por favor, inténtalo de nuevo más tarde.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchInfo();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSectionHover = (section: SectionName | null) => {
        setHighlightedSection(section);
        if (section && keyboardInfo) {
            const sectionData = keyboardInfo.partes.secciones.find(s => s.nombre === section);
            setActiveSectionDescription(sectionData ? sectionData.descripcion : 'Descripción no encontrada.');
        } else {
            setActiveSectionDescription(null);
        }
    };
    
    const getTypeIcon = (iconName: KeyboardType['icono']) => {
        switch (iconName) {
            case 'mechanical': return <MechanicalKeyboardIcon className="w-12 h-12 text-indigo-500 mb-3" />;
            case 'membrane': return <MembraneKeyboardIcon className="w-12 h-12 text-sky-500 mb-3" />;
            case 'ergonomic': return <ErgonomicKeyboardIcon className="w-12 h-12 text-emerald-500 mb-3" />;
            case 'wireless': return <WirelessKeyboardIcon className="w-12 h-12 text-rose-500 mb-3" />;
            default: return null;
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            <Header />
            <main className="container mx-auto p-4 md:p-8">
                {loading && (
                    <div className="flex flex-col items-center justify-center text-center h-64">
                        <LoadingIcon className="w-12 h-12 mb-4" />
                        <p className="text-xl font-semibold text-indigo-600">Cargando contenido educativo...</p>
                    </div>
                )}
                {error && (
                     <div className="flex flex-col items-center justify-center text-center h-64 bg-red-50/80 border-l-4 border-red-500 p-6 rounded-lg shadow-md">
                        <ErrorIcon className="w-12 h-12 mb-4 text-red-500" />
                        <p className="text-xl font-semibold text-red-700">{error}</p>
                        <button 
                            onClick={fetchInfo}
                            className="mt-4 px-6 py-2 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition-colors"
                        >
                            Reintentar
                        </button>
                    </div>
                )}
                {keyboardInfo && !loading && !error && (
                    <div className="space-y-8">
                        
                        <InfoCard title="Introducción al Teclado" icon={<KeyboardIcon className="w-8 h-8"/>}>
                           <h3 className="text-xl font-bold text-indigo-700 mb-2">{keyboardInfo.definicion.titulo}</h3>
                           <p>{keyboardInfo.definicion.descripcion}</p>
                           <h3 className="text-xl font-bold text-indigo-700 mt-4 mb-2">{keyboardInfo.importancia.titulo}</h3>
                           <p>{keyboardInfo.importancia.descripcion}</p>
                        </InfoCard>

                        <InfoCard title="Historia y Evolución" icon={<HistoryIcon className="w-8 h-8"/>}>
                            <h3 className="text-xl font-bold text-indigo-700 mb-2">{keyboardInfo.historia.titulo}</h3>
                            <div className="space-y-3 mb-6">
                                {keyboardInfo.historia.contenido.map((paragraph, index) => <p key={index} className="text-justify">{paragraph}</p>)}
                            </div>
                            
                            {/* Sección de Infografía / Línea de Tiempo */}
                            <Timeline data={keyboardInfo.infografia} />

                            <div className="mt-6 pt-4 border-t border-slate-200">
                                <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Fuentes Consultadas:</p>
                                <ul className="text-xs text-slate-500 list-disc list-inside">
                                    {keyboardInfo.historia.fuentes.map((fuente, idx) => (
                                        <li key={idx}>{fuente}</li>
                                    ))}
                                </ul>
                            </div>
                        </InfoCard>

                        <InfoCard title="Estructura del Teclado" icon={<KeyboardIcon className="w-8 h-8" />} fullWidth>
                            <p className="mb-4 text-center text-slate-600">{keyboardInfo.partes.introduccion}</p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                                <div className="md:col-span-1 space-y-2">
                                    {keyboardInfo.partes.secciones.map((section) => (
                                        <div
                                            key={section.nombre}
                                            onMouseEnter={() => handleSectionHover(section.nombre as SectionName)}
                                            onMouseLeave={() => handleSectionHover(null)}
                                            className="p-3 bg-slate-100 rounded-lg cursor-pointer transition-all duration-300 hover:bg-indigo-200 hover:shadow-lg hover:-translate-y-1"
                                        >
                                            <h4 className="font-bold text-indigo-700 text-center sm:text-left">{section.nombre}</h4>
                                        </div>
                                    ))}
                                </div>
                                <div className="md:col-span-2 flex items-center justify-center p-4 bg-slate-50 rounded-lg min-h-[150px] border">
                                    {activeSectionDescription ? (
                                        <p className="text-slate-700 text-center transition-opacity duration-300">{activeSectionDescription}</p>
                                    ) : (
                                        <p className="text-slate-400 font-semibold text-center">Pasa el cursor sobre una sección de la izquierda para leer su descripción técnica.</p>
                                    )}
                                </div>
                            </div>
                            <KeyboardDiagram highlightedSection={highlightedSection} practiceKey={practiceKey} />
                        </InfoCard>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <InfoCard title="Funcionamiento Técnico" icon={<IdeaIcon className="w-8 h-8"/>}>
                               <h3 className="text-xl font-bold text-indigo-700 mb-2">{keyboardInfo.comoFunciona.titulo}</h3>
                               <p>{keyboardInfo.comoFunciona.descripcion}</p>
                            </InfoCard>

                            <InfoCard title="Tipos de Tecnologías" icon={<MechanicalKeyboardIcon className="w-8 h-8" />}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {keyboardInfo.tipos.teclados.map((tipo) => (
                                        <div key={tipo.nombre} className="flex flex-col items-center text-center p-3 bg-slate-100 rounded-lg">
                                            {getTypeIcon(tipo.icono)}
                                            <h4 className="font-bold text-md text-indigo-700">{tipo.nombre}</h4>
                                            <p className="text-xs text-slate-600 mt-1">{tipo.descripcion}</p>
                                        </div>
                                    ))}
                                </div>
                            </InfoCard>
                        </div>

                         {/* NUEVA SECCIÓN: Ciudadanía Digital (NEM) */}
                         <InfoCard title="Ciudadanía y Netiqueta" icon={<ShieldIcon className="w-8 h-8 text-emerald-600"/>} fullWidth>
                            <h3 className="text-xl font-bold text-indigo-700 mb-2">{keyboardInfo.ciudadania.titulo}</h3>
                            <p className="mb-4 italic text-slate-600">"{keyboardInfo.ciudadania.introduccion}"</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {keyboardInfo.ciudadania.reglas.map((item, idx) => (
                                    <div key={idx} className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500">
                                        <h4 className="font-bold text-emerald-800 mb-1">{item.regla}</h4>
                                        <p className="text-sm text-emerald-700">{item.explicacion}</p>
                                    </div>
                                ))}
                            </div>
                        </InfoCard>

                        {/* NUEVA SECCIÓN: Atajos de Productividad */}
                        <InfoCard title="Productividad y Eficiencia" icon={<LightningIcon className="w-8 h-8 text-amber-500"/>}>
                            <h3 className="text-xl font-bold text-indigo-700 mb-2">{keyboardInfo.atajos.titulo}</h3>
                            <p className="mb-4 text-sm text-slate-600">Domina el teclado para trabajar mejor.</p>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {keyboardInfo.atajos.lista.map((atajo, idx) => (
                                    <div key={idx} className="flex flex-col items-center p-3 bg-white border rounded shadow-sm">
                                        <kbd className="px-2 py-1 mb-2 text-sm font-semibold text-slate-800 bg-slate-100 border border-slate-200 rounded-lg shadow-sm font-mono whitespace-nowrap">
                                            {atajo.teclas}
                                        </kbd>
                                        <span className="text-xs text-center text-slate-500 leading-tight">{atajo.funcion}</span>
                                    </div>
                                ))}
                            </div>
                        </InfoCard>

                        <InfoCard title="Actividades Prácticas" icon={<ActivityIcon className="w-8 h-8" />} fullWidth>
                            <p className="mb-4">{keyboardInfo.actividades.introduccion}</p>
                            <ul className="list-disc list-inside space-y-2 mb-6 bg-slate-100 p-4 rounded-lg">
                                {keyboardInfo.actividades.lista.map((activity, index) => <li key={index}>{activity}</li>)}
                            </ul>
                        </InfoCard>

                        <InfoCard title="Mecanografía y Ergonomía" icon={<TipIcon className="w-8 h-8"/>} fullWidth>
                           <h3 className="text-xl font-bold text-indigo-700 mt-4 mb-2">{keyboardInfo.consejos.titulo}</h3>
                           <ul className="space-y-3 mb-6">
                                {keyboardInfo.consejos.tips.map((tip, index) => (
                                    <li key={index} className="flex items-start">
                                        <TipIcon className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0 mt-1" />
                                        <span><span className="font-bold">{tip.titulo}:</span> {tip.consejo}</span>
                                    </li>
                                ))}
                           </ul>
                           <h3 className="text-xl font-bold text-indigo-700 mt-4 mb-2">{keyboardInfo.filaGuia.titulo}</h3>
                           <p className="mb-6">{keyboardInfo.filaGuia.descripcion}</p>
                           
                           <KeyboardDiagram highlightedSection={null} practiceKey={practiceKey} />

                           <div className="mt-8 bg-white py-4 rounded-lg">
                                <TypingPractice onNewChar={setPracticeKey} />
                            </div>
                        </InfoCard>
                    </div>
                )}
            </main>
             <footer className="text-center p-6 text-slate-500 text-sm">
                <p>Material educativo generado con asistencia de IA para fines didácticos.</p>
            </footer>
        </div>
    );
};

export default App;
