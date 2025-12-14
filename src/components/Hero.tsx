import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center overflow-hidden">
      
      {/* 1. BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/banner.png"       
          alt="The Consent Group"
          fill
          priority              
          className="object-cover object-center" 
        />
        
        {/* IMPROVED GRADIENT: 
            Dark on the LEFT (90%), fading to transparent on the RIGHT.
            This ensures text is readable on the left, but the image is clear on the right.
        */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/70 to-transparent"></div>
        
        {/* Mobile Gradient: On small screens, make it darker everywhere so text is safe */}
        <div className="absolute inset-0 bg-black/40 md:hidden"></div>
      </div>

      {/* 2. TEXT CONTENT (Left Aligned) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-2xl">
          
          {/* Top Tagline */}
          <div className="inline-flex items-center gap-2 mb-6 border-l-4 border-brand-red pl-4">
            <span className="text-brand-red font-bold tracking-widest uppercase text-sm">
              Est. 2019
            </span>
            <span className="text-gray-400 text-sm">|</span>
            <span className="text-gray-300 text-sm uppercase tracking-wide">
              Youth-Led Political Forum
            </span>
          </div>

          {/* Main Title - Stacked for impact */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-6 drop-shadow-lg">
            THE <br />
            CONSENT<span className="text-brand-red">_KE</span>
          </h1>

          {/* Slogan */}
          <p className="text-xl md:text-2xl text-gray-200 font-light mb-8 max-w-lg leading-relaxed">
            {SITE_CONFIG.subtitle}
          </p>

          {/* Buttons - Left Aligned */}
          <div className="flex flex-wrap gap-4">
            <Link 
              href={SITE_CONFIG.whatsappLink} 
              target="_blank"
              className="bg-brand-red text-white px-8 py-4 rounded-lg font-bold text-lg transition hover:bg-red-700 hover:shadow-lg hover:shadow-brand-red/40 flex items-center gap-2"
            >
              Join The Movement <ArrowRight size={20} />
            </Link>
            
            <Link 
              href="#about"
              className="group flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-lg text-white border border-white/30 hover:bg-white hover:text-brand-black transition"
            >
              Learn More
            </Link>
          </div>

          {/* Stats / Social Proof (Optional - Adds credibility at the bottom) */}
          <div className="mt-12 flex items-center gap-8 border-t border-white/10 pt-6">
            <div>
              <p className="text-3xl font-bold text-white">1000+</p>
              <p className="text-sm text-gray-400">Active Members</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">2019</p>
              <p className="text-sm text-gray-400">Year Founded</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;