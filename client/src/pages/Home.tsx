import { useEffect, useState } from 'react';
import HeroSection from '@/components/HeroSection';
import PhotoSection from '@/components/PhotoSection';
import MessageSection from '@/components/MessageSection';
import CountdownSection from '@/components/CountdownSection';
import LoveMeterSection from '@/components/LoveMeterSection';
import QuoteSection from '@/components/QuoteSection';
import EndingSection from '@/components/EndingSection';
import FloatingHearts from '@/components/FloatingHearts';
import Sparkles from '@/components/Sparkles';
import AudioPlayer from '@/components/AudioPlayer';

/**
 * Home Page - Romantic Birthday Surprise Website
 * Design: Luxury Romantic Modern
 * Colors: Soft pink (#FFB6D9), white (#FFFBFE), with subtle gradients
 * Typography: Amiri for display, Cairo for body, with elegant Arabic fonts
 */
export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = scrollHeight > 0 ? (scrolled / scrollHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-50">
      <FloatingHearts />
      <Sparkles />
      <AudioPlayer />

      {/* Progress indicator */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-300 via-pink-400 to-pink-300 z-50" style={{ width: `${scrollProgress}%` }} />

      {/* Main content */}
      <main className="relative z-10">
        <HeroSection />
        <PhotoSection />
        <MessageSection />
        <CountdownSection />
        <LoveMeterSection />
        <QuoteSection />
        <EndingSection />
      </main>

      {/* Footer */}
      <footer className="py-12 text-center bg-gradient-to-t from-pink-50 to-transparent">
        <p className="text-sm text-pink-400 font-light tracking-wide">
          Made with Love for Hanan ✨
        </p>
      </footer>
    </div>
  );
}
