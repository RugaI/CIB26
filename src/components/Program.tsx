import { useState, useEffect, useRef } from 'react';
import { Clock, Mic, Users, Coffee, BookOpen, MessageSquare } from 'lucide-react';

type SessionType = 'keynote' | 'break' | 'session' | 'workshop' | 'panel' | 'ceremony';

type Session = {
  time: string;
  title: string;
  speaker?: string;
  type: SessionType;
};

const day1: Session[] = [
  { time: '08:30 – 09:00', title: 'Registration & Welcome Coffee', type: 'break' },
  { time: '09:00 – 09:30', title: 'Opening Ceremony & Welcome Address', speaker: 'Organizing Committee', type: 'ceremony' },
  { time: '09:30 – 10:30', title: 'Keynote: The Evolving Landscape of Tumor Immunology', speaker: 'EL KHALKI Lamyae', type: 'keynote' },
  { time: '10:30 – 11:00', title: 'Networking Coffee Break', type: 'break' },
  { time: '11:00 – 12:30', title: 'Session I — Cancer Genomics & Epigenetics', speaker: 'Multiple Speakers', type: 'session' },
  { time: '12:30 – 14:00', title: 'Lunch & Poster Session', type: 'break' },
  { time: '14:00 – 15:00', title: 'Keynote: Clinical Affairs in Translational Research', speaker: 'AKRIM Ahmed Taoufik', type: 'keynote' },
  { time: '15:00 – 16:30', title: 'Session II — Immunotherapy: From Bench to Bedside', speaker: 'Multiple Speakers', type: 'session' },
  { time: '16:30 – 17:00', title: 'Coffee Break', type: 'break' },
  { time: '17:00 – 18:00', title: 'Workshop: Bioinformatics Tools for Oncology Data', speaker: 'TBC', type: 'workshop' },
  { time: '19:30 –',       title: 'Welcome Dinner & Networking', type: 'break' },
];

const day2: Session[] = [
  { time: '09:00 – 10:00', title: 'Keynote: AI-Driven Drug Discovery', speaker: 'TBC', type: 'keynote' },
  { time: '10:00 – 11:30', title: 'Session III — Single-cell Sequencing & Spatial Transcriptomics', speaker: 'Multiple Speakers', type: 'session' },
  { time: '11:30 – 12:00', title: 'Coffee Break', type: 'break' },
  { time: '12:00 – 13:00', title: 'Keynote: Immunotherapy Resistance Mechanisms', speaker: 'TBC', type: 'keynote' },
  { time: '13:00 – 14:30', title: 'Lunch & Poster Session', type: 'break' },
  { time: '14:30 – 16:00', title: 'Session IV — Biomarkers & Liquid Biopsies', speaker: 'Multiple Speakers', type: 'session' },
  { time: '16:00 – 17:00', title: 'Panel Discussion: Future Directions in Biomedical Research', speaker: 'All Keynote Speakers', type: 'panel' },
  { time: '17:00 – 17:30', title: 'Closing Ceremony & Awards', speaker: 'Organizing Committee', type: 'ceremony' },
];

const typeConfig: Record<SessionType, { color: string; bg: string; label: string; icon: typeof Mic }> = {
  keynote:  { color: '#0EA5A5', bg: 'rgba(14,165,165,0.12)',  label: 'Keynote',   icon: Mic },
  session:  { color: '#0284C7', bg: 'rgba(2,132,199,0.12)',   label: 'Session',   icon: BookOpen },
  workshop: { color: '#1F6F8B', bg: 'rgba(31,111,139,0.12)',  label: 'Workshop',  icon: Users },
  panel:    { color: '#E85D75', bg: 'rgba(232,93,117,0.12)',   label: 'Panel',     icon: MessageSquare },
  ceremony: { color: '#7C3AED', bg: 'rgba(124,58,237,0.12)',   label: 'Ceremony',  icon: Users },
  break:    { color: '#94A3B8', bg: 'rgba(148,163,184,0.08)', label: '',          icon: Coffee },
};

