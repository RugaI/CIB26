import { useEffect, useRef } from 'react';
import { FlaskConical, Globe, Users, Award, Dna, Microscope, Activity } from 'lucide-react';
import ParticleCanvas from './ParticleCanvas';

const stats = [
  { value: '150+', label: 'Researchers',      sub: 'from around the world' },
  { value: '10+',  label: 'Countries',         sub: 'represented' },
  { value: '3',    label: 'Scientific Tracks', sub: 'interdisciplinary' },
  { value: '1',    label: 'Conference Day',    sub: 'of intensive science' },
];

const badges = [
  { icon: FlaskConical, text: 'Cutting-edge Research' },
  { icon: Globe,        text: 'International Collaboration' },
  { icon: Users,        text: 'Expert Network' },
  { icon: Award,        text: 'Peer-reviewed Abstracts' },
];

export default function About() {
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
    <section id="about" ref={sectionRef} className="relative py-32 bg-cream overflow-hidden">
      {/* Subtle background pattern */}
      <ParticleCanvas className="opacity-20" particleCount={40} color="14, 165, 165" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* ── Left ── */}
          <div className="reveal">
            <p className="text-teal font-inter font-semibold text-sm tracking-[0.2em] uppercase mb-4">
              About the Symposium
            </p>
            <h2 className="font-oswald font-bold text-navy text-5xl lg:text-6xl leading-[0.95] tracking-tight uppercase mb-8 section-line">
              Where Science<br />Meets Discovery
            </h2>
            <p className="font-inter text-navy/60 text-lg leading-relaxed mb-5">
              CIB 2026 is an international forum bringing together leading researchers, clinicians,
              and computational scientists to advance our understanding of cancer biology,
              immunological mechanisms, and data-driven approaches in biomedical research.
            </p>
            <p className="font-inter text-navy/45 text-base leading-relaxed mb-10">
              The symposium fosters cross-disciplinary collaboration, creating a space where
              experimental oncology, translational immunology, and bioinformatics converge to
              accelerate the development of novel diagnostics and therapeutics.
            </p>

            <div className="flex flex-wrap gap-3">
              {badges.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 bg-navy/5 hover:bg-teal/10 border border-transparent hover:border-teal/20 rounded-full px-4 py-2.5 transition-all duration-300 cursor-default"
                >
                  <Icon size={14} className="text-teal" />
                  <span className="font-inter text-sm text-navy font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right — stats with visual flair ── */}
          <div className="grid grid-cols-2 gap-4 reveal reveal-delay-2">
            {stats.map((s, i) => {
              const StatIcon = [Dna, Globe, Microscope, Activity][i];
              return (
              <div
                key={s.label}
                className={`group p-8 rounded-2xl border transition-all duration-500 hover:scale-[1.02] ${
                  i % 2 === 0
                    ? 'bg-white border-navy/10 hover:border-teal/30 hover:shadow-2xl hover:shadow-teal/5'
                    : 'bg-navy border-navy hover:shadow-2xl hover:shadow-navy/30'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${i % 2 === 0 ? 'bg-teal/10' : 'bg-teal/20'}`}>
                  <StatIcon size={20} className={i % 2 === 0 ? 'text-teal' : 'text-teal-light'} />
                </div>
                <span
                  className={`block font-oswald font-bold text-5xl mb-1 transition-colors duration-300 ${
                    i % 2 === 0 ? 'text-navy group-hover:text-teal' : 'text-teal'
                  }`}
                >
                  {s.value}
                </span>
                <span
                  className={`block font-inter font-semibold text-sm mb-1 ${
                    i % 2 === 0 ? 'text-navy/70' : 'text-white'
                  }`}
                >
                  {s.label}
                </span>
                <span
                  className={`block font-inter text-xs ${
                    i % 2 === 0 ? 'text-navy/40' : 'text-white/40'
                  }`}
                >
                  {s.sub}
                </span>
              </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
