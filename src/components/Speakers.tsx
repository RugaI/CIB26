import { UserCircle2, ExternalLink } from 'lucide-react';

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
    title: 'Clinical Affairs Specialist',
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
    <div className="speaker-card group bg-white rounded-2xl overflow-hidden border border-[#082F49]/08 hover:shadow-2xl hover:shadow-[#082F49]/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer">
      <div className="speaker-img-wrap relative h-60 bg-gradient-to-br from-[#082F49]/10 to-[#0EA5A5]/10 overflow-hidden">
        {s.img && (
          <img
            src={s.img}
            alt={s.name}
            className="speaker-img w-full h-full object-cover object-top"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#082F49]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center gap-1 bg-[#0EA5A5] text-white text-[10px] font-sora font-semibold px-2.5 py-1 rounded-full">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse-slow block" />
            Confirmed
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-sora font-bold text-[#082F49] text-base mb-0.5 group-hover:text-[#0EA5A5] transition-colors duration-200">
          {s.name}
        </h3>
        <p className="font-inter text-[#0284C7] text-xs font-semibold mb-1">{s.title}</p>
        <p className="font-inter text-[#020617]/45 text-xs mb-3 italic">{s.affiliation}</p>
        <div className="inline-flex items-center gap-1.5 bg-[#0EA5A5]/08 rounded-full px-3 py-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5A5]" />
          <span className="font-inter text-[#0EA5A5] text-xs font-medium">{s.topic}</span>
        </div>
      </div>
    </div>
  );
}

function TBDCard() {
  return (
    <div className="bg-white rounded-2xl border border-dashed border-[#082F49]/15 hover:border-[#0EA5A5]/30 transition-all duration-300 overflow-hidden">
      <div className="h-60 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#082F49]/03 to-[#0EA5A5]/03">
        <UserCircle2 size={48} className="text-[#082F49]/15" />
        <span className="font-inter text-[#020617]/30 text-xs uppercase tracking-widest">
          À confirmer
        </span>
      </div>
      <div className="p-5">
        <div className="h-4 bg-[#082F49]/06 rounded-full w-3/4 mb-2" />
        <div className="h-3 bg-[#082F49]/04 rounded-full w-1/2 mb-3" />
        <div className="h-3 bg-[#082F49]/04 rounded-full w-2/3" />
      </div>
    </div>
  );
}

export default function Speakers() {
  return (
    <section id="speakers" className="py-28 bg-[#F8FAFB]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="text-[#0EA5A5] font-inter font-semibold text-sm tracking-widest uppercase mb-4">
            Keynote Speakers
          </p>
          <h2 className="font-sora font-extrabold text-[#082F49] text-4xl lg:text-5xl section-line section-line-center">
            Invited Experts
          </h2>
          <p className="font-inter text-[#020617]/55 text-lg mt-6 max-w-lg mx-auto leading-relaxed">
            World-class scientists and clinicians sharing breakthroughs from across the full
            spectrum of biomedical research.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {speakers.map((s, i) =>
            s.confirmed ? (
              <ConfirmedCard key={s.name} s={s} />
            ) : (
              <TBDCard key={i} />
            )
          )}
        </div>

        <div className="text-center">
          <p className="font-inter text-[#020617]/40 text-sm mb-4">
            Additional speakers to be announced shortly.
          </p>
          <a
            href="mailto:info@cib2026.org"
            className="inline-flex items-center gap-1.5 text-[#0EA5A5] font-inter text-sm hover:underline"
          >
            Interested in speaking? <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
