
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { PRACTICE_CHARS, SHIFTED_CHARS_MAP } from '../constants';

interface TypingPracticeProps {
    onNewChar: (char: string | string[] | null) => void;
}

enum Feedback {
    None,
    Correct,
    Incorrect
}

const TypingPractice: React.FC<TypingPracticeProps> = ({ onNewChar }) => {
    const [currentChar, setCurrentChar] = useState<string>('');
    const [score, setScore] = useState<number>(0);
    const [feedback, setFeedback] = useState<Feedback>(Feedback.None);
    const feedbackTimeoutRef = useRef<number | null>(null);

    const pickNewChar = useCallback(() => {
        const randomIndex = Math.floor(Math.random() * PRACTICE_CHARS.length);
        const newChar = PRACTICE_CHARS[randomIndex];
        setCurrentChar(newChar);
        
        const baseKey = SHIFTED_CHARS_MAP[newChar as keyof typeof SHIFTED_CHARS_MAP];
        if (baseKey) {
            onNewChar(['Shift', baseKey]);
        } else {
            onNewChar(newChar);
        }
    }, [onNewChar]);

    useEffect(() => {
        pickNewChar();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleKeyPress = useCallback((event: KeyboardEvent) => {
        // Ignore modifier keys etc.
        if (event.key.length > 1) return;
        event.preventDefault();

        let correct = false;
        // This simple check works for most cases:
        // - For ')', event.key is ')' if Shift+0 is pressed.
        // - For '9', event.key is '9' if 9 is pressed.
        if (event.key === currentChar) {
            correct = true;
        // This leniently handles letter casing (e.g. 'a' with CapsLock on)
        } else if (event.key.toLowerCase() === currentChar.toLowerCase() && currentChar.toLowerCase() !== currentChar.toUpperCase()) {
            correct = true;
        }


        if (correct) {
            setScore(prev => prev + 1);
            setFeedback(Feedback.Correct);
        } else {
            setFeedback(Feedback.Incorrect);
        }

        if (feedbackTimeoutRef.current) {
            clearTimeout(feedbackTimeoutRef.current);
        }
        feedbackTimeoutRef.current = window.setTimeout(() => {
            setFeedback(Feedback.None);
            pickNewChar();
        }, 300);

    }, [currentChar, pickNewChar]);


    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
            if (feedbackTimeoutRef.current) {
                clearTimeout(feedbackTimeoutRef.current);
            }
        };
    }, [handleKeyPress]);

    const getCharStyle = () => {
        switch (feedback) {
            case Feedback.Correct:
                return 'bg-green-500 text-white scale-125';
            case Feedback.Incorrect:
                return 'bg-red-500 text-white scale-90';
            default:
                return 'bg-indigo-500 text-white';
        }
    }

    return (
        <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-black mb-4 text-indigo-800">Práctica de Velocidad</h2>
            <p className="text-slate-600 mb-6">Presiona la tecla que aparece en la pantalla lo más rápido que puedas.</p>
            <div className="flex justify-center items-center space-x-8">
                <div className="flex flex-col items-center">
                    <span className="text-lg font-semibold text-slate-500">Puntuación</span>
                    <span className="text-5xl font-bold text-indigo-600">{score}</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-lg font-semibold text-slate-500">Presiona esta tecla</span>
                    <div 
                        className={`w-24 h-24 sm:w-32 sm:h-32 rounded-2xl flex items-center justify-center text-6xl sm:text-7xl font-mono font-bold shadow-lg transition-all duration-200 ${getCharStyle()}`}
                    >
                        {currentChar}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TypingPractice;
