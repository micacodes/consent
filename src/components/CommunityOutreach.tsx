import Image from 'next/image';
import { Heart, Handshake, Smartphone, ArrowRight } from 'lucide-react';

const CommunityOutreach = () => {
  return (
    <section id="csr" className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* TOP SECTION: Header & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32">
          <div className="lg:col-span-5">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-black leading-[0.85] uppercase italic">
              Giving <br />
              <span className="text-red-600">Back.</span>
            </h1>
          </div>
          <div className="lg:col-span-7 pt-4 border-l border-gray-100 lg:pl-12">
            <div className="flex items-center gap-3 mb-6">
                <Heart className="text-red-600" size={24} />
                <span className="text-xs font-black uppercase tracking-[0.3em] text-gray-400">Service to Humanity</span>
            </div>
            <p className="text-2xl md:text-3xl text-gray-900 font-light leading-snug mb-8">
              Leadership is meaningless if it does not uplift the vulnerable. 
              At Consent_KE, we don't just send money; we show up.
            </p>
            <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">
              We organize regular visits to children's homes and rescue centers. 
              From cooking and cleaning to mentoring the next generation on education and life skills, 
              our members dedicate their most valuable asset—their time.
            </p>
          </div>
        </div>

        {/* IMAGE & CONTRIBUTION BOX */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* LEFT: The Impact Image */}
          <div className="relative min-h-[500px] rounded-sm overflow-hidden group">
            <Image 
              src="/DSC_0769_1.jpg" 
              alt="Community Outreach Event" 
              fill 
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            <div className="absolute bottom-8 left-8 bg-white px-6 py-3 rounded-sm shadow-xl flex items-center gap-3">
               <Handshake size={20} className="text-red-600" />
               <span className="text-xs font-black uppercase tracking-widest text-black">Mentor • Feed • Uplift</span>
            </div>
          </div>

          {/* RIGHT: The Contribution Card (Replaces the Button) */}
          <div className="bg-gray-50 p-10 md:p-16 flex flex-col justify-center border border-gray-100 rounded-sm">
            <h3 className="text-3xl font-black tracking-tighter uppercase mb-6">
              Support Our <br /> Mission
            </h3>
            <p className="text-gray-600 mb-10 text-lg leading-relaxed italic">
              "Your contribution directly funds food supplies, stationery, and essential amenities for our upcoming outreach programs."
            </p>

            {/* M-PESA TILL CARD */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
               <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white">
                    <Smartphone size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block">M-PESA Buy Goods Till</span>
                    <h4 className="text-3xl font-black tracking-tighter text-black leading-none">3148994</h4>
                  </div>
               </div>
               
               <div className="space-y-3 text-sm text-gray-500 border-t border-gray-50 pt-6">
                  <p className="flex items-center gap-2">
                     <ArrowRight size={14} className="text-red-600" /> 
                     Open M-PESA Menu
                  </p>
                  <p className="flex items-center gap-2">
                     <ArrowRight size={14} className="text-red-600" /> 
                     Select Buy Goods & Services
                  </p>
                  <p className="flex items-center gap-2 font-bold text-gray-900">
                     <ArrowRight size={14} className="text-red-600" /> 
                     Enter Till Number: 3148994
                  </p>
               </div>
            </div>

            <p className="mt-8 text-xs font-bold text-gray-400 uppercase tracking-widest text-center italic">
              Verified by Consent_KE Finance Department
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CommunityOutreach;