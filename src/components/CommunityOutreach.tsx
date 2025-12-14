import Image from 'next/image';
import { Heart, Gift, Handshake } from 'lucide-react';

const CommunityOutreach = () => {
  return (
    <section id="csr" className="scroll-mt-20 py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: Content (Swapped for Zig-Zag effect) */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="p-2 bg-brand-red/10 text-brand-red rounded-lg">
                <Heart size={20} />
              </span>
              <span className="text-brand-red font-bold tracking-widest uppercase text-sm">
                Community Outreach
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-black mb-6">
              Service to <br/>
              <span className="text-brand-red">Humanity.</span>
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Leadership is meaningless if it does not uplift the vulnerable. 
              The Consent_KE organizes regular visits to children's homes and rescue centers. 
              We don't just send money; we show up, cook, clean, and mentor the next generation.
            </p>

            <div className="bg-red-50 border border-red-100 p-6 rounded-xl mb-8">
              <h4 className="font-bold text-brand-black mb-2 flex items-center gap-2">
                <Gift className="text-brand-red" size={18}/> 
                Our Impact
              </h4>
              <p className="text-gray-700 text-sm">
                From donating foodstuffs to offering mentorship on education and life skills, 
                our members dedicate their time to making a tangible difference in society.
              </p>
            </div>

            <button className="border-2 border-brand-red text-brand-red px-8 py-3 rounded-lg font-bold hover:bg-brand-red hover:text-white transition shadow-sm transform active:scale-95">
              Support Our Mission
            </button>
          </div>

          {/* RIGHT: Image */}
          <div className="order-1 lg:order-2 relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl group">
            <Image 
              src="/DSC_0769_1.jpg" 
              alt="Community Outreach Event" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute top-6 right-6 bg-brand-red text-white px-5 py-2 rounded-full shadow-lg font-bold flex items-center gap-2">
               <Handshake size={18} />
               Giving Back
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CommunityOutreach;