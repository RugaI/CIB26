import { Mail, MapPin, ExternalLink, Twitter, Linkedin, ArrowRight } from 'lucide-react';
import CIBLogo from './CIBLogo';

const navLinks = [
  { label: 'About',    href: '#about' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Topics',   href: '#topics' },
  { label: 'Program',  href: '#program' },
  { label: 'Register', href: '#register' },
  { label: 'Sponsors', href: '#sponsors' },
];

const importantDates = [
  { label: 'Abstract Submission', date: 'July 15, 2026' },
  { label: 'Acceptance Notice',   date: 'August 20, 2026' },
  { label: 'Early Registration',  date: 'September 10, 2026' },
  { label: 'Conference',          date: 'November 12–13, 2026' },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#082F49] text-white">

      {/* CTA strip */}
      <div className="relative overflow-hidden border-b border-white/08">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0EA5A5]/10 to-[#0284C7]/05 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-sora font-extrabold text-2xl lg:text-3xl mb-2">
              Submit Your Abstract
            </h3>
            <p className="font-inter text-white/50 text-base">
              Deadline: July 15, 2026 — Limited seats available
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="#register"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0EA5A5] text-white font-sora font-semibold text-sm hover:bg-[#0d9191] hover:shadow-[0_0_24px_rgba(14,165,165,0.45)] transition-all duration-200 hover:gap-3"
            >
              Register Now
              <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <a
              href="mailto:abstracts@cib2026.org"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 text-white/75 hover:text-white hover:border-white/40 font-sora font-semibold text-sm transition-all duration-200"
            >
              Submit Abstract
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="mb-5">
            <CIBLogo size={40} theme="light" />
          </div>
          <p className="font-inter text-white/45 text-sm leading-relaxed mb-6">
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
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/45 hover:text-[#0EA5A5] hover:border-[#0EA5A5]/40 transition-all duration-200"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-sora font-semibold text-white text-sm mb-5 tracking-wide">Navigation</h4>
          <ul className="space-y-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="font-inter text-sm text-white/45 hover:text-[#0EA5A5] transition-colors duration-200"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Important Dates */}
        <div>
          <h4 className="font-sora font-semibold text-white text-sm mb-5 tracking-wide">Key Dates</h4>
          <ul className="space-y-4">
            {importantDates.map((d) => (
              <li key={d.label} className="flex flex-col gap-0.5">
                <span className="font-inter text-xs text-white/35 uppercase tracking-wider">{d.label}</span>
                <span className="font-inter text-sm text-white/65 font-medium">{d.date}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-sora font-semibold text-white text-sm mb-5 tracking-wide">Contact</h4>
          <ul className="space-y-4">
            <li>
              <a
                href="mailto:info@cib2026.org"
                className="flex items-center gap-2.5 text-white/45 hover:text-[#0EA5A5] transition-colors duration-200 group"
              >
                <Mail size={14} />
                <span className="font-inter text-sm">info@cib2026.org</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:abstracts@cib2026.org"
                className="flex items-center gap-2.5 text-white/45 hover:text-[#0EA5A5] transition-colors duration-200"
              >
                <Mail size={14} />
                <span className="font-inter text-sm">abstracts@cib2026.org</span>
              </a>
            </li>
            <li>
              <div className="flex items-start gap-2.5 text-white/45">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                <span className="font-inter text-sm leading-relaxed">
                  Casablanca, Morocco<br />
                  <span className="text-white/30 text-xs">Venue à confirmer</span>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/08">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-inter text-white/25 text-xs">
            &copy; 2026 CIB Symposium. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms'].map((label) => (
              <a
                key={label}
                href="#"
                className="font-inter text-white/25 text-xs hover:text-white/55 transition-colors duration-200 flex items-center gap-1"
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
