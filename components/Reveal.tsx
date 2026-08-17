'use client';
import { useEffect, useRef, useState } from 'react';

export default function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [prefersReduced, setPrefersReduced] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        setPrefersReduced(mediaQuery.matches);
        if (mediaQuery.matches) {
            setIsVisible(true);
            return;
        }

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.1 });

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div 
            ref={ref} 
            className={`transition-all duration-1000 ${isVisible || prefersReduced ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`} 
            style={{ transitionDelay: prefersReduced ? '0ms' : `${delay}ms` }}
        >
            {children}
        </div>
    );
}