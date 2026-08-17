'use client';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm border-b border-neutral-200 py-4 shadow-sm' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 md:px-20 lg:px-32 flex items-center justify-between">
                <a href="#top" className="flex items-center gap-4 focus:outline-none focus:ring-2 focus:ring-red-600 p-1">
                    <div className="w-10 h-10 bg-red-600 flex items-center justify-center">
                        <span className="font-serif font-bold text-lg text-white">81</span>
                    </div>
                    <div className="flex flex-col hidden sm:flex">
                        <span className="text-[10px] font-bold tracking-[0.2em] text-neutral-500 uppercase">HUT Kemerdekaan</span>
                        <span className="text-sm font-bold tracking-widest text-neutral-900 uppercase">Republik Indonesia</span>
                    </div>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {['Beranda', 'Makna', 'Perjalanan', 'Semangat'].map((item, i) => (
                        <a key={i} href={i === 0 ? '#top' : `#${item.toLowerCase()}`} className="text-xs font-bold tracking-widest uppercase text-neutral-600 hover:text-red-600 transition-colors p-1">
                            {item}
                        </a>
                    ))}
                </nav>

                {/* Mobile Toggle */}
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-neutral-800" aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu"} type="button">
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white border-b border-neutral-200 py-4 px-6 flex flex-col gap-4 shadow-lg md:hidden">
                    {['Beranda', 'Makna', 'Perjalanan', 'Semangat'].map((item, i) => (
                        <a key={i} href={i === 0 ? '#top' : `#${item.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} className="text-base font-bold tracking-widest uppercase text-neutral-800 hover:text-red-600 py-3 border-b border-neutral-100 last:border-0">
                            {item}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
}