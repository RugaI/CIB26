import { ArrowRight, FileText, Users, CalendarCheck, MapPin } from 'lucide-react';

const dates = [
  { label: 'Abstract Submission Opens', date: 'June 1, 2026',      done: false },
  { label: 'Abstract Submission Deadline', date: 'July 15, 2026',  done: false },
  { label: 'Notification of Acceptance',  date: 'August 20, 2026', done: false },
  { label: 'Early Bird Registration',     date: 'September 10, 2026', done: false },
  { label: 'Conference',                  date: 'November 12–13, 2026', done: false },
];

export default function Register() {
  return (
    <section id="register" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="text-[#0EA5A5] font-inter font-semibold text-sm tracking-widest uppercase mb-4">
            Participate
          </p>
          <h2 className="font-sora font-extrabold text-[#082F49] text-4xl lg:text-5xl section-line section-line-center">
            Join CIB 2026
          </h2>
          <p className="font-inter text-[#020617]/55 text-lg mt-6 max-w-lg mx-auto leading-relaxed">
            Register to attend or submit your research abstract and join a global community of biomedical scientists.
          </p>
        </div>

        {/* Two cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">

          {/* Attend */}
          <div className="group relative rounded-2xl overflow-hidden border border-[#082F49]/08 hover:shadow-2xl hover:shadow-[#0EA5A5]/10 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0EA5A5]/05 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative p-8">
              <div className="w-12 h-12 rounded-2xl bg-[#0EA5A5]/10 flex items-center justify-center mb-5">
                <Users size={22} className="text-[#0EA5A5]" />
              </div>
              <h3 className="font-sora font-bold text-[#082F49] text-xl mb-3">Attend the Symposium</h3>
              <p className="font-inter text-[#020617]/60 text-sm leading-relaxed mb-6">
                Join 200+ researchers, clinicians, and computational scientists for two days of
                cutting-edge presentations, workshops, and networking in Casablanca.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  'Access to all keynote & session talks',
                  'Poster session & networking events',
                  'Workshop participation',
                  'Welcome dinner included',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5A5] mt-1.5 flex-shrink-0" />
                    <span className="font-inter text-sm text-[#020617]/65">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="mailto:info@cib2026.org?subject=Registration%20CIB%202026"
                className="group/btn inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0EA5A5] text-white font-sora font-semibold text-sm hover:bg-[#0d9191] transition-all duration-200 hover:shadow-[0_0_20px_rgba(14,165,165,0.4)] hover:gap-3"
              >
                Register Now
                <ArrowRight size={15} className="transition-transform duration-200 group-hover/btn:translate-x-0.5" />
              </a>
            </div>
          </div>

          {/* Submit Abstract */}
          <div className="group relative rounded-2xl overflow-hidden border border-[#082F49]/08 hover:shadow-2xl hover:shadow-[#0284C7]/10 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0284C7]/05 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative p-8">
              <div className="w-12 h-12 rounded-2xl bg-[#0284C7]/10 flex items-center justify-center mb-5">
                <FileText size={22} className="text-[#0284C7]" />
              </div>
              <h3 className="font-sora font-bold text-[#082F49] text-xl mb-3">Submit an Abstract</h3>
              <p className="font-inter text-[#020617]/60 text-sm leading-relaxed mb-6">
                Present your research to an international audience. We welcome original work in
                cancer research, immunology, and bioinformatics for oral or poster presentation.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  'Oral & poster presentations accepted',
                  'Peer-reviewed selection process',
                  'Best poster award',
                  'Proceedings publication opportunity',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7] mt-1.5 flex-shrink-0" />
                    <span className="font-inter text-sm text-[#020617]/65">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="mailto:abstracts@cib2026.org?subject=Abstract%20Submission%20CIB%202026"
                className="group/btn inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#082F49] text-white font-sora font-semibold text-sm hover:bg-[#0a3d5f] transition-all duration-200 hover:shadow-[0_0_20px_rgba(8,47,73,0.3)] hover:gap-3"
              >
                Submit Abstract
                <ArrowRight size={15} className="transition-transform duration-200 group-hover/btn:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Key dates timeline */}
        <div className="bg-[#F8FAFB] rounded-2xl border border-[#082F49]/06 p-8">
          <div className="flex items-center gap-3 mb-8">
            <CalendarCheck size={18} className="text-[#0EA5A5]" />
            <h3 className="font-sora font-bold text-[#082F49] text-lg">Key Dates</h3>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-2 top-2 bottom-2 w-px bg-[#0EA5A5]/20" />

            <div className="space-y-6">
              {dates.map((d, i) => (
                <div key={d.label} className="flex items-start gap-5 pl-8 relative">
                  <div className={`absolute left-0 w-4 h-4 rounded-full border-2 ${
                    i === dates.length - 1
                      ? 'bg-[#0EA5A5] border-[#0EA5A5]'
                      : 'bg-white border-[#0EA5A5]/50'
                  }`} />
                  <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <span className="font-inter text-sm text-[#020617]/70 font-medium">{d.label}</span>
                    <span className="font-sora font-semibold text-[#082F49] text-sm whitespace-nowrap">{d.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Venue note */}
        <div className="mt-8 flex items-center justify-center gap-2 text-[#020617]/40">
          <MapPin size={14} className="text-[#0EA5A5]" />
          <span className="font-inter text-sm">
            Venue: Hôtel à Casablanca, Morocco — exact location to be confirmed
          </span>
        </div>
      </div>
    </section>
  );
}
