import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

/**
 * HeroSection Component
 * Design: Romantic Luxury Modern
 * Features: Typewriter animation, glowing effect, pulsing button
 */
export default function HeroSection() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'كل عام وأنت أجمل أقداري يا حنان';
  const subText = 'إلى نوني... البعيدة عن عيني، القريبة من قلبي دائمًا ✨';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  const handleOpenMessage = () => {
    const messageSection = document.getElementById('message-section');
    messageSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-pink-50 via-white to-pink-50">
      {/* Background gradient with animated elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-100/30 via-white/50 to-pink-50/30" />
      
      {/* Animated background circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Main heading with typewriter effect */}
        <div className="mb-8 relative">
          <h1 className="text-5xl md:text-7xl font-bold text-pink-600 mb-4 min-h-24 drop-shadow-lg animate-slide-up">
            <span className="inline-block">
              {displayedText}
              {displayedText.length < fullText.length && <span className="animate-pulse">|</span>}
            </span>
          </h1>
          
          {/* Glow effect around heading */}
          <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-pink-300 to-pink-200 opacity-40 -z-10 rounded-full animate-glow" />
        </div>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-pink-500 font-light mb-12" style={{ animation: 'slideUp 1s ease-out 3s both' }}>
          {subText}
        </p>

        {/* Main button */}
        <div className="relative inline-block" style={{ animation: 'slideUp 1s ease-out 3.5s both' }}>
          <Button
            onClick={handleOpenMessage}
            className="relative px-8 py-6 text-lg md:text-xl bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white rounded-full font-semibold shadow-2xl hover:shadow-pink-300/50 transition-all duration-300 animate-pulse"
          >
            افتح الرسالة ❤️
          </Button>
          
          {/* Glow effect around button */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full blur-xl opacity-50 -z-10 animate-glow" />
        </div>

        {/* Floating hearts around button */}
        <div className="absolute top-0 left-1/4 text-pink-300 text-2xl animate-float" style={{ animationDelay: '0s' }}>💖</div>
        <div className="absolute top-10 right-1/4 text-pink-300 text-2xl animate-float" style={{ animationDelay: '0.5s' }}>💖</div>
        <div className="absolute bottom-10 left-1/3 text-pink-300 text-2xl animate-float" style={{ animationDelay: '1s' }}>💖</div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="text-pink-400 text-2xl">↓</div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          50% {
            transform: translateY(-30px) rotate(10deg);
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-60px) rotate(20deg);
            opacity: 0;
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
