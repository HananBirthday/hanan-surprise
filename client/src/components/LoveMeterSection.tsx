import { useEffect, useState } from 'react';

/**
 * LoveMeterSection Component
 * Design: Animated love meter with progressive fill
 * Features: Smooth animation, glowing effect
 */
export default function LoveMeterSection() {
  const [fillPercentage, setFillPercentage] = useState(0);

  useEffect(() => {
    // Animate the fill on component mount
    const timer = setTimeout(() => {
      setFillPercentage(100);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-white via-pink-50 to-white">
      <div className="max-w-4xl mx-auto">
        {/* Section title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-pink-600 mb-4 drop-shadow-sm">
          حب لا يعرف المسافة ❤️
        </h2>

        <p className="text-center text-pink-400 text-lg mb-16 font-light">
          قياس الحب الذي يسكن قلبي
        </p>

        {/* Love meter container */}
        <div className="max-w-2xl mx-auto">
          {/* Meter label */}
          <div className="flex justify-between items-center mb-6">
            <span className="text-pink-600 font-semibold text-lg">مستوى الحب</span>
            <span className="text-pink-500 font-bold text-2xl">{fillPercentage}%</span>
          </div>

          {/* Meter background */}
          <div className="relative h-16 bg-gradient-to-r from-pink-100 to-pink-50 rounded-full overflow-hidden border-2 border-pink-200 shadow-lg">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-200/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />

            {/* Fill */}
            <div
              className="h-full bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 transition-all duration-2000 ease-out relative overflow-hidden"
              style={{ width: `${fillPercentage}%` }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse" />
              
              {/* Moving highlight */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer" />
            </div>

            {/* Percentage markers */}
            <div className="absolute inset-0 flex justify-between px-4 pointer-events-none">
              {[0, 25, 50, 75, 100].map((percent) => (
                <div key={percent} className="flex flex-col items-center justify-center h-full">
                  <span className="text-xs text-pink-300 font-light">{percent}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Description */}
          <p className="text-center mt-8 text-pink-500 text-lg font-light">
            حب بلا حدود، بلا مسافات، بلا شروط
          </p>
        </div>

        {/* Decorative hearts */}
        <div className="mt-16 flex justify-center gap-8">
          <div className="text-4xl animate-bounce" style={{ animationDelay: '0s' }}>💖</div>
          <div className="text-4xl animate-bounce" style={{ animationDelay: '0.2s' }}>💕</div>
          <div className="text-4xl animate-bounce" style={{ animationDelay: '0.4s' }}>💗</div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-20 right-10 text-pink-200 text-6xl opacity-20 animate-pulse">✨</div>
        <div className="absolute bottom-20 left-10 text-pink-200 text-6xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}>✨</div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
}
