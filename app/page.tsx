import OpeningSequence from '@/components/OpeningSequence';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MaknaKemerdekaan from '@/components/MaknaKemerdekaan';
import PerjalananIndonesia from '@/components/PerjalananIndonesia';
import SemangatBangsa from '@/components/SemangatBangsa';
import Identitas from '@/components/Identitas';
import Footer from '@/components/Footer';
import MusicPlayer from '@/components/MusicPlayer';

export default function Home() {
  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[200] bg-white px-4 py-2 text-red-600 font-bold border-2 border-red-600 outline-none">
        Lewati ke konten utama
      </a>
      <OpeningSequence />
      <Header />
      <MusicPlayer />
      <main id="main-content" className="relative">
        <Hero />
        <MaknaKemerdekaan />
        <PerjalananIndonesia />
        <SemangatBangsa />
        <Identitas />
      </main>
      <Footer />
    </>
  );
}