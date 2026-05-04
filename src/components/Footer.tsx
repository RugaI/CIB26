import { Mail, MapPin, ExternalLink, Twitter, Linkedin, ArrowRight, Dna } from 'lucide-react';
import CIBLogo from './CIBLogo';
import ParticleCanvas from './ParticleCanvas';

const navLinks = [
  { label: 'About',    href: '#about' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Topics',   href: '#topics' },
  { label: 'Program',  href: '#program' },
  { label: 'Register', href: '#register' },
  { label: 'Location', href: '#location' },
];

const importantDates = [
  { label: 'Abstract Submission', date: 'July 15, 2026' },
  { label: 'Acceptance Notice',   date: 'August 20, 2026' },
  { label: 'Early Registration',  date: 'September 10, 2026' },
  { label: 'Conference',          date: 'November 12–13, 2026' },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-navy-dark text-white overflow-hidden">
      {/* Particle network */}
      <ParticleCanvas className="opacity-20" particleCount={40} color="14, 165, 165" />

      {/* CTA strip */}
      <div className="relative border-b border-white/8">
        <div className="absolute inset-0 bg-gradient-to-r from-teal/10 to-sky-accent/5 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20 flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <h3 className="font-oswald font-bold text-3xl lg:text-4xl uppercase tracking-tight mb-3">
              Submit Your Abstract
            </h3>
            <p className="font-inter text-white/40 text-base">
              Deadline: July 15, 2026 — Limited seats available
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="#register"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-teal text-white font-sora font-semibold text-sm hover:bg-teal-dark transition-all duration-300 hover:shadow-[0_0_30px_rgba(14,165,165,0.45)] hover:scale-105 hover:gap-3"
            >
              Register Now
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="mailto:abstracts@cib2026.org"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/40 hover:bg-white/5 font-sora font-semibold text-sm transition-all duration-300"
            >
              Submit Abstract
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">

        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="mb-6">
            <CIBLogo size={42} theme="light" />
          </div>
          <p className="font-inter text-white/35 text-sm leading-relaxed mb-8">
            International Symposium on Cancer Research, Immunology and Bioinformatics.
            Casablanca, Morocco — November 2026.
          </p>
          <div className="flex items-center gap-3">
            {[
              { icon: Twitter,  label: 'Twitter' },
              { icon: Linkedin, label: 'LinkedIn' },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:text-teal hover:border-teal/40 transition-all duration-300 hover:scale-110"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-oswald font-semibold text-white text-sm mb-6 tracking-wide uppercase">Navigation</h4>
          <ul className="space-y-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="font-inter text-sm text-white/40 hover:text-teal transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-px bg-teal transition-all duration-300" />
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Important Dates */}
        <div>
          <h4 className="font-oswald font-semibold text-white text-sm mb-6 tracking-wide uppercase">Key Dates</h4>
          <ul className="space-y-4">
            {importantDates.map((d) => (
              <li key={d.label} className="flex flex-col gap-0.5">
                <span className="font-inter text-xs text-white/25 uppercase tracking-wider">{d.label}</span>
                <span className="font-oswald font-semibold text-white/60 text-sm">{d.date}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-oswald font-semibold text-white text-sm mb-6 tracking-wide uppercase">Contact</h4>
          <ul className="space-y-4">
            <li>
              <a
                href="mailto:info@cib2026.org"
                className="flex items-center gap-3 text-white/40 hover:text-teal transition-colors duration-300 group"
              >
                <Mail size={14} />
                <span className="font-inter text-sm">info@cib2026.org</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:abstracts@cib2026.org"
                className="flex items-center gap-3 text-white/40 hover:text-teal transition-colors duration-300"
              >
                <Mail size={14} />
                <span className="font-inter text-sm">abstracts@cib2026.org</span>
              </a>
            </li>
            <li>
              <div className="flex items-start gap-3 text-white/40">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                <span className="font-inter text-sm leading-relaxed">
                  Casablanca, Morocco<br />
                  <span className="text-white/25 text-xs">Venue à confirmer</span>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/6">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-inter text-white/20 text-xs flex items-center gap-2">
            <Dna size={12} className="text-teal/40" />
            &copy; 2026 CIB Symposium. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            {['Privacy Policy', 'Terms'].map((label) => (
              <a
                key={label}
                href="#"
                className="font-inter text-white/20 text-xs hover:text-white/50 transition-colors duration-300 flex items-center gap-1"
              >
                {label} <ExternalLink size={10} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
