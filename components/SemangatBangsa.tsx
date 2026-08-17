import Reveal from './Reveal';

export default function SemangatBangsa() {
    return (
        <section id="semangat" className="py-32 bg-white px-6 md:px-20 lg:px-32">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <Reveal>
                    <div className="pr-0 md:pr-12">
                        <h2 className="text-xs font-bold tracking-[0.2em] text-red-600 uppercase mb-6">Editorial</h2>
                        <h3 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 leading-[1.2] mb-8">
                            Semangat <br />
                            <span className="italic font-light text-neutral-500">Gotong Royong &</span><br />
                            Persatuan
                        </h3>
                        <p className="text-base text-neutral-600 leading-relaxed mb-12">
                            Di usia yang ke-81 tahun, Republik Indonesia terus melangkah maju dengan semangat kolaborasi. Generasi muda menjadi ujung tombak inovasi dan pembangunan, berlandaskan nilai luhur Pancasila demi mengantarkan bangsa menuju era keemasan.
                        </p>
                        
                        <div className="grid grid-cols-2 gap-12 border-t border-neutral-200 pt-12">
                            <div>
                                <div className="text-4xl font-serif font-bold text-neutral-900 mb-2">280M+</div>
                                <div className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Jiwa Bersatu</div>
                            </div>
                            <div>
                                <div className="text-4xl font-serif font-bold text-neutral-900 mb-2">17K+</div>
                                <div className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Pulau Terhubung</div>
                            </div>
                        </div>
                    </div>
                </Reveal>
                
                <Reveal delay={300}>
                    <div className="aspect-square bg-neutral-50 relative overflow-hidden flex items-center justify-center p-8 border border-neutral-200">
                        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(45deg,#000_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                        <div className="relative w-full h-full border border-neutral-300 flex flex-col items-center justify-center bg-white p-12 text-center shadow-sm">
                            <div className="w-12 h-12 border border-red-600 flex items-center justify-center mb-8 rotate-45">
                                <div className="w-6 h-6 bg-red-600"></div>
                            </div>
                            <h4 className="text-2xl font-serif font-bold text-neutral-900 mb-4 uppercase tracking-widest">Bhinneka Tunggal Ika</h4>
                            <p className="text-neutral-500 text-sm leading-relaxed max-w-sm">
                                Berbeda-beda tetapi tetap satu jua. Prinsip abadi yang menguatkan harmoni di seluruh pelosok nusantara dari Sabang sampai Merauke.
                            </p>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}