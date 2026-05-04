import { useEffect, useRef } from 'react';
import { Mail, ExternalLink, Award } from 'lucide-react';

const tiers = [
  {
    tier: 'Platinum',
    color: '#5B6EF5',
    size: 'xl',
    logos: [] as { name: string }[],
  },
  {
    tier: 'Gold',
    color: '#D4A017',
    size: 'lg',
    logos: [
      { name: 'BioGen Labs' },
      { name: 'OncoPharma' },
    ],
  },
  {
    tier: 'Silver',
    color: '#8B9BB4',
    size: 'md',
    logos: [
      { name: 'ImmunoTech' },
      { name: 'DataScience Health' },
      { name: 'GenomicsCo' },
    ],
  },
];

const perks = [
  { label: 'Brand visibility', sub: 'Logo on all materials & website' },
  { label: 'Speaking slot', sub: 'Optional industry presentation' },
  { label: 'Attendee access', sub: 'Complimentary registrations' },
  { label: 'Booth space', sub: 'Exhibition area at venue' },
];

function SponsorPlaceholder({ name, size }: { name: string; size: string }) {
  const height = size === 'xl' ? 'h-24 px-14' : size === 'lg' ? 'h-20 px-10' : 'h-16 px-8';
  const text   = size === 'xl' ? 'text-2xl' : size === 'lg' ? 'text-xl' : 'text-base';
  return (
    <div className={`grayscale-logo flex items-center justify-center rounded-xl border border-navy/8 cursor-pointer ${height}`}>
      <span className={`font-sora font-bold text-navy/30 tracking-wide ${text}`}>{name}</span>
    </div>
  );
}

export default function Sponsors() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
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
    <section id="sponsors" ref={sectionRef} className="py-32 bg-cream relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16 reveal">
          <p className="text-teal font-inter font-semibold text-sm tracking-[0.2em] uppercase mb-4">
            Supporting Partners
          </p>
          <h2 className="font-oswald font-bold text-navy text-5xl lg:text-6xl tracking-tight uppercase section-line section-line-center">
            Our Sponsors
          </h2>
          <p className="font-inter text-navy/50 text-base mt-6 max-w-lg mx-auto leading-relaxed">
            CIB 2026 is made possible by the generous support of leading organizations
            in biomedical research and healthcare.
          </p>
        </div>

        <div className="space-y-12 mb-20">
          {tiers.map((tier) => (
            <div key={tier.tier} className="reveal">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px flex-1 bg-navy/8" />
                <span className="font-oswald font-bold text-xs tracking-[0.2em] uppercase px-4" style={{ color: tier.color }}>
                  {tier.tier} Sponsors
                </span>
                <div className="h-px flex-1 bg-navy/8" />
              </div>
              <div className="flex flex-wrap items-center justify-center gap-6">
                {tier.logos.length > 0 ? (
                  tier.logos.map((logo) => (
                    <SponsorPlaceholder key={logo.name} name={logo.name} size={tier.size} />
                  ))
                ) : (
                  <div className="flex items-center justify-center rounded-xl border-2 border-dashed border-navy/10 h-24 px-20">
                    <span className="font-inter text-navy/25 text-sm flex items-center gap-2">
                      <Award size={16} />
                      Available
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Become a sponsor */}
        <div className="reveal rounded-3xl bg-navy p-10 md:p-14 relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-teal/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
            <div>
              <h3 className="font-oswald font-bold text-white text-2xl uppercase tracking-wide mb-3">
                Become a Sponsor
              </h3>
              <p className="font-inter text-white/50 text-sm leading-relaxed max-w-md">
                Partner with CIB 2026 and connect your brand with 200+ researchers and
                clinicians from 30+ countries.
              </p>

              {/* Perks */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                {perks.map((p) => (
                  <div key={p.label} className="flex flex-col gap-0.5">
                    <span className="font-inter font-semibold text-teal text-xs">{p.label}</span>
                    <span className="font-inter text-white/35 text-xs">{p.sub}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 shrink-0">
              <a
                href="mailto:sponsors@cib2026.org"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-teal text-white font-sora font-semibold text-sm hover:bg-teal-dark transition-all duration-300 hover:shadow-[0_0_30px_rgba(14,165,165,0.4)] hover:scale-105"
              >
                <Mail size={16} />
                Contact Us
              </a>
              <a
                href="mailto:sponsors@cib2026.org?subject=Sponsorship%20Prospectus%20Request"
                className="inline-flex items-center justify-center gap-1.5 px-8 py-4 rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/40 hover:bg-white/5 font-sora font-semibold text-sm transition-all duration-300"
              >
                Download Prospectus <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
