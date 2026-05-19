import Image from 'next/image';
import Link from 'next/link';
import { Utensils, Music, Users, Camera, ArrowRight } from 'lucide-react';

export default function ChomaFest() {
  const images = [
    "/choma1.jpg", "/choma2.jpg", "/choma3.jpg", "/choma4.jpg", "/choma5.jpg",
    "/choma6.jpg", "/choma7.jpg", "/choma8.jpg", "/choma9.jpg", "/choma10.jpg", "/choma11.jpg"
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* HERO: The Sizzle */}
      <section className="relative h-[70vh] flex items-center justify-center bg-black overflow-hidden">
        <Image 
          src="/choma3.jpg" 
          alt="Choma Fest Vibe"
          fill
          className="object-cover opacity-60 scale-105"
          priority
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter uppercase italic leading-none">
            CHOMA <span className="text-red-600">FEST</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mt-6 font-light max-w-2xl mx-auto uppercase tracking-widest">
            Where the sizzle meets the story.
          </p>
        </div>
      </section>

      {/* CONTENT: The Vibe */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <span className="text-red-600 font-bold uppercase tracking-[0.3em] text-sm mb-4 block">The Experience</span>
            <h2 className="text-5xl font-black text-black tracking-tighter leading-none mb-8">
              BEYOND THE <br /> GRILL.
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              In Kenya, Nyama Choma isn't just a meal—it's a ritual. At Consent_KE, we take that ritual and turn it into a powerhouse of networking, music, and laughter. Our Choma Fest brings together the sharpest minds for an afternoon of shared plates and big ideas.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex items-center gap-3">
                <Utensils className="text-red-600" />
                <span className="font-bold text-gray-900 uppercase text-xs tracking-widest">Premium Cuts</span>
              </div>
              <div className="flex items-center gap-3">
                <Music className="text-red-600" />
                <span className="font-bold text-gray-900 uppercase text-xs tracking-widest">Live Vibez</span>
              </div>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-2xl">
             <Image src="/choma10.jpg" alt="Waterfalls and Vibes" fill className="object-cover" />
          </div>
        </div>

        {/* GALLERY: 11 PHOTOS GRID */}
        <div className="mb-32">
          <div className="flex items-end justify-between mb-12 border-b border-gray-100 pb-8">
             <h3 className="text-3xl font-black uppercase tracking-tighter italic">The Archive / 01</h3>
             <Camera className="text-gray-300" size={32} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((src, idx) => (
              <div 
                key={idx} 
                className={`relative overflow-hidden group bg-gray-100 rounded-sm shadow-sm
                  ${idx === 0 || idx === 6 ? 'md:col-span-2 md:row-span-2' : 'aspect-square'}
                `}
              >
                <Image 
                  src={src} 
                  alt={`Choma Event Photo ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA: Join the next one */}
        <div className="bg-black text-white p-12 md:p-24 rounded-sm text-center">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic mb-8">
            WANT A <span className="text-red-600 underline">SEAT</span> <br /> AT THE TABLE?
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto">
            Our next Choma Fest is already in the works. Don't miss out on the most anticipated gathering of the quarter.
          </p>
          <Link 
            href="https://whatsapp.com/channel/0029Vb1YoqJCMY0Pod02FL3M"
            className="inline-flex items-center gap-4 bg-white text-black px-12 py-5 rounded-full font-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all"
          >
            Join WhatsApp <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}