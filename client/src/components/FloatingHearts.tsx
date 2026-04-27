/**
 * FloatingHearts Component
 * Design: Continuously floating hearts in background
 * Features: Random positioning, smooth animation
 */
export default function FloatingHearts() {
  const hearts = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 8 + Math.random() * 4,
    size: 16 + Math.random() * 24
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="absolute text-pink-300 opacity-40"
          style={{
            left: `${heart.left}%`,
            top: '-50px',
            fontSize: `${heart.size}px`,
            animation: `floatHearts ${heart.duration}s linear infinite`,
            animationDelay: `${heart.delay}s`,
            willChange: 'transform'
          }}
        >
          💖
        </div>
      ))}

      <style>{`
        @keyframes floatHearts {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.4;
          }
          90% {
            opacity: 0.4;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
