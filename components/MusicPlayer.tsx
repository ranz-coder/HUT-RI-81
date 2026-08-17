'use client';
import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

export default function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch(e => console.log('Audio play failed:', e));
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = () => {
        if (audioRef.current) {
            audioRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-40 flex items-center gap-4 bg-white border border-neutral-200 px-5 py-4 shadow-lg transition-transform hover:-translate-y-1">
            <div className="flex flex-col pr-4 border-r border-neutral-200">
                <span className="text-[9px] font-bold tracking-[0.2em] text-red-600 uppercase">Lagu Nasional</span>
                <span className="text-xs font-bold text-neutral-900 tracking-wide mt-1">Hari Merdeka</span>
            </div>
            
            <button onClick={togglePlay} aria-label={isPlaying ? "Pause musik" : "Putar musik"} type="button" className="text-neutral-800 hover:text-red-600 transition-colors">
                {isPlaying ? <Pause size={18} strokeWidth={2.5} /> : <Play size={18} strokeWidth={2.5} />}
            </button>
            
            <button onClick={toggleMute} aria-label={isMuted ? "Bunyikan suara" : "Bisukan suara"} type="button" className="text-neutral-800 hover:text-red-600 transition-colors">
                {isMuted ? <VolumeX size={18} strokeWidth={2.5} /> : <Volume2 size={18} strokeWidth={2.5} />}
            </button>

            {/* Using a placeholder/public domain source safely, without autoplay */}
            <audio ref={audioRef} src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Indonesia_Raya.ogg" loop />
        </div>
    );
}