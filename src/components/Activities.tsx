import Image from 'next/image';
import { Mountain, Heart, MapPin, Calendar, CheckCircle } from 'lucide-react';

const Activities = () => {
  return (
    <section className="bg-white overflow-hidden">
      
      {/* ==========================================
          1. HIKING & ADVENTURE SECTION (id="hikes")
      ========================================== */}
      <div id="hikes" className="scroll-mt-24 py-24 bg-brand-gray relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* IMAGE SIDE (Left) */}
            <div className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl group">
              <Image 
                src="/hike.jpg" 
                alt="The Consent Hiking Crew" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-6 py-4 rounded-xl shadow-lg border-l-4 border-brand-green">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-brand-green rounded-full text-white">
                    <Mountain size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Next Adventure</p>
                    <p className="text-lg font-extrabold text-brand-black">Aberdares / Longonot</p>
                  </div>
                </div>
              </div>
            </div>

            {/* TEXT SIDE (Right) */}
            <div>
              <span className="text-brand-green font-bold tracking-widest uppercase text-sm">
                Physical Fitness & Bonding
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-brand-black mt-3 mb-6">
                Conquering Heights <br/>
                <span className="text-brand-green">Together.</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Politics can be draining. That’s why we take breaks to reconnect with nature. 
                Our hikes are legendary—famous for the "Sea of Humanity" that turns up. 
                It is a chance to network, exercise, and clear your mind.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-brand-green flex-shrink-0" />
                  <span className="text-gray-700">Subsidized transport for students</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-brand-green flex-shrink-0" />
                  <span className="text-gray-700">Networking with Alumni</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-brand-green flex-shrink-0" />
                  <span className="text-gray-700">Professional Photography</span>
                </li>
              </ul>

              <button className="bg-brand-black text-white px-8 py-3 rounded-lg font-bold hover:bg-brand-green transition shadow-lg">
                Join Next Hike
              </button>
            </div>

          </div>
        </div>
      </div>


      {/* ==========================================
          2. COMMUNITY OUTREACH SECTION (id="csr")
      ========================================== */}
      <div id="csr" className="scroll-mt-24 py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Note: We reverse the order here for visual balance (Zig-Zag) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* TEXT SIDE (Left this time) */}
            <div className="order-2 lg:order-1">
              <span className="text-brand-red font-bold tracking-widest uppercase text-sm">
                Social Responsibility
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-brand-black mt-3 mb-6">
                Touching Lives, <br/>
                <span className="text-brand-red">One Heart at a Time.</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe that leadership is about service. The Consent_KE organizes regular visits 
                to children's homes and rescue centers. We donate food, clothes, and mentorship 
                to the next generation.
              </p>

              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <div className="flex items-start gap-4">
                  <Heart className="text-brand-red mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-brand-black text-lg">Impact Driven</h4>
                    <p className="text-gray-600">
                      "We don't just give donations; we give our time. We cook, clean, and play with the children."
                    </p>
                  </div>
                </div>
              </div>

              <button className="border-2 border-brand-red text-brand-red px-8 py-3 rounded-lg font-bold hover:bg-brand-red hover:text-white transition shadow-sm">
                Support Our CSR
              </button>
            </div>

            {/* IMAGE SIDE (Right this time) */}
            <div className="order-1 lg:order-2 relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl group">
              <Image 
                src="/csr.jpg" 
                alt="Community Outreach Event" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay Badge */}
              <div className="absolute top-6 right-6 bg-brand-red text-white px-6 py-2 rounded-full shadow-lg font-bold flex items-center gap-2">
                 <Heart size={18} fill="white" />
                 Humanity First
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default Activities;