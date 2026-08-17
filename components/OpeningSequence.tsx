'use client';
import { useEffect, useState } from 'react';

export default function OpeningSequence() {
    const [phase, setPhase] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        if (mediaQuery.matches) {
            setIsVisible(false);
            return;
        }

        const t1 = setTimeout(() => setPhase(1), 1000); // 1s: Logo fades in
        const t2 = setTimeout(() => setPhase(2), 3000); // 3s: Doors close
        const t3 = setTimeout(() => setPhase(3), 5000); // 5s: Doors open
        const t4 = setTimeout(() => setIsVisible(false), 6500); // 6.5s: Unmount

        return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
    }, []);

    if (!isVisible) return null;

    return (
        <div className={`fixed inset-0 z-[100] flex items-center justify-center overflow-hidden transition-colors duration-0 ${phase >= 2 ? 'bg-transparent pointer-events-none' : 'bg-white pointer-events-auto'}`}>
            
            {/* Initial Text and Logo */}
            <div className={`absolute flex flex-col items-center justify-center transition-opacity duration-700 z-10 ${phase >= 2 ? 'opacity-0' : 'opacity-100'}`}>
                <p className="text-sm tracking-[0.3em] text-neutral-500 font-medium opacity-100">REPUBLIK INDONESIA</p>
                <div className={`mt-6 flex items-center justify-center w-32 h-32 border-2 border-red-600 transition-all duration-1000 transform ${phase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <span className="text-6xl font-serif font-bold text-red-600">81</span>
                </div>
            </div>

            {/* Red Door (Left) */}
            <div className={`absolute top-0 left-0 w-1/2 h-full bg-[#E3000F] z-20 transition-transform duration-1000 ease-[cubic-bezier(0.8,0,0.2,1)] origin-left ${phase === 2 ? 'scale-x-100' : 'scale-x-0'}`}></div>
            
            {/* White Door (Right) */}
            <div className={`absolute top-0 right-0 w-1/2 h-full bg-white z-20 shadow-[-10px_0_30px_rgba(0,0,0,0.05)] transition-transform duration-1000 ease-[cubic-bezier(0.8,0,0.2,1)] origin-right ${phase === 2 ? 'scale-x-100' : 'scale-x-0'}`}></div>

            {/* Skip Button */}
            <button 
                onClick={() => setIsVisible(false)} 
                className={`absolute bottom-10 z-30 px-6 py-2 border border-neutral-300 text-neutral-500 text-xs tracking-widest uppercase hover:bg-neutral-100 transition-colors pointer-events-auto ${phase >= 2 ? 'opacity-0' : 'opacity-100'}`}
                type="button"
            >
                Lewati Pembukaan
            </button>
        </div>
    );
}