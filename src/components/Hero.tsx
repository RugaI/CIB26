import { useState, useEffect } from 'react';
import { ArrowRight, MapPin, Calendar, ChevronDown } from 'lucide-react';
import ParticleCanvas from './ParticleCanvas';

const CONFERENCE_DATE = new Date('2026-11-12T09:00:00');

function useCountdown() {
  const [t, setT] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    const tick = () => {
      const diff = CONFERENCE_DATE.getTime() - Date.now();
      if (diff <= 0) return;
      setT({
        days:    Math.floor(diff / 86400000),
        hours:   Math.floor((diff / 3600000) % 24),
        minutes: Math.floor((diff / 60000) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

function CountUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative">
        <div className="absolute inset-0 rounded-xl bg-teal/30 blur-lg" />
        <div className="relative bg-white/5 backdrop-blur-md border border-white/20 rounded-xl w-[64px] h-[64px] flex items-center justify-center">
          <span className="font-oswald font-bold text-white text-3xl tabular-nums leading-none">
            {String(value).padStart(2, '0')}
          </span>
        </div>
      </div>
      <span className="font-inter text-white/40 text-[10px] uppercase tracking-[0.2em]">{label}</span>
    </div>
  );
}

const BINARY_COLUMNS = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  left: `${5 + i * 8}%`,
  delay: `${Math.random() * 5}s`,
  duration: `${10 + Math.random() * 10}s`,
}));

