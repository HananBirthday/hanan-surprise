import { useState } from 'react';

/**
 * PhotoSection Component
 * Design: Luxury frame with glow effect
 * Features: Hover animation, zoom effect, floating hearts on hover
 */
export default function PhotoSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHovered) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    if (Math.random() > 0.7) {
      const newHeart = {
        id: Date.now(),
        x,
        y
      };
      setHearts(prev => [...prev, newHeart]);
      setTimeout(() => {
        setHearts(prev => prev.filter(h => h.id !== newHeart.id));
      }, 1000);
    }
  };

  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-white via-pink-50 to-white">
      <div className="max-w-4xl mx-auto">
        {/* Section title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-pink-600 mb-16 drop-shadow-sm">
          صورتنا الجميلة 📸
        </h2>

        {/* Photo frame container */}
        <div className="relative flex justify-center items-center">
          {/* Decorative frame background */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-pink-50 rounded-3xl blur-2xl opacity-40" />

          {/* Main photo frame */}
          <div
            className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 cursor-pointer group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              setIsHovered(false);
              setHearts([]);
            }}
            onMouseMove={handleMouseMove}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-300 via-transparent to-pink-200 opacity-0 group-hover:opacity-30 transition-opacity duration-300 z-20" />

            {/* Animated border light */}
            <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-pink-300 via-pink-200 to-pink-300 bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />

            {/* Photo container with image */}
            <div className="absolute inset-1 rounded-3xl bg-white overflow-hidden">
              <img
                src="/manus-storage/1000224171_675499e9.jpg"
                alt="صورتنا الجميلة"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Reflection effect */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white to-transparent opacity-20" />

            {/* Floating hearts on hover */}
            {hearts.map(heart => (
              <div
                key={heart.id}
                className="absolute text-pink-400 text-2xl pointer-events-none"
                style={{
                  left: `${heart.x}px`,
                  top: `${heart.y}px`,
                  animation: 'heartFloat 1s ease-out forwards'
                }}
              >
                💖
              </div>
            ))}
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-8 -right-8 text-pink-300 text-6xl opacity-40 animate-pulse">✨</div>
          <div className="absolute -bottom-8 -left-8 text-pink-300 text-6xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }}>✨</div>
        </div>

        {/* Description text */}
        <p className="text-center mt-12 text-pink-500 text-lg font-light max-w-2xl mx-auto">
          لحظة جميلة تجمعنا معاً، تذكرني بكل مرة أنك أقرب الناس لقلبي
        </p>
      </div>

      <style>{`
        @keyframes heartFloat {
          0% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateY(-50px) scale(0.5);
          }
        }
      `}</style>
    </section>
  );
}
