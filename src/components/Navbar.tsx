import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import CIBLogo from './CIBLogo';

const links = [
  { label: 'About',    href: '#about' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Topics',   href: '#topics' },
  { label: 'Program',  href: '#program' },
  { label: 'Register', href: '#register' },
  { label: 'Location', href: '#location' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass shadow-2xl shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-[72px]">
        <a href="#" className="group relative">
          <CIBLogo size={38} theme={scrolled ? 'light' : 'light'} />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link text-white/70 hover:text-white text-sm font-inter font-medium transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#register"
          className="hidden md:inline-flex items-center px-6 py-2.5 rounded-full bg-teal text-white text-sm font-sora font-semibold hover:bg-teal-dark transition-all duration-300 hover:shadow-[0_0_30px_rgba(14,165,165,0.45)] hover:scale-105"
        >
          Register Now
        </a>

        <button
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          open ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="glass px-6 pb-8 pt-4 space-y-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block text-white/70 hover:text-white hover:bg-white/5 text-sm font-inter font-medium transition-colors duration-200 py-3 px-4 rounded-lg"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#register"
            className="block text-center mt-4 px-6 py-3 rounded-full bg-teal text-white text-sm font-sora font-semibold hover:bg-teal-dark transition-colors"
            onClick={() => setOpen(false)}
          >
            Register Now
          </a>
        </div>
      </div>
    </header>
  );
}
