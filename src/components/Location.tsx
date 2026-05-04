import { useEffect, useRef } from 'react';
import { MapPin, Plane, Hotel, Landmark, Sun, Compass } from 'lucide-react';

export default function Location() {
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
    <section id="location" ref={sectionRef} className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16 reveal">
          <p className="text-teal font-inter font-semibold text-sm tracking-[0.2em] uppercase mb-4">
            Destination
          </p>
          <h2 className="font-oswald font-bold text-navy text-5xl lg:text-6xl tracking-tight uppercase section-line section-line-center">
            Casablanca, Morocco
          </h2>
          <p className="font-inter text-navy/50 text-lg mt-6 max-w-lg mx-auto leading-relaxed">
            Host to CIB 2026 — where cutting-edge science meets rich cultural heritage.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="reveal relative rounded-3xl overflow-hidden group">
            <div className="aspect-[4/3] bg-navy/5">
              <img
                src="https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=1200&q=80"
                alt="Hassan II Mosque, Casablanca"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Overlay card */}
            <div className="absolute bottom-6 left-6 right-6 glass-light rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <Landmark size={20} className="text-teal" />
                <h4 className="font-sora font-bold text-navy text-sm">Hassan II Mosque</h4>
              </div>
              <p className="font-inter text-navy/60 text-xs leading-relaxed">
                One of the largest mosques in the world, an iconic symbol of Casablanca overlooking the Atlantic Ocean.
              </p>
            </div>
          </div>

          {/* Info side */}
          <div className="space-y-6">
            <div className="reveal reveal-delay-1">
              <h3 className="font-oswald font-bold text-navy text-2xl uppercase tracking-wide mb-4">
                Venue Information
              </h3>
              <p className="font-inter text-navy/55 text-base leading-relaxed mb-6">
                The symposium will be held at the Agora Conference Centre in Casablanca, Morocco's
                largest city and economic capital. The venue offers state-of-the-art conference
                facilities, easy accessibility, and proximity to the city's main attractions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Hotel, title: 'Agora Conference Centre', desc: 'Premier conference venue in Casablanca' },
                { icon: Plane, title: 'Mohammed V Airport', desc: '30 min from city center — international flights' },
                { icon: Sun, title: 'November Climate', desc: 'Pleasant 18-22°C — ideal for exploring' },
                { icon: Compass, title: 'City Center', desc: 'Easy access to restaurants & attractions' },
              ].map((item) => (
                <div
                  key={item.title}
                  className="reveal reveal-delay-2 p-5 rounded-2xl border border-navy/8 hover:border-teal/20 hover:shadow-lg hover:shadow-teal/5 transition-all duration-300 bg-cream/50"
                >
                  <item.icon size={22} className="text-teal mb-3" />
                  <h4 className="font-sora font-semibold text-navy text-sm mb-1">{item.title}</h4>
                  <p className="font-inter text-navy/45 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="reveal reveal-delay-3 flex items-center gap-3 pt-4">
              <MapPin size={18} className="text-teal" />
              <span className="font-inter text-navy/50 text-sm">
                Agora Conference Centre, Casablanca, Morocco
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
