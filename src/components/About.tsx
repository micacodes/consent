import { SITE_CONFIG } from '@/lib/data';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: The "Identity" (Green/Red Border Box) */}
          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-full border-4 border-brand-red rounded-xl transform translate-x-4 translate-y-4"></div>
            <div className="relative bg-brand-gray p-8 rounded-xl border-l-8 border-brand-green shadow-lg">
              <h3 className="text-2xl font-bold text-brand-black mb-4">OUR IDENTITY</h3>
              <p className="text-xl font-medium text-brand-green italic leading-relaxed">
                "Consent is not just a word! It’s our principle. It stands for informed dialogue, mutual respect and collective agreement to build a stronger community."
              </p>
            </div>
          </div>

          {/* Right Side: The History/Description */}
          <div>
            <div className="inline-block px-3 py-1 bg-brand-red/10 text-brand-red font-bold rounded-full text-sm mb-4">
              WHO WE ARE
            </div>
            <h2 className="text-4xl font-extrabold text-brand-black mb-6">
              A Youth-Led Political Forum
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {SITE_CONFIG.description}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Established in <span className="font-bold text-brand-black">2019</span>, we have grown to over 
              <span className="font-bold text-brand-black"> 1,000 members</span> drawn from different Schools and courses within Kenyatta University. 
              95% of our members are continuing students and alumni.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;