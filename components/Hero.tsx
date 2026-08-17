import Reveal from './Reveal';

export default function Hero() {
    return (
        <section id="top" className="relative min-h-screen flex flex-col justify-center px-6 md:px-20 lg:px-32 pt-24 pb-12 overflow-hidden bg-white">
            <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-neutral-50 -z-10 skew-x-[15deg] transform origin-top-right border-l border-neutral-100" />
            
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="flex flex-col gap-8">
                    <Reveal delay={200}>
                        <div className="flex items-center gap-4 text-red-600 font-bold tracking-widest text-xs uppercase">
                            <span className="w-16 h-[2px] bg-red-600"></span>
                            17 Agustus 2026
                        </div>
                    </Reveal>
                    
                    <Reveal delay={400}>
                        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif font-bold leading-[1.1] text-neutral-900 text-balance">
                            Dirgahayu<br />
                            <span className="text-red-600">Republik</span><br />
                            Indonesia
                        </h1>
                    </Reveal>
                    
                    <Reveal delay={600}>
                        <p className="text-lg md:text-xl text-neutral-600 font-light max-w-md leading-relaxed border-l-2 border-neutral-200 pl-6">
                            Memperingati 81 tahun perjalanan bangsa menuju Indonesia yang berdaulat, adil, dan makmur.
                        </p>
                    </Reveal>
                    
                    <Reveal delay={800} className="flex flex-col sm:flex-row gap-4 mt-4">
                        <a href="#perjalanan" className="inline-flex justify-center items-center px-8 py-4 bg-red-600 text-white text-sm font-bold tracking-widest uppercase hover:bg-red-700 transition-colors">
                            Jelajahi Perjalanan
                        </a>
                        <a href="#makna" className="inline-flex justify-center items-center px-8 py-4 bg-transparent border border-neutral-300 text-neutral-800 text-sm font-bold tracking-widest uppercase hover:border-neutral-900 transition-colors">
                            Makna Kemerdekaan
                        </a>
                    </Reveal>
                </div>

                <div className="hidden lg:flex justify-end">
                    <Reveal delay={1000}>
                        <div className="relative w-[28rem] h-[32rem] flex flex-col items-center justify-center bg-white border border-neutral-200 p-8 z-10">
                            <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-red-600"></div>
                            <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-red-600"></div>
                            <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-red-600"></div>
                            <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-red-600"></div>
                            
                            <div className="text-[14rem] font-serif font-bold text-neutral-900 leading-none tracking-tighter">
                                81
                            </div>
                            <div className="mt-8 text-center">
                                <p className="text-xs font-bold tracking-[0.3em] text-red-600 uppercase">Tahun Merdeka</p>
                            </div>
                            
                            {/* Decorative Block */}
                            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-red-600 -z-10" />
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}