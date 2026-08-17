import Reveal from './Reveal';

export default function MaknaKemerdekaan() {
    const data = [
        { title: 'Berdaulat', desc: 'Menjunjung tinggi kemandirian bangsa dalam setiap aspek kehidupan, menjaga kehormatan dan integritas teritorial serta politik di kancah global.' },
        { title: 'Adil', desc: 'Memastikan pemerataan hukum, sosial, dan ekonomi bagi seluruh rakyat Indonesia tanpa memandang latar belakang, demi kesejahteraan bersama.' },
        { title: 'Makmur', desc: 'Mewujudkan pertumbuhan ekonomi yang inklusif, pemanfaatan sumber daya alam yang bijak, dan kemajuan teknologi untuk kejayaan bangsa.' }
    ];

    return (
        <section id="makna" className="py-32 bg-[#F9F9F9] px-6 md:px-20 lg:px-32 border-t border-neutral-200">
            <div className="max-w-7xl mx-auto">
                <Reveal>
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 border-b border-neutral-200 pb-12">
                        <div>
                            <h2 className="text-xs font-bold tracking-[0.2em] text-red-600 uppercase mb-4">Pilar Bangsa</h2>
                            <h3 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 text-balance">Makna Kemerdekaan<br/>ke-81 Tahun</h3>
                        </div>
                        <p className="max-w-sm text-neutral-600 text-sm leading-relaxed">
                            Tema resmi peringatan kemerdekaan tahun ini difokuskan pada tiga pilar utama yang menjadi pondasi kuat masa depan Republik Indonesia.
                        </p>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
                    {data.map((item, i) => (
                        <Reveal key={item.title} delay={i * 200}>
                            <div className="flex flex-col group">
                                <span className="text-7xl font-serif font-bold text-neutral-200 group-hover:text-red-100 transition-colors duration-500 mb-6">0{i + 1}</span>
                                <h4 className="text-2xl font-bold text-neutral-900 mb-4">{item.title}</h4>
                                <p className="text-neutral-600 leading-relaxed text-sm">{item.desc}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}