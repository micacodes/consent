'use client';

import Image from 'next/image';
import { Mountain, Map, Users, Wind, Sun, Footprints, Heart } from 'lucide-react';

const HIKE_PHOTOS = [
  { src: '/IMG_2446.jpg', caption: 'The ascent begins' },
  { src: '/IMG_2485.jpg', caption: 'Sea of Humanity' },
  { src: '/IMG_2574.jpg', caption: 'Summit push' },
  { src: '/IMG_2616.jpg', caption: 'Trail views' },
  { src: '/IMG_2676.jpg', caption: 'Together we swim' },
  { src: '/IMG_2803.jpg', caption: 'The descent' },
];

const Hiking = () => {
  return (
    <section id="hikes" className="scroll-mt-20 py-24 bg-brand-gray relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── HEADER ── */}
        <div className="flex items-center gap-2 mb-4">
          <span className="p-2 bg-brand-green/10 text-brand-green rounded-lg">
            <Mountain size={20} />
          </span>
          <span className="text-brand-green font-bold tracking-widest uppercase text-sm">
            Adventure & Fitness
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-end mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-black leading-tight">
            Politically Fit & <br />
            <span className="text-brand-green">Physically Strong.</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We take a break from national policy and campus politics to conquer mountains.
            Our hikes are famous for the massive turnout — the <strong>"Sea of Humanity"</strong>.
            The perfect environment to network with student leaders and alumni while keeping fit.
          </p>
        </div>

        {/* ── PHOTO GALLERY ── */}
        {/* 2 tall photos left, 4 in a 2x2 right */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-20" style={{ gridAutoRows: '220px' }}>

          {/* Photo 1 — tall, spans 2 rows */}
          <div className="relative rounded-2xl overflow-hidden row-span-2 group">
            <Image src={HIKE_PHOTOS[0].src} alt={HIKE_PHOTOS[0].caption} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded">
              {HIKE_PHOTOS[0].caption}
            </div>
          </div>

          {/* Photo 2 — tall, spans 2 rows */}
          <div className="relative rounded-2xl overflow-hidden row-span-2 group">
            <Image src={HIKE_PHOTOS[1].src} alt={HIKE_PHOTOS[1].caption} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded">
              {HIKE_PHOTOS[1].caption}
            </div>
          </div>

          {/* Photos 3–6 — single row each */}
          {HIKE_PHOTOS.slice(2).map((photo, i) => (
            <div key={i} className="relative rounded-2xl overflow-hidden group">
              <Image src={photo.src} alt={photo.caption} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute bottom-2 left-2 bg-black/50 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded">
                {photo.caption}
              </div>
            </div>
          ))}
        </div>

        {/* ── CONTENT GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Left: written content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-extrabold text-brand-black mb-3">Why We Hike</h3>
              <p className="text-gray-600 leading-relaxed">
                The mountains don't care about your politics, your title, or your campus position.
                When you're on a trail with 200+ fellow members, all that matters is putting one foot in front
                of the other. That shared struggle creates bonds that no boardroom ever could.
                The Consent hike is intentionally challenging — because growth never happens in comfort zones.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-brand-black mb-3">The Sea of Humanity</h3>
              <p className="text-gray-600 leading-relaxed">
                Our signature annual event earns its name the moment the group crests a ridge and you look
                back to see hundreds of people snaking up the mountain behind you — a literal sea of humanity.
                Alumni, current students, and first-timers all on the same trail, at the same pace.
                No hierarchy. Just altitude.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-brand-black mb-3">The Physical & Mental Case</h3>
              <p className="text-gray-600 leading-relaxed">
                Research consistently shows that time in nature reduces cortisol, improves focus, and builds
                mental resilience. For students navigating a demanding academic and civic life, a long hike is
                one of the best resets available. We take that seriously — and we make it affordable,
                with subsidized rates ensuring no member is priced out of the experience.
              </p>
            </div>
          </div>

          {/* Right: stats + perks + CTA */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <p className="text-4xl font-black text-brand-green">100+</p>
              <p className="text-sm text-gray-500 font-medium mt-1">Members per hike</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <p className="text-4xl font-black text-brand-green">2</p>
              <p className="text-sm text-gray-500 font-medium mt-1">Trails conquered across Kenya</p>
            </div>

            <div className="bg-brand-black rounded-2xl p-6 text-white">
              <p className="text-xs font-black uppercase tracking-widest text-brand-green mb-4">What's Included</p>
              <ul className="space-y-3">
                {[
                  { icon: <Users size={15} />,       text: 'Alumni networking on the trail' },
                  { icon: <Map size={15} />,          text: 'Guided routes across Kenya' },
                  { icon: <Wind size={15} />,         text: 'Fresh air & mental reset' },
                  { icon: <Sun size={15} />,          text: 'Sunrise & scenic viewpoints' },
                  { icon: <Footprints size={15} />,   text: 'All fitness levels welcome' },
                  { icon: <Heart size={15} />,        text: 'A sense of accomplishment' },
                ].map(({ icon, text }, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="text-brand-green shrink-0">{icon}</span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            <button className="w-full bg-brand-green text-white px-8 py-4 rounded-xl font-bold hover:opacity-90 transition shadow-lg active:scale-95">
              Join Next Hike
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hiking;