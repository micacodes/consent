import { OBJECTIVES } from '@/lib/data';
// Import the specific icons we need from lucide-react
import { Brain, Scale, Users, Vote, Briefcase, Zap, Heart, Handshake } from 'lucide-react';

const Objectives = () => {
  // We map the string names from data.ts to the actual components
  const iconMap: any = {
    "Brain": Brain,
    "Scale": Scale,
    "Users": Users,
    "Vote": Vote,
    "Briefcase": Briefcase,
    "Zap": Zap,
    "Heart": Heart,
    "Handshake": Handshake
  };

  return (
    <section id="objectives" className="py-20 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black mb-4">
            Purpose of <span className="text-brand-red">The Consent_KE</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We have metamorphosed from just being a political group to engaging in discussions that affect our daily lives.
          </p>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {OBJECTIVES.map((obj, index) => {
            const IconComponent = iconMap[obj.icon] || Users; // Default to Users if icon not found
            
            return (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-brand-black hover:border-brand-red group"
              >
                <div className="mb-4 text-brand-red group-hover:scale-110 transition-transform duration-300">
                  <IconComponent size={40} strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-brand-red transition-colors">
                  {obj.title}
                </h3>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Objectives;