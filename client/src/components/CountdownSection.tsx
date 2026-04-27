import { useEffect, useState } from 'react';

/**
 * CountdownSection Component
 * Design: Animated countdown timer
 * Features: Real-time countdown to next birthday
 */
interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Calculate next birthday (assuming birthday is today + 365 days for demo)
      const now = new Date();
      const nextBirthday = new Date(now.getFullYear() + 1, now.getMonth(), now.getDate());
      
      const difference = nextBirthday.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const CountdownBox = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="relative w-20 h-20 md:w-24 md:h-24 mb-2">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-pink-100 rounded-xl blur-lg opacity-50" />
        
        {/* Number box */}
        <div className="absolute inset-0 bg-gradient-to-br from-white to-pink-50 rounded-xl border border-pink-200 flex items-center justify-center shadow-lg">
          <span className="text-3xl md:text-4xl font-bold text-pink-600">
            {String(value).padStart(2, '0')}
          </span>
        </div>
      </div>
      <span className="text-sm md:text-base text-pink-500 font-light">{label}</span>
    </div>
  );

  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-white via-pink-50 to-white">
      <div className="max-w-4xl mx-auto">
        {/* Section title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-pink-600 mb-4 drop-shadow-sm">
          ⏳ باقي على يومك المميز القادم
        </h2>
        
        <p className="text-center text-pink-400 text-lg mb-16 font-light">
          كل يوم يقربنا من لحظة احتفالك الجديد
        </p>

        {/* Countdown display */}
        <div className="flex justify-center items-center gap-4 md:gap-8 flex-wrap">
          <CountdownBox value={timeLeft.days} label="أيام" />
          <div className="text-3xl text-pink-300 font-light">:</div>
          <CountdownBox value={timeLeft.hours} label="ساعات" />
          <div className="text-3xl text-pink-300 font-light">:</div>
          <CountdownBox value={timeLeft.minutes} label="دقائق" />
          <div className="text-3xl text-pink-300 font-light">:</div>
          <CountdownBox value={timeLeft.seconds} label="ثوانِ" />
        </div>

        {/* Decorative elements */}
        <div className="mt-16 text-center">
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-200 to-pink-100 rounded-full blur-2xl opacity-40" />
            <p className="relative text-pink-500 text-lg font-light">
              كل لحظة تقربنا من فرحتك 💕
            </p>
          </div>
        </div>

        {/* Floating decorations */}
        <div className="absolute top-10 right-10 text-pink-200 text-5xl opacity-20 animate-pulse">✨</div>
        <div className="absolute bottom-10 left-10 text-pink-200 text-5xl opacity-20 animate-pulse" style={{ animationDelay: '1.5s' }}>✨</div>
      </div>
    </section>
  );
}
