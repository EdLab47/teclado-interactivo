
import React from 'react';

interface InfoCardProps {
    title: string;
    children: React.ReactNode;
    fullWidth?: boolean;
    icon?: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, children, fullWidth = false, icon }) => {
    return (
        <div className={`bg-white p-6 rounded-2xl shadow-md border border-slate-200 ${fullWidth ? 'col-span-1 lg:col-span-2' : ''}`}>
            <div className="flex items-start justify-between mb-4 gap-4">
                <h2 className="text-2xl md:text-3xl font-black text-indigo-800">{title}</h2>
                {icon && <div className="text-indigo-500 flex-shrink-0">{icon}</div>}
            </div>
            <div className="text-slate-700 space-y-3 leading-relaxed">
                {children}
            </div>
        </div>
    );
};

export default InfoCard;
