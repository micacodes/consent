'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG } from '@/lib/data';
import { ArrowRight, X, ChevronUp } from 'lucide-react';
import { useEffect, useState } from 'react';

function useCountdown(targetDate: string) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0, expired: false,
  });

  useEffect(() => {
    const target = new Date(targetDate).getTime();
    const tick = () => {
      const diff = target - Date.now();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, expired: true });
        return;
      }
      setTimeLeft({
        days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
        expired: false,
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  return timeLeft;
}

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const countdown = useCountdown('2026-06-20T08:00:00');
  const [cardOpen, setCardOpen] = useState(false);
  const [cardDismissed, setCardDismissed] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // ── ACTIVATE HIDER ──
    document.body.classList.add('hide-whatsapp-now');
    
    // Cleanup: Remove when leaving the hero page
    return () => {
      document.body.classList.remove('hide-whatsapp-now');
    };
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center overflow-hidden hero-section">
      
      {/* 1. BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/banner.png"
          alt="The Consent Group"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/70 to-transparent" />
        <div className="absolute inset-0 bg-black/50 md:bg-transparent" />
      </div>

      {/* 2. TEXT CONTENT */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-2xl">

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 border-l-4 border-brand-red pl-3 sm:pl-4">
            <span className="text-brand-red font-bold tracking-widest uppercase text-xs sm:text-sm">
              Est. 2019
            </span>
            <span className="text-gray-400 text-xs sm:text-sm">|</span>
            <span className="text-gray-300 text-xs sm:text-sm uppercase tracking-wide">
              Youth-Led Political Forum
            </span>
          </div>

          <h1 className="text-[clamp(2.8rem,12vw,8rem)] font-black text-white leading-[1.05] mb-4 sm:mb-6 drop-shadow-lg">
            THE <br />
            CONSENT<span className="text-brand-red">_KE</span>
          </h1>

          <p className="text-base sm:text-xl md:text-2xl text-gray-200 font-light mb-6 sm:mb-8 max-w-lg leading-relaxed">
            {SITE_CONFIG.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <Link
              href="/about"
              className="group flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg bg-brand-red text-white transition hover:bg-red-700 hover:shadow-lg hover:shadow-brand-red/40"
            >
              Learn More <ArrowRight size={18} />
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-8 sm:mt-12 flex items-center gap-6 sm:gap-8 border-t border-white/10 pt-5 sm:pt-6">
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-white">1000+</p>
              <p className="text-xs sm:text-sm text-gray-400">Active Members</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-white">2019</p>
              <p className="text-xs sm:text-sm text-gray-400">Year Founded</p>
            </div>
          </div>

        </div>
      </div>

      {/* ── FLOATING CHARITY EVENT CARD ── */}
      {!cardDismissed && !countdown.expired && (
        <div className="fixed bottom-4 right-4 z-50">
          <div className="absolute -inset-1 rounded-2xl bg-red-600/25 animate-pulse pointer-events-none" />

          {/* ── MOBILE ── */}
          <div className="block sm:hidden">
            {cardOpen ? (
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden w-48 border border-gray-100">
                <button
                  onClick={() => setCardOpen(false)}
                  aria-label="Collapse event card"
                  className="absolute top-2 right-2 z-10 bg-black/50 text-white rounded-full p-1"
                >
                  <ChevronUp size={14} />
                </button>
                <button
                  onClick={() => setCardDismissed(true)}
                  aria-label="Dismiss event card"
                  className="absolute top-2 left-2 z-10 bg-black/50 text-white rounded-full p-1"
                >
                  <X size={14} />
                </button>
                <div className="relative w-full aspect-[3/4]">
                  <Image src="/charity.jpeg" alt="Children's Home Visit" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute top-8 left-2 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-lg uppercase tracking-wide">
                    June 20
                  </div>
                </div>
                <CountdownFooter countdown={countdown} />
              </div>
            ) : (
              <button
                onClick={() => setCardOpen(true)}
                aria-label="Show charity event"
                className="flex flex-col items-start bg-gray-950 text-white px-4 py-2.5 rounded-2xl shadow-xl border border-red-600/50"
              >
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse flex-shrink-0" />
                  <span className="text-[11px] font-black uppercase tracking-wider leading-tight">Children's Home Visit</span>
                </div>
                <span className="text-[10px] text-red-400 font-semibold pl-4 tracking-wide">June 20, 2026</span>
              </button>
            )}
          </div>

          {/* ── DESKTOP ── */}
          <div className="hidden sm:block relative bg-white rounded-2xl shadow-2xl overflow-hidden w-56 border border-gray-100">
            <button
              onClick={() => setCardDismissed(true)}
              aria-label="Dismiss event card"
              className="absolute top-2 right-2 z-10 bg-black/50 text-white rounded-full p-1"
            >
              <X size={14} />
            </button>
            <div className="relative w-full aspect-[3/4]">
              <Image src="/charity.jpeg" alt="Children's Home Visit" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-lg uppercase tracking-wide">
                June 20
              </div>
            </div>
            <CountdownFooter countdown={countdown} />
          </div>
        </div>
      )}
    </section>
  );
};

function CountdownFooter({ countdown }: {
  countdown: { days: number; hours: number; minutes: number; seconds: number; expired: boolean }
}) {
  return (
    <div className="bg-gray-950 px-3 py-3">
      <p className="text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2">Children's Home Visit</p>
      <div className="flex items-center justify-between">
        {([
          { value: countdown.days,    label: 'D', delay: '0s'   },
          { value: countdown.hours,   label: 'H', delay: '0.4s' },
          { value: countdown.minutes, label: 'M', delay: '0.8s' },
          { value: countdown.seconds, label: 'S', delay: '1.2s' },
        ] as const).map(({ value, label, delay }, i, arr) => (
          <div key={label} className="flex items-center gap-0.5">
            <div className="flex flex-col items-center">
              <span className="font-black text-base sm:text-lg tabular-nums leading-none text-white animate-twinkle" style={{ animationDelay: delay }}>
                {String(value).padStart(2, '0')}
              </span>
              <span className="text-gray-500 text-[8px] sm:text-[9px] uppercase tracking-widest">{label}</span>
            </div>
            {i < arr.length - 1 && <span className="text-gray-600 text-xs sm:text-sm mb-3">:</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
