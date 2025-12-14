import { RULES } from '@/lib/data';
import { Scale, AlertTriangle, ShieldCheck } from 'lucide-react';

const Rules = () => {
  return (
    <section id="rules" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* The Card Container */}
        <div className="bg-brand-black text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          
          {/* Decorative Kenyan Flag Stripes at Top and Bottom */}
          <div className="absolute top-0 left-0 w-full h-3 bg-brand-green"></div>
          <div className="absolute bottom-0 left-0 w-full h-3 bg-brand-red"></div>

          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center p-3 bg-brand-red/20 rounded-full mb-4">
              <Scale className="text-brand-red" size={32} />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">
              THE CONSTITUTION
            </h2>
            <p className="text-gray-400 mt-2">Governing Principles of The Consent_KE</p>
          </div>

          {/* The Rules List */}
          <div className="space-y-6">
            {RULES.map((rule, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-brand-red/50 transition">
                <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-brand-red text-white font-bold text-sm">
                  0{index + 1}
                </span>
                <p className="text-lg text-gray-200 leading-snug">
                  {rule}
                </p>
              </div>
            ))}
          </div>

          {/* The Pardoning Clause */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex items-start gap-4">
              <AlertTriangle className="text-yellow-500 flex-shrink-0" />
              <div>
                <h4 className="text-yellow-500 font-bold uppercase text-sm tracking-wider mb-1">
                  Pardoning of Law Breakers
                </h4>
                <p className="text-gray-300">
                  1. Share an unconditional apology to the group. 
                  <span className="block text-sm text-gray-500 mt-1">(Applies specifically to Parents & Spamming violations)</span>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Rules;