function SessionRow({ s, index }: { s: Session; index: number }) {
  const cfg = typeConfig[s.type];
  const isBreak = s.type === 'break';
  const Icon = cfg.icon;

  return (
    <div
      className={`schedule-row group flex items-start gap-5 px-6 py-5 rounded-2xl transition-all duration-300 ${isBreak ? 'opacity-45' : ''}`}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Timeline dot */}
      {!isBreak && (
        <div className="hidden md:flex flex-col items-center pt-1">
          <div className="w-3 h-3 rounded-full border-2 flex-shrink-0" style={{ borderColor: cfg.color, background: cfg.bg }} />
        </div>
      )}
      {isBreak && <div className="hidden md:block w-3 flex-shrink-0" />}

      {/* Time */}
      <div className="flex items-center gap-2 min-w-[130px] pt-0.5 shrink-0">
        <Clock size={12} className="text-navy/30" />
        <span className="font-inter text-xs text-navy/40 font-medium tabular-nums">{s.time}</span>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
          {cfg.label && (
            <span
              className="inline-flex items-center gap-1.5 text-[10px] font-inter font-bold px-3 py-1 rounded-full uppercase tracking-wider shrink-0"
              style={{ color: cfg.color, background: cfg.bg }}
            >
              <Icon size={10} />
              {cfg.label}
            </span>
          )}
          <span className={`font-inter font-semibold text-sm ${isBreak ? 'text-navy/35' : 'text-navy'}`}>
            {s.title}
          </span>
        </div>
        {s.speaker && (
          <span className="font-inter text-xs text-navy/40 italic ml-0.5">{s.speaker}</span>
        )}
      </div>
    </div>
  );
}

export default function Program() {
  const [day, setDay] = useState<1 | 2>(1);
  const sessions = day === 1 ? day1 : day2;
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="program" ref={sectionRef} className="py-32 bg-cream relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16 reveal">
          <p className="text-teal font-inter font-semibold text-sm tracking-[0.2em] uppercase mb-4">
            Scientific Schedule
          </p>
          <h2 className="font-oswald font-bold text-navy text-5xl lg:text-6xl tracking-tight uppercase section-line section-line-center">
            Conference Program
          </h2>
          <p className="font-inter text-navy/50 text-lg mt-6 max-w-lg mx-auto leading-relaxed">
            Two days of keynotes, parallel sessions, workshops, and poster presentations.
          </p>
        </div>

        {/* Day toggle */}
        <div className="flex items-center justify-center mb-10 reveal">
          <div className="inline-flex rounded-full border border-navy/10 p-1.5 bg-white shadow-lg shadow-navy/5">
            {([1, 2] as const).map((d) => (
              <button
                key={d}
                onClick={() => setDay(d)}
                className={`px-8 py-3 rounded-full font-oswald font-semibold text-sm tracking-wide transition-all duration-300 ${
                  day === d
                    ? 'bg-navy text-white shadow-lg'
                    : 'text-navy/50 hover:text-navy'
                }`}
              >
                Day {d}
              </button>
            ))}
          </div>
        </div>

        <div className="reveal bg-white rounded-3xl border border-navy/6 overflow-hidden shadow-xl shadow-navy/5">
          {/* Header */}
          <div className="px-8 py-6 border-b border-navy/6 flex items-center gap-4 bg-gradient-to-r from-navy/[0.03] to-transparent">
            <div className="w-3 h-3 rounded-full bg-teal animate-pulse-slow" />
            <span className="font-oswald font-bold text-navy text-lg tracking-wide uppercase">
              {day === 1 ? 'Day 1 — November 12, 2026' : 'Day 2 — November 13, 2026'}
            </span>
            <span className="ml-auto font-inter text-navy/30 text-xs">
              {sessions.filter(s => s.type !== 'break').length} events
            </span>
          </div>

          <div className="divide-y divide-navy/[0.04] px-3 py-3">
            {sessions.map((s, i) => (
              <SessionRow key={i} s={s} index={i} />
            ))}
          </div>
        </div>

        <p className="text-center font-inter text-navy/30 text-xs mt-6 reveal">
          Schedule subject to change. Full program will be published upon confirmation of all speakers.
        </p>
      </div>
    </section>
  );
}
