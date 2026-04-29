import { Mail, ExternalLink } from 'lucide-react';

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
    <div className={`grayscale-logo flex items-center justify-center rounded-xl border border-[#082F49]/08 cursor-pointer ${height}`}>
      <span className={`font-sora font-bold text-[#082F49]/35 tracking-wide ${text}`}>{name}</span>
    </div>
  );
}

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-28 bg-[#F8FAFB]">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="text-[#0EA5A5] font-inter font-semibold text-sm tracking-widest uppercase mb-4">
            Supporting Partners
          </p>
          <h2 className="font-sora font-extrabold text-[#082F49] text-4xl lg:text-5xl section-line section-line-center">
            Our Sponsors
          </h2>
          <p className="font-inter text-[#020617]/55 text-base mt-6 max-w-lg mx-auto leading-relaxed">
            CIB 2026 is made possible by the generous support of leading organizations
            in biomedical research and healthcare.
          </p>
        </div>

        <div className="space-y-10 mb-16">
          {tiers.map((tier) => (
            <div key={tier.tier}>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px flex-1 bg-[#082F49]/08" />
                <span className="font-sora font-bold text-xs tracking-widest uppercase px-4" style={{ color: tier.color }}>
                  {tier.tier} Sponsors
                </span>
                <div className="h-px flex-1 bg-[#082F49]/08" />
              </div>
              <div className="flex flex-wrap items-center justify-center gap-6">
                {tier.logos.length > 0 ? (
                  tier.logos.map((logo) => (
                    <SponsorPlaceholder key={logo.name} name={logo.name} size={tier.size} />
                  ))
                ) : (
                  <div className={`flex items-center justify-center rounded-xl border-2 border-dashed border-[#082F49]/12 h-24 px-16`}>
                    <span className="font-inter text-[#020617]/30 text-sm">Available</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Become a sponsor */}
        <div className="rounded-2xl bg-[#082F49] p-8 md:p-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h3 className="font-sora font-bold text-white text-xl mb-2">
                Become a Sponsor
              </h3>
              <p className="font-inter text-white/55 text-sm leading-relaxed max-w-md">
                Partner with CIB 2026 and connect your brand with 200+ researchers and
                clinicians from 30+ countries.
              </p>

              {/* Perks */}
              <div className="grid grid-cols-2 gap-3 mt-5">
                {perks.map((p) => (
                  <div key={p.label} className="flex flex-col gap-0.5">
                    <span className="font-inter font-semibold text-[#0EA5A5] text-xs">{p.label}</span>
                    <span className="font-inter text-white/40 text-xs">{p.sub}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 shrink-0">
              <a
                href="mailto:sponsors@cib2026.org"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0EA5A5] text-white font-sora font-semibold text-sm hover:bg-[#0d9191] transition-all duration-200 hover:shadow-[0_0_20px_rgba(14,165,165,0.4)]"
              >
                <Mail size={14} />
                Contact Us
              </a>
              <a
                href="mailto:sponsors@cib2026.org?subject=Sponsorship%20Prospectus%20Request"
                className="inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white/40 font-sora font-semibold text-sm transition-all duration-200"
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
