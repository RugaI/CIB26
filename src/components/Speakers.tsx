import { useEffect, useRef } from 'react';
import { UserCircle2, ExternalLink, CheckCircle2 } from 'lucide-react';

type Speaker = {
  name: string;
  title: string;
  affiliation: string;
  topic: string;
  img?: string;
  confirmed: boolean;
};

const speakers: Speaker[] = [
  {
    name: 'EL KHALKI Lamyae',
    title: 'Oncology Translational Researcher',
    affiliation: 'À confirmer',
    topic: 'Translational Oncology',
    img: 'https://images.pexels.com/photos/5327647/pexels-photo-5327647.jpeg?auto=compress&cs=tinysrgb&w=400',
    confirmed: true,
  },
  {
    name: 'AKRIM Ahmed Taoufik',
    title: 'Spécialiste en Affaires Cliniques',
    affiliation: 'À confirmer',
    topic: 'Clinical Research',
    img: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=400',
    confirmed: true,
  },
  { name: '', title: '', affiliation: '', topic: '', confirmed: false },
  { name: '', title: '', affiliation: '', topic: '', confirmed: false },
  { name: '', title: '', affiliation: '', topic: '', confirmed: false },
  { name: '', title: '', affiliation: '', topic: '', confirmed: false },
];

function ConfirmedCard({ s }: { s: Speaker }) {
  return (
    <div className="speaker-card group relative">
      <div className="bg-white rounded-3xl overflow-hidden border border-navy/8 hover:shadow-2xl hover:shadow-navy/10 hover:-translate-y-2 transition-all duration-500">
        {/* Circular image - poster style */}
        <div className="pt-8 pb-4 flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-teal/20 group-hover:border-teal/40 transition-colors duration-500">
              {s.img && (
                <img
                  src={s.img}
                  alt={s.name}
                  className="speaker-img w-full h-full object-cover"
                />
              )}
            </div>
            {/* Confirmed badge */}
            <div className="absolute -bottom-1 -right-1 bg-teal text-white rounded-full p-1.5 shadow-lg">
              <CheckCircle2 size={16} />
            </div>
          </div>
        </div>

        <div className="px-6 pb-8 text-center">
          <h3 className="font-sora font-bold text-navy text-lg mb-1 group-hover:text-teal transition-colors duration-300">
            {s.name}
          </h3>
          <p className="font-inter text-sky-accent text-sm font-semibold mb-1">{s.title}</p>
          <p className="font-inter text-navy/40 text-xs mb-4 italic">{s.affiliation}</p>
          <div className="inline-flex items-center gap-1.5 bg-teal/8 rounded-full px-3 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-teal" />
            <span className="font-inter text-teal text-xs font-medium">{s.topic}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function TBDCard() {
  return (
    <div className="group">
      <div className="bg-white/50 rounded-3xl border-2 border-dashed border-navy/10 hover:border-teal/20 transition-all duration-500 overflow-hidden">
        <div className="pt-8 pb-4 flex justify-center">
          <div className="w-32 h-32 rounded-full bg-navy/5 flex items-center justify-center border-4 border-navy/10 group-hover:border-teal/20 transition-colors duration-500">
            <UserCircle2 size={48} className="text-navy/15" />
          </div>
        </div>
        <div className="px-6 pb-8 text-center">
          <span className="font-inter text-navy/30 text-sm uppercase tracking-widest font-medium">
            À confirmer
          </span>
          <div className="mt-3 space-y-2">
            <div className="h-3 bg-navy/5 rounded-full w-2/3 mx-auto" />
            <div className="h-2.5 bg-navy/4 rounded-full w-1/2 mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Speakers() {
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
    <section id="speakers" ref={sectionRef} className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16 reveal">
          <p className="text-teal font-inter font-semibold text-sm tracking-[0.2em] uppercase mb-4">
            Keynote Speakers
          </p>
          <h2 className="font-oswald font-bold text-navy text-5xl lg:text-6xl tracking-tight uppercase section-line section-line-center">
            Invited Experts
          </h2>
          <p className="font-inter text-navy/50 text-lg mt-6 max-w-lg mx-auto leading-relaxed">
            World-class scientists and clinicians sharing breakthroughs from across the full
            spectrum of biomedical research.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {speakers.map((s, i) =>
            s.confirmed ? (
              <div key={s.name} className="reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <ConfirmedCard s={s} />
              </div>
            ) : (
              <div key={i} className="reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <TBDCard />
              </div>
            )
          )}
        </div>

        <div className="text-center reveal">
          <p className="font-inter text-navy/40 text-sm mb-4">
            Additional speakers to be announced shortly.
          </p>
          <a
            href="mailto:info@cib2026.org"
            className="inline-flex items-center gap-1.5 text-teal font-inter text-sm hover:underline transition-all duration-300"
          >
            Interested in speaking? <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
