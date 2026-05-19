import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star, ShoppingBag, Check } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/data';

const Marketplace = () => {
  return (
    <section id="marketplace" className="py-24 lg:py-32 bg-white overflow-hidden border-t border-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER SECTION: Bold & Minimal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-24">
          <div className="lg:col-span-7">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-black leading-[0.85] uppercase italic">
              STUDENT <br />
              <span className="text-red-600">MARKET.</span>
            </h1>
          </div>
          <div className="lg:col-span-5">
            <p className="text-xl text-gray-500 font-light leading-relaxed">
              We believe in economic empowerment. A platform built to spotlight the hustles and talents of the Consent_KE family.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* LEFT: Featured Spotlight */}
          <div className="group">
            <div className="flex items-center justify-between mb-6">
               <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.3em] text-red-600">
                  <Star size={14} fill="currentColor" />
                  Featured Hustle
               </div>
               <span className="text-gray-300 font-bold italic">/ 01</span>
            </div>
            
            <div className="relative aspect-square md:aspect-[4/5] overflow-hidden bg-gray-100 rounded-sm mb-8">
              <Image 
                src="/pappsy.jpeg" 
                alt="Featured Student Business"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h3 className="text-3xl font-black tracking-tight text-black mb-1">Delicious Bakes KU</h3>
                <p className="text-gray-500 font-medium italic">Sharon Mwende — Member Since 2021</p>
              </div>
              <Link 
                href={SITE_CONFIG.whatsappLink}
                target="_blank"
                className="inline-flex items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-red-600 transition-all"
              >
                Place Order <ShoppingBag size={16} />
              </Link>
            </div>
          </div>

          {/* RIGHT: The Pitch & List */}
          <div className="lg:pt-20">
            <div className="max-w-md">
              <h3 className="text-4xl font-black tracking-tighter uppercase mb-8">
                Got a <span className="text-red-600 italic">Hustle?</span>
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                Consent_KE provides you with an exclusive audience of over 1,000 members. Market your skills, sell your products, and grow your brand within a trusted network.
              </p>

              <div className="space-y-0 border-t border-gray-100 divide-y divide-gray-100 mb-12">
                {[
                  "Free visibility on all official channels",
                  "Direct access to student & alumni buyers",
                  "Business mentorship & networking",
                  "Verified 'Consent Member' Badge"
                ].map((item, i) => (
                  <div key={i} className="py-5 flex items-center gap-4 group">
                    <Check className="text-red-600 transition-transform group-hover:scale-125" size={18} />
                    <span className="text-gray-900 font-bold uppercase text-xs tracking-widest">{item}</span>
                  </div>
                ))}
              </div>

              <Link 
                href={SITE_CONFIG.whatsappLink}
                target="_blank"
                className="group inline-flex items-center gap-4 text-sm font-black uppercase tracking-[0.2em] text-black hover:text-red-600 transition-all"
              >
                List your business now
                <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-red-600 transition-all">
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Marketplace;