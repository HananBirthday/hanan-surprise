import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

/**
 * AudioPlayer Component
 * Design: Romantic background music player
 * Features: HTML5 audio with Amro Diab - Wahashtiny
 */
export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  // Amro Diab - Wahashtiny from a reliable streaming source with CORS support
  const audioUrl = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'; // Fallback demo
  // Note: For production, use a proper music streaming service or upload to a CORS-enabled CDN

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        // Play
        audioRef.current.volume = 0.3;
        audioRef.current.play().catch(err => {
          console.log('Autoplay prevented:', err);
        });
        setIsMuted(false);
        setIsPlaying(true);
      } else {
        // Pause
        audioRef.current.pause();
        setIsMuted(true);
        setIsPlaying(false);
      }
    }
  };

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(err => {
        console.log('Autoplay prevented:', err);
      });
      setIsMuted(false);
      setIsPlaying(true);
    }
  };

  return (
    <>
      {/* Audio element */}
      <audio
        ref={audioRef}
        loop
        crossOrigin="anonymous"
        src={audioUrl}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onError={() => {
          console.log('Audio source error');
        }}
      />

      {/* Floating music control button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={toggleMute}
          className="relative w-14 h-14 rounded-full bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white shadow-lg hover:shadow-pink-300/50 transition-all duration-300 flex items-center justify-center group"
          title={isMuted ? 'تشغيل الموسيقى' : 'إيقاف الموسيقى'}
          aria-label="زر التحكم بالموسيقى"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10" />

          {/* Icon */}
          {isMuted ? (
            <VolumeX size={24} />
          ) : (
            <>
              <Volume2 size={24} className="animate-pulse" />
              {/* Pulse animation when playing */}
              <div className="absolute inset-0 rounded-full border-2 border-white opacity-50 animate-ping" />
            </>
          )}
        </button>
      </div>

      {/* Play prompt */}
      {isMuted && (
        <div className="fixed bottom-24 right-8 z-50 bg-white rounded-lg shadow-lg p-4 max-w-xs animate-slide-up">
          <p className="text-pink-600 text-sm font-light mb-3">
            اضغط على زر الموسيقى لتشغيل أغنية "واحشتيني" 🎵
          </p>
          <button
            onClick={handlePlay}
            className="w-full px-4 py-2 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-lg text-sm font-semibold hover:from-pink-500 hover:to-pink-600 transition-all duration-300"
          >
            شغل الموسيقى
          </button>
        </div>
      )}
    </>
  );
}
