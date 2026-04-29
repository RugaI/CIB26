import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import CIBLogo from './CIBLogo';

const links = [
  { label: 'About',    href: '#about' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Topics',   href: '#topics' },
  { label: 'Program',  href: '#program' },
  { label: 'Register', href: '#register' },
  { label: 'Contact',  href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#082F49]/95 backdrop-blur-md shadow-xl shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-[68px]">
        <a href="#" className="group">
          <CIBLogo size={36} theme="light" />
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link text-white/75 hover:text-white text-sm font-inter font-medium transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#register"
          className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-[#0EA5A5] text-white text-sm font-sora font-semibold hover:bg-[#0d9191] transition-all duration-200 hover:shadow-[0_0_18px_rgba(14,165,165,0.45)]"
        >
          Register Now
        </a>

        <button
          className="md:hidden text-white p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#082F49] border-t border-white/10 px-6 pb-6 pt-4 space-y-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block text-white/75 hover:text-white text-sm font-inter font-medium transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#register"
            className="inline-flex items-center px-5 py-2 rounded-full bg-[#0EA5A5] text-white text-sm font-sora font-semibold"
            onClick={() => setOpen(false)}
          >
            Register Now
          </a>
        </div>
      )}
    </header>
  );
}