export default function Hero() {
  const cd = useCountdown();

  return (
    <section className="relative min-h-screen bg-navy overflow-hidden flex flex-col">
      {/* Particle network background */}
      <ParticleCanvas className="opacity-40" particleCount={80} color="14, 165, 165" />

      {/* Gradient blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal/10 rounded-full blur-[120px] pointer-events-none animate-glow" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-accent/8 rounded-full blur-[100px] pointer-events-none animate-glow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-coral/5 rounded-full blur-[80px] pointer-events-none" />

      {/* Binary rain effect */}
      {BINARY_COLUMNS.map((col) => (
        <div
          key={col.id}
          className="binary-rain hidden lg:block"
          style={{
            left: col.left,
            top: '-10%',
            height: '120%',
            animation: `binary ${col.duration} linear ${col.delay} infinite`,
          }}
        >
          {Array.from({ length: 30 }, (_, i) => (
            <span key={i} style={{ opacity: Math.random() * 0.3 + 0.05 }}>
              {Math.random() > 0.5 ? '1' : '0'}
            </span>
          ))}
        </div>
      ))}

      {/* Main content */}
      <div className="relative flex-1 max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20 w-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">

          {/* ── Left column ── */}
          <div>
            {/* Badge */}
            <div className="hero-animate-1 flex items-center gap-3 mb-8">
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2">
                <span className="w-2 h-2 rounded-full bg-teal animate-pulse-slow block" />
                <span className="text-white/60 text-xs font-inter font-medium tracking-[0.25em] uppercase">
                  CIB 2026 · Casablanca
                </span>
              </div>
            </div>

            {/* Title - Poster style */}
            <h1 className="hero-animate-2 font-oswald font-bold text-white leading-[0.95] tracking-tight uppercase">
              <span className="block text-[clamp(2.4rem,5.5vw,4.2rem)]">International</span>
              <span className="block text-[clamp(2.4rem,5.5vw,4.2rem)]">Symposium on</span>
              <span className="block text-[clamp(2rem,4.5vw,3.5rem)] hero-gradient mt-1">Cancer Research,</span>
              <span className="block text-[clamp(2rem,4.5vw,3.5rem)] hero-gradient">Immunology &</span>
              <span className="block text-[clamp(2rem,4.5vw,3.5rem)] hero-gradient">Bioinformatics</span>
            </h1>

            {/* Subtitle - Italic like poster */}
            <p className="hero-animate-3 font-inter text-teal/70 text-xl mt-6 max-w-md leading-relaxed italic font-light">
              Advances and Perspectives in Biomedical Research
            </p>

            {/* Date & Location - matching poster exactly */}
            <div className="hero-animate-4 flex flex-wrap gap-8 mt-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center flex-shrink-0">
                  <Calendar size={22} className="text-teal" />
                </div>
                <div>
                  <p className="text-teal text-xs font-inter font-bold uppercase tracking-wider mb-0.5">Date</p>
                  <p className="font-sora font-bold text-white text-lg">Novembre 2026</p>
                  <p className="font-inter text-white/40 text-sm">(À préciser)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center flex-shrink-0">
                  <MapPin size={22} className="text-teal" />
                </div>
                <div>
                  <p className="text-teal text-xs font-inter font-bold uppercase tracking-wider mb-0.5">Lieu</p>
                  <p className="font-sora font-bold text-white text-lg">Agora Conference Centre</p>
                  <p className="font-inter text-white/40 text-sm">Casablanca, Morocco</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="hero-animate-5 flex flex-wrap gap-4 mt-10">
              <a
                href="#register"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-teal text-white font-sora font-semibold text-sm hover:bg-teal-dark transition-all duration-300 hover:shadow-[0_0_40px_rgba(14,165,165,0.5)] hover:scale-105 hover:gap-3"
              >
                Register Now
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#program"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white/40 hover:bg-white/5 font-sora font-semibold text-sm transition-all duration-300"
              >
                View Program
              </a>
            </div>

            {/* Countdown */}
            <div className="hero-animate-in mt-12">
              <p className="font-inter text-white/30 text-xs uppercase tracking-[0.2em] mb-4">
                Conference starts in
              </p>
              <div className="flex items-start gap-4">
                <CountUnit value={cd.days}    label="Days"    />
                <span className="font-oswald font-bold text-white/20 text-3xl mt-4">:</span>
                <CountUnit value={cd.hours}   label="Hours"   />
                <span className="font-oswald font-bold text-white/20 text-3xl mt-4">:</span>
                <CountUnit value={cd.minutes} label="Minutes" />
                <span className="font-oswald font-bold text-white/20 text-3xl mt-4">:</span>
                <CountUnit value={cd.seconds} label="Seconds" />
              </div>
            </div>
          </div>

          {/* ── Right column — Scientific Visual ── */}
          <div className="hidden lg:flex items-center justify-center relative">
            <div className="relative w-[500px] h-[500px]">
              {/* Glowing orbs */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal/15 rounded-full blur-3xl animate-glow" />
              <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-sky-accent/20 rounded-full blur-2xl animate-glow" style={{ animationDelay: '1.5s' }} />

              {/* Central visual — animated rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-72 h-72">
                  {/* Outer ring */}
                  <div className="absolute inset-0 rounded-full border border-teal/20 animate-spin-slow" />
                  <div className="absolute inset-4 rounded-full border border-sky-accent/15 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '25s' }} />
                  <div className="absolute inset-8 rounded-full border border-white/5 animate-spin-slow" style={{ animationDuration: '35s' }} />

                  {/* Center glow */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-teal/20 to-sky-accent/10 blur-xl" />
                  </div>

                  {/* Cell visual */}
                  <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full animate-float">
                    <defs>
                      <radialGradient id="cellGrad" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#E85D75" stopOpacity="0.3" />
                        <stop offset="60%" stopColor="#E85D75" stopOpacity="0.1" />
                        <stop offset="100%" stopColor="#E85D75" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                    <circle cx="100" cy="100" r="70" fill="url(#cellGrad)" />
                    {/* Spikes */}
                    {Array.from({ length: 12 }, (_, i) => {
                      const angle = (i * 30 * Math.PI) / 180;
                      const x1 = 100 + 55 * Math.cos(angle);
                      const y1 = 100 + 55 * Math.sin(angle);
                      const x2 = 100 + 80 * Math.cos(angle);
                      const y2 = 100 + 80 * Math.sin(angle);
                      return (
                        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#E85D75" strokeWidth="2" opacity="0.4" strokeLinecap="round" />
                      );
                    })}
                    <circle cx="100" cy="100" r="55" fill="#E85D75" opacity="0.15" />
                    <circle cx="100" cy="100" r="35" fill="#E85D75" opacity="0.2" />
                    <circle cx="100" cy="100" r="15" fill="#E85D75" opacity="0.3" />
                  </svg>
                </div>
              </div>

              {/* Floating particles */}
              {[
                { x: '10%', y: '20%', size: 6, delay: '0s' },
                { x: '85%', y: '15%', size: 4, delay: '1s' },
                { x: '75%', y: '75%', size: 8, delay: '2s' },
                { x: '15%', y: '70%', size: 5, delay: '0.5s' },
                { x: '50%', y: '90%', size: 3, delay: '1.5s' },
              ].map((p, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-teal animate-particle pointer-events-none"
                  style={{
                    left: p.x,
                    top: p.y,
                    width: p.size,
                    height: p.size,
                    animationDelay: p.delay,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '150+', label: 'Researchers' },
            { value: '10+',  label: 'Countries' },
            { value: '3',    label: 'Scientific Tracks' },
            { value: '1',    label: 'Conference Day' },
          ].map((s, i) => (
            <div key={s.label} className={`text-center ${i > 0 ? 'md:border-l border-white/10' : ''}`}>
              <span className="block font-oswald font-bold text-teal text-3xl">{s.value}</span>
              <span className="font-inter text-white/40 text-xs uppercase tracking-widest">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <a href="#about" className="absolute bottom-28 left-1/2 flex flex-col items-center gap-1 opacity-40 hover:opacity-70 transition-opacity animate-bounce-slow">
        <ChevronDown size={20} className="text-white" />
      </a>
    </section>
  );
}
