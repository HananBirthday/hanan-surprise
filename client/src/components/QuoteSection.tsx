import { useEffect, useRef, useState } from 'react';

/**
 * QuoteSection Component
 * Design: Centered quote with fade effect
 * Features: Scroll-triggered animation, elegant styling
 */
export default function QuoteSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-white via-pink-50 to-white overflow-hidden"
    >
      {/* Background animated circles */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Main quote */}
      <div
        className={`relative z-10 max-w-3xl text-center transition-all duration-1000 transform ${
          isVisible
            ? 'opacity-100 scale-100'
            : 'opacity-0 scale-95'
        }`}
      >
        {/* Decorative quote marks */}
        <div className="text-8xl text-pink-200 opacity-50 mb-4 font-light">"</div>

        {/* Quote text */}
        <blockquote className="text-3xl md:text-5xl font-light text-pink-700 mb-8 leading-relaxed">
          مهما باعدتنا الدنيا...
          <br />
          <span className="font-bold text-pink-600">ستبقين أقرب الناس لقلبي.</span>
        </blockquote>

        {/* Decorative quote marks */}
        <div className="text-8xl text-pink-200 opacity-50 mb-8 font-light text-right">"</div>

        {/* Decorative line */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-1 w-12 bg-gradient-to-r from-transparent to-pink-300" />
          <div className="w-2 h-2 bg-pink-400 rounded-full" />
          <div className="h-1 w-12 bg-gradient-to-l from-transparent to-pink-300" />
        </div>

        {/* Signature */}
        <p className="text-pink-500 text-lg font-light">
          من قلب يحبك بصدق
        </p>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 text-pink-300 text-4xl opacity-30 animate-float">💕</div>
      <div className="absolute bottom-20 right-10 text-pink-300 text-4xl opacity-30 animate-float" style={{ animationDelay: '1s' }}>💕</div>
      <div className="absolute top-1/2 left-1/4 text-pink-200 text-3xl opacity-20 animate-float" style={{ animationDelay: '0.5s' }}>✨</div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px);
            opacity: 0.6;
          }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
