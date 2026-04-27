import { useEffect, useRef, useState } from 'react';

/**
 * EndingSection Component
 * Design: Romantic ending with signature
 * Features: Typewriter signature animation, floating hearts
 */
export default function EndingSection() {
  const [displayedSignature, setDisplayedSignature] = useState('');
  const signatureRef = useRef<HTMLDivElement>(null);
  const fullSignature = 'سيف';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullSignature.length) {
        setDisplayedSignature(fullSignature.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-b from-white via-pink-50 to-pink-100 overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-2xl">
        {/* Main text */}
        <div className="mb-12" style={{ animation: 'slideUp 1s ease-out forwards' }}>
          <p className="text-3xl md:text-4xl font-light text-pink-700 mb-4">
            إلى نوني...
          </p>
          <p className="text-2xl md:text-3xl text-pink-600 font-light">
            ستبقين أجمل قصة سكنت قلبي ✨
          </p>
        </div>

        {/* Signature section */}
        <div className="my-16 py-12 border-t-2 border-b-2 border-pink-200">
          <p className="text-sm text-pink-400 font-light mb-8 tracking-widest">التوقيع</p>
          
          {/* Signature box */}
          <div ref={signatureRef} className="relative inline-block mb-8">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-pink-200 rounded-lg blur-xl opacity-40 -z-10" />
            
            {/* Signature text with handwritten style */}
            <div 
              className="text-8xl md:text-9xl text-pink-500 drop-shadow-lg transition-all duration-300"
              style={{
                fontFamily: "'Scheherazade New', 'Amiri', serif",
                letterSpacing: '0.02em',
                fontWeight: '400',
                fontStyle: 'normal',
                textShadow: '2px 2px 6px rgba(236, 72, 153, 0.25), 0 0 20px rgba(236, 72, 153, 0.15)',
                animation: displayedSignature.length === fullSignature.length ? 'none' : 'none',
                lineHeight: '1.2'
              }}
            >
              {displayedSignature}
              {displayedSignature.length < fullSignature.length && (
                <span className="animate-pulse">|</span>
              )}
            </div>
          </div>

          <p className="text-sm text-pink-400 font-light tracking-widest">بكل حب وشوق</p>
        </div>

        {/* Final message */}
        <div className="mt-12" style={{ animation: 'slideUp 1s ease-out 2s both' }}>
          <p className="text-pink-500 text-lg font-light mb-4">
            كل عام وأنت أقرب إلى قلبي
          </p>
          <p className="text-pink-400 text-sm font-light">
            مع كل نبضة، مع كل لحظة، مع كل يوم
          </p>
        </div>
      </div>

      {/* Floating hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-300 text-3xl opacity-40"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              animation: `floatSlow ${6 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`
            }}
          >
            💖
          </div>
        ))}
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(5deg);
          }
        }
      `}</style>
    </section>
  );
}
