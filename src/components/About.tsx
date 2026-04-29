import { FlaskConical, Globe, Users, Award } from 'lucide-react';

const stats = [
  { value: '200+', label: 'Researchers',      sub: 'from around the world' },
  { value: '30+',  label: 'Countries',         sub: 'represented' },
  { value: '3',    label: 'Scientific Tracks', sub: 'interdisciplinary' },
  { value: '2',    label: 'Conference Days',   sub: 'of intensive science' },
];

const badges = [
  { icon: FlaskConical, text: 'Cutting-edge Research' },
  { icon: Globe,        text: 'International Collaboration' },
  { icon: Users,        text: 'Expert Network' },
  { icon: Award,        text: 'Peer-reviewed Abstracts' },
];

export default function About() {
  return (
    <section id="about" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* ── Left ── */}
          <div>
            <p className="text-[#0EA5A5] font-inter font-semibold text-sm tracking-widest uppercase mb-4">
              About the Symposium
            </p>
            <h2 className="font-sora font-extrabold text-[#082F49] text-4xl lg:text-5xl leading-tight mb-6 section-line">
              Where Science<br />Meets Discovery
            </h2>
            <p className="font-inter text-[#020617]/65 text-lg leading-relaxed mb-5">
              CIB 2026 is an international forum bringing together leading researchers, clinicians,
              and computational scientists to advance our understanding of cancer biology,
              immunological mechanisms, and data-driven approaches in biomedical research.
            </p>
            <p className="font-inter text-[#020617]/55 text-base leading-relaxed mb-10">
              The symposium fosters cross-disciplinary collaboration, creating a space where
              experimental oncology, translational immunology, and bioinformatics converge to
              accelerate the development of novel diagnostics and therapeutics.
            </p>

            <div className="flex flex-wrap gap-3">
              {badges.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 bg-[#082F49]/05 hover:bg-[#0EA5A5]/10 border border-transparent hover:border-[#0EA5A5]/20 rounded-full px-4 py-2 transition-all duration-200 cursor-default"
                >
                  <Icon size={13} className="text-[#0EA5A5]" />
                  <span className="font-inter text-sm text-[#082F49] font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right — stats ── */}
          <div className="grid grid-cols-2 gap-5">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`group p-8 rounded-2xl border transition-all duration-300 ${
                  i % 2 === 0
                    ? 'bg-white border-[#082F49]/08 hover:border-[#0EA5A5]/30 hover:shadow-2xl hover:shadow-[#0EA5A5]/08'
                    : 'bg-[#082F49] border-[#082F49] hover:shadow-2xl hover:shadow-[#082F49]/30'
                }`}
              >
                <span
                  className={`block font-sora font-extrabold text-5xl mb-1 transition-colors duration-300 ${
                    i % 2 === 0 ? 'text-[#082F49] group-hover:text-[#0EA5A5]' : 'text-[#0EA5A5]'
                  }`}
                >
                  {s.value}
                </span>
                <span
                  className={`block font-inter font-semibold text-sm mb-1 ${
                    i % 2 === 0 ? 'text-[#020617]/70' : 'text-white'
                  }`}
                >
                  {s.label}
                </span>
                <span
                  className={`block font-inter text-xs ${
                    i % 2 === 0 ? 'text-[#020617]/35' : 'text-white/40'
                  }`}
                >
                  {s.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
