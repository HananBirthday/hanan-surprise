import { useEffect, useRef, useState } from 'react';

/**
 * MessageSection Component
 * Design: Glassmorphism with fade-up animation
 * Features: Scroll-triggered animations, glowing effect
 */
export default function MessageSection() {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const messageLines = [
    'اليوم عيد ميلادك… وأنا بعيد عنك، لكن قلبي أقرب لك من أي وقت مضى 🤍',
    'كل عام وأنت بخير يا أجمل صدفة دخلت حياتي، وكل سنة وأنت ساكنة داخلي مهما بعدت بيننا الطرق والمسافات.',
    'يمكن ما أقدر أكون جنبك اليوم، ولا أشاركك لحظة فرحتك كما أتمنى، لكن إحساسي فيك حاضر، وشوقي لك يوصل لك مع كل نبضة من قلبي.',
    'أدعّي ربي يجمعني بك قريب، وأكون أول شخص يعيد عليك وهو شايف عيونك، مو بس متخيلها من بعيد.',
    'وجودك بحياتي، حتى مع البعد، هو أجمل شيء أملكه، وأنت دائمًا أقرب لي من الجميع.',
    'أحبك أكثر من كل المسافات، وأكثر من كل الكلام اللي ممكن يوصف شعوري.',
    'ولو كان بيدي، لجعلت هذا اليوم عيدين لأنك فيه وُلدتِ.',
    'وفي كل سنة جديدة من عمرك، أتمنى لك فرحًا يليق بقلبك، وراحة تليق بروحك، وحبًا يليق بجمالك.',
    'وكل عام وأنت قلبي، وروحي، وأجمل ما أهدتني الحياة ❤️🎂✨'
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = messageLines.findIndex(
              (_, i) => entry.target.id === `line-${i}`
            );
            if (index !== -1 && !visibleLines.includes(index)) {
              setVisibleLines(prev => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    const lines = document.querySelectorAll('[id^="line-"]');
    lines.forEach(line => observer.observe(line));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="message-section"
      ref={sectionRef}
      className="relative py-20 px-4 bg-gradient-to-b from-white via-pink-50 to-white"
    >
      <div className="max-w-3xl mx-auto">
        {/* Section title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-pink-600 mb-16 drop-shadow-sm">
          رسالتي لك 💌
        </h2>

        {/* Glassmorphism message box */}
        <div className="relative">
          {/* Background blur effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-pink-50 rounded-3xl blur-2xl opacity-30" />

          {/* Main message container */}
          <div className="relative bg-white/40 backdrop-blur-md border border-white/60 rounded-3xl p-8 md:p-12 shadow-2xl">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-200/20 via-transparent to-pink-100/20 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-500" />

            {/* Message content */}
            <div className="relative space-y-6 text-lg md:text-xl leading-relaxed text-pink-900 font-light">
              {messageLines.map((line, index) => (
                <div
                  key={index}
                  id={`line-${index}`}
                  className={`transition-all duration-700 transform ${
                    visibleLines.includes(index)
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4'
                  }`}
                >
                  <p className="relative">
                    <span className="absolute -right-4 top-0 text-pink-300 opacity-0 group-hover:opacity-100 transition-opacity">
                      ✨
                    </span>
                    {line}
                  </p>
                </div>
              ))}
            </div>

            {/* Decorative bottom line */}
            <div className="mt-8 pt-8 border-t border-pink-200/50">
              <p className="text-center text-pink-500 text-sm font-light">
                مع كل حب وشوق... 💕
              </p>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-4 text-pink-200 text-4xl opacity-30 animate-pulse">💖</div>
        <div className="absolute bottom-10 right-4 text-pink-200 text-4xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>💖</div>
      </div>

      <style>{`
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(236, 72, 153, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(236, 72, 153, 0.5);
          }
        }
      `}</style>
    </section>
  );
}
