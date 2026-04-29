import { useState } from 'react';
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
  panel:    { color: '#082F49', bg: 'rgba(8,47,73,0.12)',      label: 'Panel',     icon: MessageSquare },
  ceremony: { color: '#7C3AED', bg: 'rgba(124,58,237,0.12)',   label: 'Ceremony',  icon: Users },
  break:    { color: '#94A3B8', bg: 'rgba(148,163,184,0.08)', label: '',          icon: Coffee },
};

function SessionRow({ s }: { s: Session }) {
  const cfg = typeConfig[s.type];
  const isBreak = s.type === 'break';
  const Icon = cfg.icon;

  return (
    <div className={`schedule-row group flex items-start gap-4 px-6 py-4 rounded-xl transition-all duration-200 ${isBreak ? 'opacity-50' : ''}`}>
      {/* Time */}
      <div className="flex items-center gap-1.5 min-w-[130px] pt-0.5 shrink-0">
        <Clock size={11} className="text-[#94A3B8]" />
        <span className="font-inter text-xs text-[#020617]/40 font-medium tabular-nums">{s.time}</span>
      </div>

      {/* Left accent bar */}
      {!isBreak && (
        <div className="w-0.5 self-stretch rounded-full shrink-0 mt-1" style={{ background: cfg.color, opacity: 0.4 }} />
      )}

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          {cfg.label && (
            <span
              className="inline-flex items-center gap-1 text-[10px] font-inter font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wide shrink-0"
              style={{ color: cfg.color, background: cfg.bg }}
            >
              <Icon size={9} />
              {cfg.label}
            </span>
          )}
          <span className={`font-inter font-medium text-sm ${isBreak ? 'text-[#020617]/40' : 'text-[#082F49]'}`}>
            {s.title}
          </span>
        </div>
        {s.speaker && (
          <span className="font-inter text-xs text-[#020617]/40 italic">{s.speaker}</span>
        )}
      </div>
    </div>
  );
}

export default function Program() {
  const [day, setDay] = useState<1 | 2>(1);
  const sessions = day === 1 ? day1 : day2;

  return (
    <section id="program" className="py-28 bg-[#F8FAFB]">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <p className="text-[#0EA5A5] font-inter font-semibold text-sm tracking-widest uppercase mb-4">
            Scientific Schedule
          </p>
          <h2 className="font-sora font-extrabold text-[#082F49] text-4xl lg:text-5xl section-line section-line-center">
            Conference Program
          </h2>
          <p className="font-inter text-[#020617]/55 text-lg mt-6 max-w-lg mx-auto leading-relaxed">
            Two days of keynotes, parallel sessions, workshops, and poster presentations.
          </p>
        </div>

        {/* Day toggle */}
        <div className="flex items-center justify-center mb-8">
          <div className="inline-flex rounded-full border border-[#082F49]/12 p-1 bg-white shadow-sm">
            {([1, 2] as const).map((d) => (
              <button
                key={d}
                onClick={() => setDay(d)}
                className={`px-7 py-2.5 rounded-full font-sora font-semibold text-sm transition-all duration-200 ${
                  day === d
                    ? 'bg-[#082F49] text-white shadow-md'
                    : 'text-[#020617]/50 hover:text-[#082F49]'
                }`}
              >
                Day {d}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-[#082F49]/06 overflow-hidden shadow-sm">
          {/* Header */}
          <div className="px-6 py-5 border-b border-[#082F49]/06 flex items-center gap-3 bg-gradient-to-r from-[#082F49]/02 to-transparent">
            <div className="w-2.5 h-2.5 rounded-full bg-[#0EA5A5]" />
            <span className="font-sora font-bold text-[#082F49] text-sm">
              {day === 1 ? 'Day 1 — November 12, 2026' : 'Day 2 — November 13, 2026'}
            </span>
            <span className="ml-auto font-inter text-[#020617]/30 text-xs">
              {sessions.filter(s => s.type !== 'break').length} events
            </span>
          </div>

          <div className="divide-y divide-[#082F49]/04 px-2 py-2">
            {sessions.map((s, i) => (
              <SessionRow key={i} s={s} />
            ))}
          </div>
        </div>

        <p className="text-center font-inter text-[#020617]/30 text-xs mt-5">
          Schedule subject to change. Full program will be published upon confirmation of all speakers.
        </p>
      </div>
    </section>
  );
}
