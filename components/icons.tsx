import React from 'react';

export const KeyboardIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M6 8h.01" />
        <path d="M10 8h.01" />
        <path d="M14 8h.01" />
        <path d="M18 8h.01" />
        <path d="M6 12h.01" />
        <path d="M10 12h.01" />
        <path d="M14 12h.01" />
        <path d="M18 12h.01" />
        <path d="M8 16h8" />
    </svg>
);

// Fix: Add LoadingIcon component
export const LoadingIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-spin" {...props}>
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
);

// Fix: Add ErrorIcon component
export const ErrorIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
);

// Fix: Add MechanicalKeyboardIcon component
export const MechanicalKeyboardIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="2" y="14" width="20" height="8" rx="2" />
        <path d="M6 18h.01" />
        <path d="M10 18h.01" />
        <path d="M14 18h.01" />
        <path d="M18 18h.01" />
        <path d="M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4" />
        <path d="M12 10V6" />
        <path d="M10 8h4" />
    </svg>
);

// Fix: Add MembraneKeyboardIcon component
export const MembraneKeyboardIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M4 12c2-2 4-2 6 0s4 2 6 0" />
        <path d="M5 17c2-2 4-2 6 0s4 2 6 0" />
        <path d="M6 8h.01" />
        <path d="M10 8h.01" />
        <path d="M14 8h.01" />
        <path d="M18 8h.01" />
    </svg>
);

// Fix: Add ErgonomicKeyboardIcon component
export const ErgonomicKeyboardIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M20 18a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2h16v-2z" />
        <path d="M11 5c-1.5 1.5-3 2-3 4v5h3V9c0-2 1.5-2.5 3-4" />
        <path d="M13 5c1.5 1.5 3 2 3 4v5h-3V9c0-2-1.5-2.5-3-4" />
        <path d="M8 9h.01" />
        <path d="M16 9h.01" />
        <path d="M8 13h.01" />
        <path d="M16 13h.01" />
    </svg>
);

// Fix: Add WirelessKeyboardIcon component
export const WirelessKeyboardIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M5 10a7 7 0 0 1 14 0" />
        <path d="M8 7a4 4 0 0 1 8 0" />
        <path d="M11 4a1 1 0 0 1 2 0" />
        <rect x="2" y="12" width="20" height="8" rx="2" />
        <path d="M6 16h.01" />
        <path d="M10 16h.01" />
        <path d="M14 16h.01" />
        <path d="M18 16h.01" />
    </svg>
);

// Fix: Add TipIcon component
export const TipIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M15.09 16.05A6.49 6.49 0 0 1 8.95 9.91a6.5 6.5 0 1 1 11.18 3.96" />
        <path d="M8 19h8" />
        <path d="M12 19v3" />
    </svg>
);

// Fix: Add HistoryIcon component
export const HistoryIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M3 3v5h5" />
        <path d="M3.05 13A9 9 0 1 0 6 5.3L3 8" />
        <path d="M12 7v5l4 2" />
    </svg>
);

// Fix: Add ActivityIcon component
export const ActivityIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
);

// Fix: Add IdeaIcon component (can be the same as TipIcon)
export const IdeaIcon = TipIcon;


// Keyboard Diagram Icons

// Fix: Add WindowsIcon component
export const WindowsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M3 11.5h8.5v-8h-8.5v8zm0 1h8.5v8h-8.5v-8zm9.5-9.5v8h8.5v-8h-8.5zm0 9.5h8.5v8h-8.5v-8z" />
    </svg>
);

// Fix: Add MenuIcon component
export const MenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="9" y1="12" x2="15" y2="12" />
        <line x1="9" y1="16" x2="15" y2="16" />
        <line x1="9" y1="8" x2="15" y2="8" />
    </svg>
);

// Fix: Add EnterIcon component
export const EnterIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M18 15v-6a2 2 0 0 0-2-2H6" />
        <path d="m10 11-4 4 4 4" />
    </svg>
);

// Fix: Add ShiftArrowIcon component
export const ShiftArrowIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 8V20" />
        <path d="m6 14 6-6 6 6" />
    </svg>
);

// Fix: Add TabIcon component
export const TabIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M7 15l-4-4 4-4" />
        <path d="M17 15l4-4-4-4" />
    </svg>
);

// Fix: Add BackspaceIcon component
export const BackspaceIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
        <line x1="18" y1="9" x2="12" y2="15" />
        <line x1="12" y1="9" x2="18" y2="15" />
    </svg>
);
