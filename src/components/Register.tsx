import { useEffect, useRef } from 'react';
import { ArrowRight, FileText, Users, CalendarCheck, MapPin, Ticket } from 'lucide-react';
import ParticleCanvas from './ParticleCanvas';

const dates = [
  { label: 'Abstract Submission Opens', date: 'June 1, 2026',      done: false },
  { label: 'Abstract Submission Deadline', date: 'July 15, 2026',  done: false },
  { label: 'Notification of Acceptance',  date: 'August 20, 2026', done: false },
  { label: 'Early Bird Registration',     date: 'September 10, 2026', done: false },
  { label: 'Conference',                  date: 'November 12–13, 2026', done: false },
];

export default function Register() {
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
    <section id="register" ref={sectionRef} className="relative py-32 bg-navy overflow-hidden">
      {/* Background effects */}
      <ParticleCanvas className="opacity-30" particleCount={50} color="14, 165, 165" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky-accent/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16 reveal">
          <p className="text-teal font-inter font-semibold text-sm tracking-[0.2em] uppercase mb-4">
            Participate
          </p>
          <h2 className="font-oswald font-bold text-white text-5xl lg:text-6xl tracking-tight uppercase section-line section-line-center">
            Join CIB 2026
          </h2>
          <p className="font-inter text-white/50 text-lg mt-6 max-w-lg mx-auto leading-relaxed">
            Register to attend or submit your research abstract and join a global community of biomedical scientists.
          </p>
        </div>

        {/* Big CTA cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Attend */}
          <div className="reveal group relative rounded-3xl overflow-hidden border border-white/10 hover:border-teal/30 transition-all duration-500 bg-white/5 backdrop-blur-sm hover:-translate-y-1 hover:shadow-2xl hover:shadow-teal/10">
            <div className="absolute inset-0 bg-gradient-to-br from-teal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-10">
              <div className="w-14 h-14 rounded-2xl bg-teal/15 flex items-center justify-center mb-6">
                <Users size={26} className="text-teal" />
              </div>
              <h3 className="font-oswald font-bold text-white text-2xl uppercase tracking-wide mb-4">Attend the Symposium</h3>
              <p className="font-inter text-white/50 text-sm leading-relaxed mb-8">
                Join 200+ researchers, clinicians, and computational scientists for two days of
                cutting-edge presentations, workshops, and networking in Casablanca.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Access to all keynote & session talks',
                  'Poster session & networking events',
                  'Workshop participation',
                  'Welcome dinner included',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal mt-2 flex-shrink-0" />
                    <span className="font-inter text-sm text-white/55">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="mailto:info@cib2026.org?subject=Registration%20CIB%202026"
                className="group/btn inline-flex items-center gap-2 px-8 py-4 rounded-full bg-teal text-white font-sora font-semibold text-sm hover:bg-teal-dark transition-all duration-300 hover:shadow-[0_0_30px_rgba(14,165,165,0.4)] hover:scale-105 hover:gap-3"
              >
                Register Now
                <ArrowRight size={15} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Submit Abstract */}
          <div className="reveal reveal-delay-2 group relative rounded-3xl overflow-hidden border border-white/10 hover:border-sky-accent/30 transition-all duration-500 bg-white/5 backdrop-blur-sm hover:-translate-y-1 hover:shadow-2xl hover:shadow-sky-accent/10">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-10">
              <div className="w-14 h-14 rounded-2xl bg-sky-accent/15 flex items-center justify-center mb-6">
                <FileText size={26} className="text-sky-accent" />
              </div>
              <h3 className="font-oswald font-bold text-white text-2xl uppercase tracking-wide mb-4">Submit an Abstract</h3>
              <p className="font-inter text-white/50 text-sm leading-relaxed mb-8">
                Present your research to an international audience. We welcome original work in
                cancer research, immunology, and bioinformatics for oral or poster presentation.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Oral & poster presentations accepted',
                  'Peer-reviewed selection process',
                  'Best poster award',
                  'Proceedings publication opportunity',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-accent mt-2 flex-shrink-0" />
                    <span className="font-inter text-sm text-white/55">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="mailto:abstracts@cib2026.org?subject=Abstract%20Submission%20CIB%202026"
                className="group/btn inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-navy font-sora font-semibold text-sm hover:bg-cream transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-105 hover:gap-3"
              >
                Submit Abstract
                <ArrowRight size={15} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Key dates timeline */}
        <div className="reveal bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-10">
          <div className="flex items-center gap-3 mb-10">
            <CalendarCheck size={20} className="text-teal" />
            <h3 className="font-oswald font-bold text-white text-xl uppercase tracking-wide">Key Dates</h3>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-3 top-2 bottom-2 w-px bg-teal/20" />

            <div className="space-y-8">
              {dates.map((d, i) => (
                <div key={d.label} className="flex items-start gap-6 pl-10 relative">
                  <div className={`absolute left-0 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    i === dates.length - 1
                      ? 'bg-teal border-teal'
                      : 'bg-navy border-teal/40'
                  }`}>
                    {i === dates.length - 1 && <Ticket size={12} className="text-navy" />}
                  </div>
                  <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <span className="font-inter text-sm text-white/60 font-medium">{d.label}</span>
                    <span className="font-oswald font-semibold text-teal text-sm whitespace-nowrap">{d.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Venue note */}
        <div className="mt-10 flex items-center justify-center gap-3 text-white/30 reveal">
          <MapPin size={16} className="text-teal" />
          <span className="font-inter text-sm">
            Venue: Hôtel à Casablanca, Morocco — exact location to be confirmed
          </span>
        </div>
      </div>
    </section>
  );
}
