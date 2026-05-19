// src/app/members-cabinet/page.tsx

import Image from 'next/image';
import { Crown, Play, Star } from 'lucide-react';

const PHOTOS = [
  "/JJ1.jpeg",
  "/JJ2.jpeg",
  "/JJ3.jpeg",
  "/JJ4.jpeg",
  "/JJ5.jpeg",
  "/JJ6.jpeg",
  "/JJ7.jpeg",
  "/JJ8.jpeg",
];

export default function MembersCabinetPage() {
  return (
    <main className="bg-white min-h-screen">

      {/* ── CINEMATIC HERO ── */}
      <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
        <Image
          src="/JJ3.jpeg"
          alt="Joan Joy"
          fill
          priority
          className="object-cover object-top scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 w-1 h-full bg-red-600" />

        <div className="relative h-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 flex flex-col justify-end pb-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-red-500" />
              <span className="text-red-400 text-xs font-bold uppercase tracking-[0.3em]">Members Cabinet · Consent_KE</span>
            </div>
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-black text-white tracking-tighter leading-[0.95] mb-4">
              JOAN<br /><span className="text-red-500">JOY</span>
            </h1>
            <div className="flex items-center gap-3 mt-6">
              <Crown size={16} className="text-red-400" />
              <p className="text-gray-200 text-base sm:text-lg font-medium tracking-wide">
                Miss Independent International Africa
              </p>
            </div>
            <div className="mt-10 flex items-center gap-2 text-gray-400 text-xs uppercase tracking-widest">
              <div className="w-5 h-8 rounded-full border border-gray-500 flex items-start justify-center pt-1.5">
                <div className="w-0.5 h-2 bg-white rounded-full animate-bounce" />
              </div>
              <span>Scroll to read</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── OPENING PULL QUOTE ── */}
      <section className="bg-gray-950 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Star className="text-red-500 mx-auto mb-6" size={24} />
          <blockquote className="text-2xl sm:text-3xl md:text-4xl font-light text-white leading-relaxed tracking-tight">
            "From the halls of{' '}
            <span className="text-red-400 font-semibold italic">Kenyatta University</span>
            {' '}to the international stage — this crown is not the destination.{' '}
            <span className="text-red-400 font-semibold italic">It is only the beginning.</span>"
          </blockquote>
        </div>
      </section>

      {/* ── STORY + SIDEBAR LAYOUT ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Sticky sidebar */}
          <aside className="lg:col-span-3 lg:sticky lg:top-28 lg:self-start">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl mb-6">
              <Image src="/JJ5.jpeg" alt="Joan Joy portrait" fill className="object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-bold text-sm">Joan Joy</p>
                <p className="text-red-400 text-xs mt-0.5">Miss Independent International Africa</p>
              </div>
            </div>
            <div className="space-y-3">
              {[
                { label: "University", value: "Kenyatta University" },
                { label: "Title", value: "Miss KU Alumni" },
                { label: "Competed In", value: "Bangkok, Thailand" },
                { label: "Award", value: "Miss Independent International Africa" },
              ].map((stat) => (
                <div key={stat.label} className="border-l-2 border-red-600 pl-3">
                  <p className="text-gray-400 text-xs uppercase tracking-wider">{stat.label}</p>
                  <p className="text-gray-900 text-sm font-semibold mt-0.5">{stat.value}</p>
                </div>
              ))}
            </div>
          </aside>

          {/* Main story */}
          <div className="lg:col-span-9 space-y-8 text-gray-700 text-lg leading-relaxed">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-500 mb-4">The Beginning</p>
              <p>Before the crown, before the cameras, before the international stage, there was simply a young girl with a dream and the courage to believe in it.</p>
              <p className="mt-6">Being crowned Miss Independent International Africa is more than just winning a title for me — it is the manifestation of years of faith, sacrifice, resilience, and the unwavering support of people who believed in me even when I struggled to believe in myself. I call it my international dream.</p>
              <p className="mt-6">My modelling journey began at Kenyatta University while I was pursuing my Bachelor's degree. That is where I discovered not just my passion for modelling, but the confidence to pursue it seriously. Kenyatta University did not just shape my academic journey; it became the birthplace of my dream.</p>
            </div>

            <div className="my-10 py-8 border-t border-b border-gray-100">
              <p className="text-2xl font-semibold text-gray-900 italic leading-snug">
                "More than a title, it was affirmation. It was proof that the dream in my heart was valid and worth pursuing."
              </p>
            </div>

            <div>
              <p>It was there that I won the title of Miss Kenyatta University, a defining moment that marked the true beginning of my modelling and pageantry career. A special part of that beginning was my first trainer, Sharon Shirley, who taught me my very first catwalk and turns. Through those early lessons, she helped build the foundation of the poised and polished queen I am today.</p>
              <p className="mt-6">As my ambitions grew beyond campus and onto national and international stages, Kenyatta University remained one of my greatest pillars of support. During my participation in Miss World Kenya and later Miss Independent International, the university community rallied behind me — students, peers, alumnus and supporters contributing financially and pushing votes to help propel me forward. That support reminded me that this dream was never mine alone.</p>
            </div>

            <div className="pt-4">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-500 mb-4">The Sacrifice</p>
              <p>Preparing for the international stage was one of the most demanding seasons of my life. Behind the glamour was sacrifice — grueling gym sessions, endless catwalk rehearsals, wardrobe fittings, rebranding, mental conditioning, and the emotional pressure of carrying both personal and collective expectations.</p>
            </div>

            <div className="bg-gray-950 rounded-2xl p-8 text-white">
              <p className="text-xl leading-relaxed font-light">
                There were days I nearly gave up.{' '}
                <span className="text-gray-400">Days I cried.</span>{' '}
                Days I questioned whether I was truly enough for the stage I was preparing for.{' '}
                <span className="text-red-400 font-medium">But even in those moments, I was never alone.</span>
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── EDITORIAL PHOTO GALLERY ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-8 h-px bg-red-600" />
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gray-400">Her Journey in Photos</p>
          <div className="flex-1 h-px bg-gray-100" />
        </div>

        {/* Row 1: 5 + 4 + 3 col split */}
        <div className="grid grid-cols-12 gap-2 mb-2">
          <div className="col-span-5 relative overflow-hidden rounded-2xl bg-gray-100 group" style={{ aspectRatio: '3/4' }}>
            <Image src={PHOTOS[0]} alt="Joan Joy" fill className="object-cover object-top group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="col-span-4 relative overflow-hidden rounded-2xl bg-gray-100 group" style={{ aspectRatio: '3/4' }}>
            <Image src={PHOTOS[1]} alt="Joan Joy" fill className="object-cover object-top group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="col-span-3 flex flex-col gap-2">
            <div className="flex-1 relative overflow-hidden rounded-xl bg-gray-100 group">
              <Image src={PHOTOS[2]} alt="Joan Joy" fill className="object-cover object-top group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="flex-1 relative overflow-hidden rounded-xl bg-gray-100 group">
              <Image src={PHOTOS[3]} alt="Joan Joy" fill className="object-cover object-center group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>

        {/* Row 2: 3 equal photos */}
        <div className="grid grid-cols-3 gap-2 mb-2">
          {PHOTOS.slice(4, 7).map((photo, i) => (
            <div key={i} className="relative overflow-hidden rounded-xl bg-gray-100 group" style={{ aspectRatio: '4/3' }}>
              <Image src={photo} alt={`Joan Joy ${i + 5}`} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-700" />
            </div>
          ))}
        </div>

        {/* Row 3: full-width cinematic strip */}
        <div className="relative overflow-hidden rounded-2xl bg-gray-100 group" style={{ aspectRatio: '21/6' }}>
          <Image src={PHOTOS[7]} alt="Joan Joy" fill className="object-cover object-center group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30" />
        </div>
      </section>

      {/* ── STORY CONTINUED ── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-8 text-gray-700 text-lg leading-relaxed">

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-500 mb-4">The Village</p>
          <p>My family — Father, Mother, sisters, and brother — stood firmly beside me. They have been my strongest pillar. From attending all my events till late hours, cheering their hearts out, endless calls, wiping my tears and smiling at every crown I got. I truly owe them this one.</p>
          <p className="mt-6">My close friends and extended family came together in extraordinary ways to help raise funds for my journey to Bangkok, Thailand, where I would represent Africa on the international stage — an act of love and belief I will carry with me forever.</p>
          <p className="mt-6">My manager, Sure Morema, remained a steadfast source of guidance and encouragement throughout the process, supporting me through every breakdown, every difficult day, and every moment of uncertainty. My friends Mitchell & Chantell were another constant source of strength, reminding me who I was whenever pressure threatened to make me forget.</p>
        </div>

        <div className="my-10 py-8 border-t border-b border-gray-100">
          <p className="text-2xl font-semibold text-gray-900 italic leading-snug">
            "Winning Miss Independent International Africa was not simply a personal victory. It was the culmination of years of discipline. Of prayers whispered in private. Of tears shed behind closed doors."
          </p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-500 mb-4">The Gratitude</p>
          <p>I am equally grateful to every person and organisation that poured into my preparation: MG Kenya who designed my breathtaking national costume; Delight School of Fashion who curated my wardrobe for the entire international trip; DnD Couture for the amazing Kitenge fits; MJ Ateliers who designed my dinner gown; and Grandeur Modeling Hub, led by Darius Abala, who refined my catwalk, poise, and stage presence.</p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-500 mb-4">To Every Young Girl</p>
          <p>Do not despise small beginnings. My journey started in a university hall, learning my first catwalk. You do not need perfect circumstances to begin — you only need the courage to start, the discipline to continue, and the faith to keep going when the road gets hard.</p>
          <p className="mt-6">From the halls of Kenyatta University to the international stage, my story is living proof that sometimes the most extraordinary journeys begin in the most ordinary places. And for me, this crown is not the destination. It is only the beginning.</p>
        </div>

      </section>

      {/* ── VIDEO ──
      <section className="bg-gray-950 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-px bg-red-600" />
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-gray-400">Watch</p>
          </div>
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 flex flex-col items-center justify-center gap-4">
            <div className="w-20 h-20 rounded-full ]bg-red-600/20 border border-red-600/30 flex items-center justify-center">
              <Play size={32} className="text-red-500 ml-1" />
            </div>
            <p className="text-gray-500 text-sm tracking-wide uppercase">Video coming soon</p>
          </div>
        </div>
      </section> */}

      {/* ── CLOSING ── */}
      {/* <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-600/10 mb-6">
            <Crown size={28} className="text-red-600" />
          </div>
          <h2 className="text-4xl font-black text-gray-900 tracking-tighter mb-2">Joan Joy</h2>
          <p className="text-gray-500 text-sm uppercase tracking-widest mb-6">Miss Independent International Africa</p>
          <div className="w-12 h-0.5 bg-red-600 rounded mx-auto mb-8" />
          <p className="text-gray-500 text-sm">
            A proud member of <span className="font-bold text-gray-900">Consent_KE</span>
          </p>
        </div>
      </section> */}

    </main>
  );
}