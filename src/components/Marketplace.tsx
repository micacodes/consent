import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star, ShoppingBag, Check, Shirt, GraduationCap } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/data';

/* ─────────────────────────────────────────────
   Small reusable photo-strip component
───────────────────────────────────────────── */
const PhotoStrip = ({ images }) => (
  <div className="grid grid-cols-3 gap-1.5 mt-2">
    {images.map(({ src, alt }, i) => (
      <div key={i} className="relative aspect-square overflow-hidden bg-gray-100">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>
    ))}
  </div>
);

/* ─────────────────────────────────────────────
   Business card used for Betty's two hustles
───────────────────────────────────────────── */
const BusinessCard = ({ number, icon: Icon, title, tagline, accentColor }) => (
  <div className="flex items-start gap-5 py-6 border-b border-gray-100 last:border-0">
    <div
      className="w-10 h-10 rounded-sm flex items-center justify-center shrink-0 mt-0.5"
      style={{ backgroundColor: accentColor + '12', color: accentColor }}
    >
      <Icon size={17} />
    </div>
    <div className="flex-1">
      <p className="text-[9px] font-black uppercase tracking-[0.35em] text-gray-300 mb-1">{number}</p>
      <h4 className="text-sm font-black uppercase tracking-tight text-black leading-tight mb-1">{title}</h4>
      <p className="text-sm text-gray-500 leading-relaxed">{tagline}</p>
    </div>
  </div>
);

/* ─────────────────────────────────────────────
   Pull-quote block
───────────────────────────────────────────── */
const PullQuote = ({ children }) => (
  <blockquote className="my-8 relative pl-6">
    <span
      className="absolute left-0 top-0 bottom-0 w-[2px] bg-red-600"
      aria-hidden="true"
    />
    <p className="text-xl font-bold italic text-black leading-snug tracking-tight">{children}</p>
  </blockquote>
);

/* ─────────────────────────────────────────────
   Section eyebrow label
───────────────────────────────────────────── */
const Eyebrow = ({ label, counter }) => (
  <div className="flex items-center justify-between mb-8">
    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-red-600">
      <Star size={11} fill="currentColor" />
      {label}
    </div>
    <span className="text-gray-200 font-black text-sm italic tabular-nums">{counter}</span>
  </div>
);

/* ─────────────────────────────────────────────
   Arrow link (ghost + arrow circle)
───────────────────────────────────────────── */
const ArrowLink = ({ href, children }) => (
  <Link
    href={href}
    target="_blank"
    className="group inline-flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.22em] text-black hover:text-red-600 transition-colors duration-200"
  >
    {children}
    <span className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-red-600 group-hover:bg-red-600 transition-all duration-200">
      <ArrowRight size={17} className="group-hover:translate-x-0.5 transition-transform duration-200 group-hover:text-white" />
    </span>
  </Link>
);

