import Reveal from './Reveal';

export default function Identitas() {
    return (
        <section className="py-32 bg-[#F9F9F9] px-6 md:px-20 lg:px-32 border-t border-neutral-200 text-center">
            <div className="max-w-3xl mx-auto">
                <Reveal>
                    <h2 className="text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase mb-12">Identitas Visual Resmi HUT ke-81 RI</h2>
                    
                    <div className="flex justify-center mb-12">
                        <div className="w-64 h-64 bg-white flex items-center justify-center border border-neutral-200 shadow-sm relative">
                            {/* Represents official logo usage safely with typography */}
                            <span className="text-8xl font-serif font-bold text-red-600 tracking-tighter">81</span>
                            <div className="absolute bottom-4 w-full text-center">
                                <span className="text-[10px] font-bold tracking-[0.3em] text-neutral-400 uppercase">Tahun RI</span>
                            </div>
                        </div>
                    </div>
                    
                    <h3 className="text-3xl font-serif font-bold text-neutral-900 mb-6">Indonesia Berdaulat, Adil, dan Makmur</h3>
                    
                    <p className="text-neutral-600 mb-10 text-sm leading-relaxed">
                        Identitas visual melambangkan sinergi berkelanjutan dari seluruh elemen bangsa. Dirancang dengan proporsi formal yang merepresentasikan kewibawaan negara. (Logo resmi mengikuti pedoman Kementerian Sekretariat Negara).
                    </p>
                    
                    <a href="https://setneg.go.id" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-neutral-900 text-white text-sm font-bold tracking-widest uppercase hover:bg-neutral-800 transition-colors">
                        Situs Resmi Pemerintah
                    </a>
                </Reveal>
            </div>
        </section>
    );
}