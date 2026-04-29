import { useState, useEffect } from 'react';
import { ArrowRight, MapPin, Calendar, ChevronDown } from 'lucide-react';
import MolecularVisual from './MolecularVisual';

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
    <div className="flex flex-col items-center gap-1.5">
      <div className="relative">
        <div className="absolute inset-0 rounded-xl bg-[#0EA5A5]/25 blur-md" />
        <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl w-[60px] h-[60px] flex items-center justify-center">
          <span className="font-sora font-extrabold text-white text-2xl tabular-nums leading-none">
            {String(value).padStart(2, '0')}
          </span>
        </div>
      </div>
      <span className="font-inter text-white/40 text-[10px] uppercase tracking-[0.18em]">{label}</span>
    </div>
  );
}

const PARTICLES = [
  { x: 8,  y: 14, r: 3,   d: 0   },
  { x: 93, y: 8,  r: 2,   d: 1.6 },
  { x: 17, y: 76, r: 4,   d: 3.2 },
  { x: 76, y: 62, r: 2.5, d: 0.8 },
  { x: 44, y: 22, r: 2,   d: 2.4 },
  { x: 62, y: 86, r: 3,   d: 1.2 },
  { x: 87, y: 42, r: 2,   d: 3.8 },
  { x: 28, y: 52, r: 3.5, d: 0.4 },
  { x: 54, y: 10, r: 2,   d: 2.9 },
  { x: 82, y: 28, r: 2.5, d: 1.8 },
  { x: 5,  y: 48, r: 2,   d: 4.1 },
  { x: 38, y: 90, r: 3,   d: 0.6 },
  { x: 70, y: 18, r: 2,   d: 3.5 },
];

export default function Hero() {
  const cd = useCountdown();

  return (
    <section className="relative min-h-screen bg-[#082F49] overflow-hidden flex flex-col">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Gradient blobs */}
      <div className="absolute top-1/4 left-1/4  w-[500px] h-[500px] bg-[#0EA5A5]/12 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#0284C7]/12 rounded-full blur-[80px]  pointer-events-none" />
      <div className="absolute top-0 right-0         w-[300px] h-[300px] bg-[#0EA5A5]/08 rounded-full blur-[60px]  pointer-events-none" />

      {/* Floating particles */}
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-[#0EA5A5] pointer-events-none"
          style={{
            left: `${p.x}%`,
            top:  `${p.y}%`,
            width:  p.r * 2,
            height: p.r * 2,
            opacity: 0.25,
            animation: `particle-float ${5 + p.d}s ease-in-out ${p.d}s infinite`,
          }}
        />
      ))}

      {/* Main content */}
      <div className="relative flex-1 max-w-7xl mx-auto px-6 lg:px-10 pt-36 pb-20 w-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-14 items-center w-full">

          {/* ── Left column ── */}
          <div>
            {/* Badge */}
            <div className="animate-fade-up flex items-center gap-3 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-1.5">
                <span className="w-2 h-2 rounded-full bg-[#0EA5A5] animate-pulse-slow block" />
                <span className="text-white/70 text-xs font-inter font-medium tracking-[0.2em] uppercase">
                  CIB 2026 · Casablanca
                </span>
              </div>
            </div>

            {/* Title */}
            <h1 className="animate-fade-up-d1 font-sora font-extrabold text-white leading-[1.06] mb-6">
              <span className="block text-[clamp(2.1rem,5vw,3.75rem)]">International</span>
              <span className="block text-[clamp(2.1rem,5vw,3.75rem)]">Symposium on</span>
              <span className="block text-[clamp(1.7rem,4vw,3.1rem)] hero-gradient mt-1">Cancer Research,</span>
              <span className="block text-[clamp(1.7rem,4vw,3.1rem)] hero-gradient">Immunology &</span>
              <span className="block text-[clamp(1.7rem,4vw,3.1rem)] hero-gradient">Bioinformatics</span>
            </h1>

            {/* Subtitle */}
            <p className="animate-fade-up-d2 font-inter text-white/55 text-lg mb-8 max-w-md leading-relaxed italic">
              Advances and Perspectives in Biomedical Research
            </p>

            {/* Meta */}
            <div className="animate-fade-up-d2 flex flex-wrap gap-5 mb-10">
              <div className="flex items-center gap-2 text-white/65 hover:text-white transition-colors">
                <Calendar size={15} className="text-[#0EA5A5]" />
                <span className="font-inter text-sm">November 2026 · TBC</span>
              </div>
              <div className="flex items-center gap-2 text-white/65 hover:text-white transition-colors">
                <MapPin size={15} className="text-[#0EA5A5]" />
                <span className="font-inter text-sm">Casablanca, Morocco</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="animate-fade-up-d3 flex flex-wrap gap-4 mb-12">
              <a
                href="#register"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0EA5A5] text-white font-sora font-semibold text-sm hover:bg-[#0d9191] transition-all duration-200 hover:shadow-[0_0_28px_rgba(14,165,165,0.55)] hover:gap-3"
              >
                Register Now
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#program"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/25 text-white/80 hover:text-white hover:border-white/50 font-sora font-semibold text-sm transition-all duration-200"
              >
                View Program
              </a>
            </div>

            {/* Countdown */}
            <div className="animate-fade-up-d4">
              <p className="font-inter text-white/35 text-xs uppercase tracking-[0.2em] mb-4">
                Conference starts in
              </p>
              <div className="flex items-start gap-3">
                <CountUnit value={cd.days}    label="Days"    />
                <span className="font-sora font-bold text-white/30 text-2xl mt-3">:</span>
                <CountUnit value={cd.hours}   label="Hours"   />
                <span className="font-sora font-bold text-white/30 text-2xl mt-3">:</span>
                <CountUnit value={cd.minutes} label="Min"     />
                <span className="font-sora font-bold text-white/30 text-2xl mt-3">:</span>
                <CountUnit value={cd.seconds} label="Sec"     />
              </div>
            </div>
          </div>

          {/* ── Right column — visual ── */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="animate-fade-in animate-float-slow">
              <MolecularVisual />
            </div>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="relative border-t border-white/08">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
          {[
            { value: '200+', label: 'Researchers' },
            { value: '30+',  label: 'Countries' },
            { value: '3',    label: 'Scientific Tracks' },
            { value: '2',    label: 'Conference Days' },
          ].map((s, i) => (
            <div key={s.label} className={`text-center ${i > 0 ? 'md:border-l border-white/10' : ''}`}>
              <span className="block font-sora font-extrabold text-[#0EA5A5] text-2xl">{s.value}</span>
              <span className="font-inter text-white/45 text-xs uppercase tracking-widest">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <a href="#about" className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40 hover:opacity-70 transition-opacity animate-bounce-slow">
        <ChevronDown size={18} className="text-white" />
      </a>
    </section>
  );
}
