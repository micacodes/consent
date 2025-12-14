import Image from 'next/image';
import { Mountain, Map, Users, CheckCircle } from 'lucide-react';

const Hiking = () => {
  return (
    <section id="hikes" className="scroll-mt-20 py-24 bg-brand-gray relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: Image */}
          <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl group">
            <Image 
              src="/hike.jpeg" 
              alt="The Consent Hiking Crew" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Floating Badge */}
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur px-6 py-4 rounded-xl shadow-lg border-l-4 border-brand-green">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Signature Event</p>
              <p className="text-xl font-extrabold text-brand-black">The Sea of Humanity</p>
            </div>
          </div>

          {/* RIGHT: Content */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="p-2 bg-brand-green/10 text-brand-green rounded-lg">
                <Mountain size={20} />
              </span>
              <span className="text-brand-green font-bold tracking-widest uppercase text-sm">
                Adventure & Fitness
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-black mb-6">
              Politically Fit & <br/>
              <span className="text-brand-green">Physically Strong.</span>
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We take a break from national policy and campus politics to conquer mountains. 
              Our hikes are famous for the massive turnout—the <strong>"Sea of Humanity"</strong>. 
              It is the perfect environment to network with student leaders and alumni while keeping fit.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <Users className="text-brand-green mt-1 shrink-0" size={20} />
                <p className="text-sm text-gray-700 font-medium">Networking with Alumni</p>
              </div>
              <div className="flex items-start gap-3">
                <Map className="text-brand-green mt-1 shrink-0" size={20} />
                <p className="text-sm text-gray-700 font-medium">Discovering Kenya</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-brand-green mt-1 shrink-0" size={20} />
                <p className="text-sm text-gray-700 font-medium">Mental Wellness</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-brand-green mt-1 shrink-0" size={20} />
                <p className="text-sm text-gray-700 font-medium">Subsidized Student Rates</p>
              </div>
            </div>

            <button className="bg-brand-black text-white px-8 py-3 rounded-lg font-bold hover:bg-brand-green transition shadow-lg transform active:scale-95">
              Join Next Hike
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hiking;