const Marketplace = () => {
  return (
    <section
      id="marketplace"
      className="py-24 lg:py-32 bg-white overflow-hidden border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* ── HEADER ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-20 pb-16 border-b border-gray-100">
          <div className="lg:col-span-7">
            {/* Label pill */}
            <span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-6">
              <span className="w-4 h-px bg-gray-300 inline-block" />
              Consent_KE
            </span>
            <h1 className="text-[clamp(3.5rem,10vw,7rem)] font-black tracking-[-0.04em] text-black leading-[0.88] uppercase italic">
              STUDENT <br />
              <span className="text-red-600">MARKET.</span>
            </h1>
          </div>
          <div className="lg:col-span-5 lg:pb-2">
            <p className="text-lg text-gray-500 font-light leading-relaxed max-w-sm">
              We believe in economic empowerment — a platform built to spotlight the hustles and talents of the Consent_KE family.
            </p>
          </div>
        </div>

        {/* ══════════════════════════════════════════
            FEATURE 01 — SHARON / DELICIOUS BAKES KU
        ══════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start mb-28 pb-28 border-b border-gray-100">

          {/* LEFT: Hero photo + strip */}
          <div className="group">
            <Eyebrow label="Featured Hustle" counter="/ 01" />

            {/* Hero image with caption overlay */}
            <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
              <Image
                src="/pappsy.jpeg"
                alt="Sharon Mwende — Delicious Bakes KU"
                fill
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
              />
              {/* Gradient footer inside image */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div>
                  <p className="text-white font-black text-lg tracking-tight leading-tight">Delicious Bakes KU</p>
                  <p className="text-white/60 text-xs font-medium italic mt-0.5">Sharon Mwende · Member since 2021</p>
                </div>
                <Link
                  href={SITE_CONFIG.whatsappLink}
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 text-[10px] font-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all shrink-0"
                >
                  Order <ShoppingBag size={12} />
                </Link>
              </div>
            </div>

            <PhotoStrip
              images={[
                { src: '/papsy.jpeg',  alt: 'Delicious Bakes KU — showcase' },
                { src: '/papsy1.jpeg', alt: 'Delicious Bakes KU — bakes close-up' },
                { src: '/papsy2.jpeg', alt: 'Delicious Bakes KU — behind the scenes' },
              ]}
            />
          </div>

          {/* RIGHT: Story + pitch */}
          <div className="lg:pt-16">
            <div className="max-w-md">
              <h3 className="text-[clamp(2rem,4vw,2.75rem)] font-black tracking-[-0.03em] uppercase leading-[0.9] mb-3">
                Made with <br />
                <span className="text-red-600 italic">Flour & Fire.</span>
              </h3>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-300 mb-10">Her Story</p>

              <p className="text-gray-600 leading-[1.8] text-[0.9375rem] mb-5">
                What started as a student trying to feed a sweet tooth on a budget became one of KU's most beloved
                home-grown bakeries. Sharon Mwende didn't walk into a kitchen with a plan — she walked in with
                curiosity, a handful of recipes, and the stubborn belief that good food deserves to be shared.
              </p>

              <PullQuote>"Every order is a little act of love. I don't just bake — I make moments."</PullQuote>

              <p className="text-gray-600 leading-[1.8] text-[0.9375rem] mb-5">
                Since joining the Consent_KE family in 2021, Sharon has turned late-night baking sessions into a
                full-blown brand known for its pillowy cakes, crispy mandazis, and custom celebration orders that
                sell out before the ink dries on the post. Her style is simple: no shortcuts, no compromises —
                just honest ingredients and the kind of warmth you can taste.
              </p>

              <p className="text-gray-600 leading-[1.8] text-[0.9375rem] mb-12">
                Whether it's a birthday box for a hostel neighbour or a bulk order for an event, Sharon shows up —
                on time, beautifully packaged, and always worth every shilling.
              </p>

              <ArrowLink href={SITE_CONFIG.whatsappLink}>Order from Sharon</ArrowLink>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════
            FEATURE 02 — BETTY
        ══════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start mb-28 pb-28 border-b border-gray-100">

          {/* LEFT: Story + businesses */}
          <div>
            <Eyebrow label="Featured Hustle" counter="/ 02" />

            <h3 className="text-[clamp(2rem,4vw,2.75rem)] font-black tracking-[-0.03em] uppercase leading-[0.9] mb-3">
              One Vision, <br />
              <span className="text-red-600 italic">Two Empires.</span>
            </h3>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-300 mb-10">Betty's Story</p>

            <p className="text-gray-600 leading-[1.8] text-[0.9375rem] mb-5">
              Betty's entrepreneurial journey began with one simple, powerful decision — to start. Not when conditions
              were perfect. Not when she had everything figured out. Just start. And from that single act of courage,
              two businesses were born.
            </p>

            <PullQuote>"Young people should not fear starting small. Start where you are, stay disciplined, and trust the process."</PullQuote>

            <p className="text-gray-600 leading-[1.8] text-[0.9375rem] mb-5">
              Through <strong className="text-black font-black">Betty's Touch Collection</strong>, she stepped into the fashion
              world with jerseys and handbags, building her brand one consistent sale at a time. Jersey by jersey,
              customer by customer — she's learning that growth doesn't announce itself in grand moments, but in the
              quiet accumulation of every small win.
            </p>

            <p className="text-gray-600 leading-[1.8] text-[0.9375rem] mb-5">
              Simultaneously, she co-directs the <strong className="text-black font-black">Smart Study Tuition Centre</strong> —
              a homeschooling service spanning Thika Road, Kitengela, Eastleigh, and Parklands. Shaping young minds
              while sharpening her own, Betty has found that education and entrepreneurship aren't competing ambitions.
              They sharpen each other.
            </p>

            <p className="text-gray-600 leading-[1.8] text-[0.9375rem] mb-10">
              Balancing both worlds hasn't been easy, and she'll be the first to tell you so. But the challenges — slow
              seasons, financial juggling, delivery logistics — have built something money can't buy: character, clarity,
              and conviction.
            </p>

            {/* Two business cards */}
            <div className="border-t border-gray-100 mb-10">
              <BusinessCard
                number="01"
                icon={Shirt}
                title="Betty's Touch Collection"
                tagline="Jerseys & handbags — style that moves with you"
                accentColor="#DC2626"
              />
              <BusinessCard
                number="02"
                icon={GraduationCap}
                title="Smart Study Tuition Centre"
                tagline="Homeschooling services across Nairobi — Thika Rd, Kitengela, Eastleigh & Parklands"
                accentColor="#111111"
              />
            </div>

            <ArrowLink href={SITE_CONFIG.whatsappLink}>Connect with Betty</ArrowLink>
          </div>

          {/* RIGHT: Photos */}
          <div className="lg:pt-16 group">
            <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
              <Image
                src="/Betty.jpeg"
                alt="Betty — Entrepreneur & Director"
                fill
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
              />
            </div>

            <div className="grid grid-cols-2 gap-1.5 mt-1.5">
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <Image
                  src="/Betty1.jpeg"
                  alt="Betty's Touch Collection"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Name plate */}
              <div className="bg-black p-5 flex flex-col justify-between aspect-square">
                <span className="text-red-600 text-[9px] font-black uppercase tracking-[0.3em]">Member</span>
                <div>
                  <p className="text-white font-black text-xl tracking-tight leading-none">Betty</p>
                  <p className="text-gray-500 text-xs font-medium mt-1.5 leading-snug">Founder & Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════
            LIST YOUR HUSTLE CTA
        ══════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
          <div>
            {/* Mini eyebrow */}
            <span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-gray-300 mb-6">
              <span className="w-4 h-px bg-gray-200 inline-block" />
              Join the Market
            </span>

            <h3 className="text-[clamp(2.5rem,5vw,4rem)] font-black tracking-[-0.04em] uppercase leading-[0.88] mb-8">
              Got a <span className="text-red-600 italic">Hustle?</span>
            </h3>
            <p className="text-lg text-gray-500 leading-relaxed mb-10 max-w-sm">
              Consent_KE gives you an exclusive audience of over 1,000 members. Market your skills,
              sell your products, and grow your brand within a trusted network.
            </p>

            <Link
              href={SITE_CONFIG.whatsappLink}
              target="_blank"
              className="inline-flex items-center justify-center gap-3 bg-black text-white px-8 py-4 text-[11px] font-black uppercase tracking-widest hover:bg-red-600 transition-colors duration-200"
            >
              List your business <ArrowRight size={15} />
            </Link>
          </div>

          <div className="lg:pt-4">
            {[
              "Free visibility on all official channels",
              "Direct access to student & alumni buyers",
              "Business mentorship & networking",
              "Verified 'Consent Member' badge",
            ].map((item, i) => (
              <div key={i} className="py-5 border-b border-gray-100 flex items-center gap-5 group first:border-t">
                <span className="w-5 h-5 rounded-full bg-red-600/10 flex items-center justify-center shrink-0 group-hover:bg-red-600 transition-colors duration-200">
                  <Check className="text-red-600 group-hover:text-white transition-colors duration-200" size={11} strokeWidth={3} />
                </span>
                <span className="text-gray-800 font-bold text-[11px] uppercase tracking-[0.18em] leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Marketplace;