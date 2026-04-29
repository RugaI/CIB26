import { Microscope, Shield, BarChart3, ChevronRight } from 'lucide-react';

const tracks = [
  {
    icon: Microscope,
    label: 'Cancer Research',
    color: '#0EA5A5',
    bg: 'rgba(14,165,165,0.08)',
    gradient: 'from-[#0EA5A5]/08 to-[#0EA5A5]/02',
    borderHover: 'hover:border-[#0EA5A5]/40',
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
    label: 'Immunology',
    color: '#0284C7',
    bg: 'rgba(2,132,199,0.08)',
    gradient: 'from-[#0284C7]/08 to-[#0284C7]/02',
    borderHover: 'hover:border-[#0284C7]/40',
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
    label: 'Bioinformatics',
    color: '#1F6F8B',
    bg: 'rgba(31,111,139,0.08)',
    gradient: 'from-[#1F6F8B]/08 to-[#1F6F8B]/02',
    borderHover: 'hover:border-[#1F6F8B]/40',
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
  return (
    <section id="topics" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="text-[#0EA5A5] font-inter font-semibold text-sm tracking-widest uppercase mb-4">
            Scientific Tracks
          </p>
          <h2 className="font-sora font-extrabold text-[#082F49] text-4xl lg:text-5xl section-line section-line-center">
            Topics & Themes
          </h2>
          <p className="font-inter text-[#020617]/55 text-lg mt-6 max-w-lg mx-auto leading-relaxed">
            Three interconnected tracks spanning the full scope of modern biomedical science.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tracks.map((t) => {
            const Icon = t.icon;
            return (
              <div
                key={t.label}
                className={`topic-card group relative p-8 rounded-2xl border border-[#082F49]/08 ${t.borderHover} hover:shadow-2xl hover:shadow-[#082F49]/06 transition-all duration-300 cursor-default overflow-hidden`}
              >
                {/* Hover gradient bg */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${t.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div className="relative">
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                    style={{ background: t.bg }}
                  >
                    <Icon
                      size={24}
                      className="topic-icon transition-colors duration-300"
                      style={{ color: t.color }}
                    />
                  </div>

                  {/* Track number badge */}
                  <div className="absolute top-0 right-0">
                    <span
                      className="font-sora font-extrabold text-4xl opacity-[0.06]"
                      style={{ color: t.color }}
                    >
                      {tracks.indexOf(t) + 1}
                    </span>
                  </div>

                  <h3
                    className="font-sora font-bold text-xl mb-5 transition-colors duration-300"
                    style={{ color: '#082F49' }}
                  >
                    {t.label}
                  </h3>

                  <ul className="space-y-2.5">
                    {t.subtopics.map((s) => (
                      <li key={s} className="flex items-center gap-2.5 group/item">
                        <ChevronRight
                          size={12}
                          className="flex-shrink-0 transition-transform duration-200 group-hover/item:translate-x-0.5"
                          style={{ color: t.color }}
                        />
                        <span className="font-inter text-sm text-[#020617]/65 leading-snug">
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
