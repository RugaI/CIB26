import { useEffect, useRef } from 'react';
import { Microscope, Shield, BarChart3, ChevronRight, Dna, Brain, Database } from 'lucide-react';

const tracks = [
  {
    icon: Microscope,
    bigIcon: Dna,
    label: 'Cancer Research',
    color: '#0EA5A5',
    bg: 'rgba(14,165,165,0.08)',
    gradient: 'from-[#0EA5A5]/10 to-[#0EA5A5]/02',
    borderHover: 'hover:border-[#0EA5A5]/40',
    glow: 'group-hover:shadow-[#0EA5A5]/15',
    subtopics: [
      'Tumor Microenvironment',
      'Cancer Genomics & Epigenetics',
      'Metastasis Mechanisms',
      'Targeted Therapy',
      'Liquid Biopsies',
      'Cancer Metabolism',
    ],
  },
  {
    icon: Shield,
    bigIcon: Brain,
    label: 'Immunology',
    color: '#0284C7',
    bg: 'rgba(2,132,199,0.08)',
    gradient: 'from-[#0284C7]/10 to-[#0284C7]/02',
    borderHover: 'hover:border-[#0284C7]/40',
    glow: 'group-hover:shadow-[#0284C7]/15',
    subtopics: [
      'Tumor Immunology',
      'CAR-T & Cell Therapy',
      'Checkpoint Inhibitors',
      'Innate Immune Signaling',
      'Autoimmunity',
      'Vaccine Development',
    ],
  },
  {
    icon: BarChart3,
    bigIcon: Database,
    label: 'Bioinformatics',
    color: '#1F6F8B',
    bg: 'rgba(31,111,139,0.08)',
    gradient: 'from-[#1F6F8B]/10 to-[#1F6F8B]/02',
    borderHover: 'hover:border-[#1F6F8B]/40',
    glow: 'group-hover:shadow-[#1F6F8B]/15',
    subtopics: [
      'Multi-omics Analysis',
      'Machine Learning in Medicine',
      'Single-cell Sequencing',
      'Network Biology',
      'Structural Bioinformatics',
      'Clinical Data Science',
    ],
  },
];

export default function Topics() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 150);
            });
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
    <section id="topics" ref={sectionRef} className="py-32 bg-navy relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16 reveal">
          <p className="text-teal font-inter font-semibold text-sm tracking-[0.2em] uppercase mb-4">
            Scientific Tracks
          </p>
          <h2 className="font-oswald font-bold text-white text-5xl lg:text-6xl tracking-tight uppercase section-line section-line-center">
            Topics & Themes
          </h2>
          <p className="font-inter text-white/50 text-lg mt-6 max-w-lg mx-auto leading-relaxed">
            Three interconnected tracks spanning the full scope of modern biomedical science.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tracks.map((t) => {
            const Icon = t.icon;
            const BigIcon = t.bigIcon;
            return (
              <div
                key={t.label}
                className={`reveal group relative p-8 rounded-3xl border border-white/10 ${t.borderHover} hover:shadow-2xl ${t.glow} transition-all duration-500 cursor-default overflow-hidden bg-white/5 backdrop-blur-sm`}
              >
                {/* Hover gradient bg */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${t.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative">
                  {/* Track number & big icon */}
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg"
                      style={{ background: t.bg }}
                    >
                      <Icon
                        size={28}
                        className="topic-icon transition-colors duration-300"
                        style={{ color: t.color }}
                      />
                    </div>
                    <BigIcon size={60} className="opacity-[0.06]" style={{ color: t.color }} />
                  </div>

                  <h3
                    className="font-oswald font-bold text-2xl mb-5 transition-colors duration-300 uppercase tracking-tight"
                    style={{ color: t.color }}
                  >
                    {t.label}
                  </h3>

                  <ul className="space-y-3">
                    {t.subtopics.map((s) => (
                      <li key={s} className="flex items-center gap-3 group/item">
                        <ChevronRight
                          size={14}
                          className="flex-shrink-0 transition-transform duration-200 group-hover/item:translate-x-1"
                          style={{ color: t.color }}
                        />
                        <span className="font-inter text-sm text-white/60 leading-snug group-hover/item:text-white/80 transition-colors">
                          {s}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
