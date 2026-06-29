"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Heart, Handshake, Smartphone, ArrowRight, MapPin, Users, Calendar, Quote, CheckCircle2 } from 'lucide-react';

const CommunityOutreach = () => {
  const [activeChapter, setActiveChapter] = useState(0);

  const storyChapters = [
    {
      title: "The Arrival & Preparation",
      description: "Setting foot in Muthiga Hope Center, Gatundu. Our team arrived with supplies, energy, and a clear mission: to leave this center better than we found it.",
      images: [1, 2, 3, 4, 5, 6, 7, 8],
      icon: <MapPin className="text-red-600" size={20} />
    },
    {
      title: "Mentorship & Engagement",
      description: "Leadership is taught by example. We spent hours talking with the youth, sharing career insights, and listening to their dreams for the future.",
      images: [9, 10, 11, 12, 13, 14, 15, 16],
      icon: <Users className="text-red-600" size={20} />
    },
    {
      title: "Distribution of Essentials",
      description: "Thanks to our contributors, we were able to provide dry foods, stationery, and personal hygiene kits to over 50 households served by Muthiga Hope Center.",
      images: [17, 18, 19, 20, 21, 22, 23, 24, 25],
      icon: <Heart className="text-red-600" size={20} />
    },
    {
      title: "Lasting Bonds",
      description: "The outreach doesn't end when we drive away. We've established a mentorship cycle to ensure these children have a point of contact for guidance.",
      images: [26, 27, 28, 29, 30, 31, 32, 33],
      icon: <Handshake className="text-red-600" size={20} />
    }
  ];

  return (
    <section id="csr" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24">
          <div className="lg:col-span-5">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-black leading-[0.85] uppercase italic">
              Impact <br />
              <span className="text-red-600 text-5xl md:text-7xl underline decoration-4">Report.</span>
            </h1>
            <div className="mt-8 flex items-center gap-4">
                <div className="px-4 py-2 bg-black text-white text-xs font-bold uppercase tracking-widest">Gatundu Hope Center</div>
                <div className="flex items-center gap-2 text-gray-400 font-bold text-xs uppercase tracking-widest">
                    <Calendar size={14} /> 20th June 2026
                </div>
            </div>
          </div>
          <div className="lg:col-span-7 pt-4 border-l-2 border-gray-900 lg:pl-12">
            <p className="text-2xl md:text-3xl text-gray-900 font-light leading-tight mb-8">
              At Muthiga Hope Center, we didn't just donate; we <span className="font-bold italic">invested</span>. 
              Our visit was centered on the belief that dignity is a human right.
            </p>
            <div className="grid grid-cols-2 gap-8">
                <div>
                    <h4 className="font-black text-red-600 text-xl uppercase tracking-tighter mb-2">The Mission</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">To provide immediate relief through food and supplies while building a bridge for long-term academic mentorship at Muthiga Hope Center.</p>
                </div>
                <div>
                    <h4 className="font-black text-red-600 text-xl uppercase tracking-tighter mb-2">The Outcome</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">Direct support to local families and a commitment to renovate the Muthiga Hope Center learning hall.</p>
                </div>
            </div>
          </div>
        </div>

        {/* STORY CHAPTERS WITH MASONRY PHOTOS */}
        <div className="space-y-32">
          {storyChapters.map((chapter, idx) => (
            <div key={idx} className="group">

              {/* Chapter Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-gray-100 pb-8">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    {chapter.icon}
                    <span className="text-xs font-black uppercase tracking-[0.3em] text-red-600">Phase 0{idx + 1}</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4">{chapter.title}</h2>
                  <p className="text-lg text-gray-500 italic leading-relaxed">"{chapter.description}"</p>
                </div>
                <div className="hidden md:block">
                  <span className="text-8xl font-black text-gray-50 opacity-10 group-hover:opacity-100 transition-opacity">0{idx + 1}</span>
                </div>
              </div>

              {/* Masonry Photo Grid */}
              <div
                style={{
                  columnCount: 3,
                  columnGap: '1rem',
                }}
                className="masonry-grid"
              >
                {chapter.images.map((imgNum, i) => (
                  <div
                    key={i}
                    style={{ breakInside: 'avoid', marginBottom: '1rem' }}
                    className="relative overflow-hidden rounded-sm bg-gray-100 group/img"
                  >
                    <Image
                      src={`/Muthiga (${imgNum}).jpg`}
                      alt={`${chapter.title} — moment ${i + 1}`}
                      width={600}
                      height={i % 3 === 0 ? 800 : i % 3 === 1 ? 500 : 650}
                      className="w-full object-cover transition-transform duration-500 group-hover/img:scale-[1.02]"
                      style={{ display: 'block' }}
                    />
                    {/* Overlay label on first image of each chapter */}
                    {i === 0 && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none">
                        <div className="absolute bottom-4 left-4 text-white">
                          <p className="text-[10px] font-bold uppercase tracking-widest opacity-70">Focus Area</p>
                          <p className="text-base font-bold uppercase italic">Muthiga Hope Center</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* FINAL STATS & QUOTE */}
        <div className="my-32 grid grid-cols-1 lg:grid-cols-3 gap-12 bg-black text-white p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
                <Quote size={120} />
            </div>
            <div className="lg:col-span-2">
                <h3 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-8 leading-none">
                    "We do not just leave <br /> bags of flour; we leave <br /> <span className="text-red-600">seeds of hope."</span>
                </h3>
            
            </div>
            <div className="flex flex-col justify-end">
                <p className="text-gray-400 italic text-sm leading-relaxed mb-6">
                    Every shilling donated to the Gatundu Outreach was accounted for and distributed directly to the families and the Muthiga Hope Center committee.
                </p>
                <div className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest">
                    <CheckCircle2 className="text-green-500" size={16} /> Verified by Consent_KE
                </div>
            </div>
        </div>

        {/* CONTRIBUTION BOX */}
        <div className="max-w-4xl mx-auto bg-gray-50 p-10 md:p-16 border border-gray-100 rounded-sm">
            <div className="text-center mb-12">
                <h3 className="text-4xl font-black tracking-tighter uppercase mb-4">Fuel the Next Visit</h3>
                <p className="text-gray-600 italic">Our next outreach to Muthiga Hope Center is scheduled for March 2025. Be part of the story.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
               <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center text-white shrink-0">
                        <Smartphone size={28} />
                    </div>
                    <div>
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block">M-PESA Buy Goods Till</span>
                        <h4 className="text-4xl font-black tracking-tighter text-black leading-none">3148994</h4>
                    </div>
                  </div>
                  <div className="space-y-2 text-xs text-gray-500 font-bold uppercase tracking-wider border-l-0 md:border-l border-gray-100 pl-0 md:pl-8">
                     <p className="flex items-center gap-2">1. Open M-PESA Menu</p>
                     <p className="flex items-center gap-2">2. Buy Goods & Services</p>
                     <p className="flex items-center gap-2 text-red-600 font-black">3. Till: 3148994</p>
                  </div>
               </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default CommunityOutreach;