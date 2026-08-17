import Reveal from './Reveal';

export default function PerjalananIndonesia() {
    const timeline = [
        { year: '1908', event: 'Kebangkitan Nasional', desc: 'Lahirnya kesadaran berbangsa yang menjadi cikal bakal perjuangan pergerakan kemerdekaan.' },
        { year: '1928', event: 'Sumpah Pemuda', desc: 'Ikrar persatuan satu nusa, satu bangsa, dan satu bahasa persatuan, bahasa Indonesia.' },
        { year: '1945', event: 'Proklamasi Kemerdekaan', desc: 'Pernyataan kemerdekaan resmi Republik Indonesia pada 17 Agustus.' },
        { year: '1945+', event: 'Mempertahankan Kemerdekaan', desc: 'Perjuangan diplomasi dan fisik menjaga kedaulatan negara dari berbagai ancaman.' },
        { year: '2026', event: '81 Tahun Indonesia', desc: 'Melangkah pasti menuju cita-cita bangsa: berdaulat, adil, dan makmur.' },
    ];

    return (
        <section id="perjalanan" className="py-32 bg-[#111111] text-white px-6 md:px-20 lg:px-32">
            <div className="max-w-7xl mx-auto">
                <Reveal>
                    <div className="flex items-center gap-4 mb-20">
                        <span className="w-16 h-[2px] bg-red-600"></span>
                        <h2 className="text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase">Perjalanan Bangsa</h2>
                    </div>
                </Reveal>

                <div className="relative border-l border-neutral-800 md:border-l-0 md:border-t md:flex pt-8 md:pt-16 ml-4 md:ml-0 overflow-x-auto pb-8 hide-scrollbar">
                    {timeline.map((item, i) => (
                        <Reveal key={item.year} delay={i * 150} className="relative pl-8 md:pl-0 md:min-w-[280px] md:flex-1 mb-16 md:mb-0 md:pr-8 last:pr-0">
                            {/* Marker */}
                            <div className="absolute left-[-5px] md:left-0 md:top-[-69px] w-2.5 h-2.5 bg-red-600"></div>
                            
                            <h3 className="text-4xl font-serif font-bold text-neutral-200 mb-4">{item.year}</h3>
                            <h4 className="text-base font-bold text-white mb-3 uppercase tracking-wider">{item.event}</h4>
                            <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}