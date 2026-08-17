export default function Footer() {
    return (
        <footer className="bg-[#111111] text-neutral-400 py-16 px-6 md:px-20 lg:px-32 border-t-4 border-red-600">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 border-b border-neutral-800 pb-16 mb-8">
                <div>
                    <div className="text-4xl font-serif font-bold text-white mb-6 tracking-tight">81 TAHUN RI</div>
                    <p className="max-w-sm text-sm leading-relaxed text-neutral-500">
                        Situs tidak resmi/prototipe desain untuk peringatan 81 Tahun Kemerdekaan Republik Indonesia. Tema: "Indonesia Berdaulat, Adil, dan Makmur." 17 Agustus 2026.
                    </p>
                </div>
                <div className="flex flex-col md:items-end gap-5">
                    <a href="https://setneg.go.id" target="_blank" rel="noopener noreferrer" className="text-sm font-bold tracking-widest uppercase hover:text-white transition-colors">Kementerian Sekretariat Negara</a>
                    <a href="#" className="text-sm font-bold tracking-widest uppercase hover:text-white transition-colors">Pedoman Visual & Logo</a>
                    <a href="#" className="text-sm font-bold tracking-widest uppercase hover:text-white transition-colors">Agenda Kenegaraan</a>
                </div>
            </div>
            
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-neutral-600 font-medium tracking-wide">
                <p>&copy; 2026 Republik Indonesia. Hak Cipta Dilindungi Undang-Undang.</p>
                <div className="flex gap-8">
                    <a href="#" className="hover:text-white transition-colors">Aksesibilitas</a>
                    <a href="#" className="hover:text-white transition-colors">Privasi</a>
                    <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
                </div>
            </div>
        </footer>
    );
}