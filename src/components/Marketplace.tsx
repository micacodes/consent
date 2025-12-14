import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/data';

const Marketplace = () => {
  return (
    <section id="marketplace" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-brand-green font-bold tracking-wider uppercase text-sm">
            Empowering Talent
          </span>
          <h2 className="text-4xl font-extrabold text-brand-black mt-2">
            Student Marketplace
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            We support student entrepreneurship. Check out businesses owned by The Consent members.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT: The "Business of the Week" Card */}
          <div className="relative group">
            {/* Decorative background blob */}
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-red to-brand-green rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            
            <div className="relative bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xl">
              {/* Image Section */}
              <div className="relative h-64 w-full bg-gray-100">
                <Image 
                  src="/pappsy.jpeg" 
                  alt="Student baking cakes"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-brand-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm">
                  <Star size={12} fill="#eab308" className="text-yellow-500"/>
                  Featured Business
                </div>
              </div>

              {/* Details Section */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Delicious Bakes KU</h3>
                <p className="text-gray-600 mb-6 line-clamp-2">
                  Freshly baked custom cakes for birthdays, graduations, and events. 
                  Made with love by a KU student. Affordable prices for students!
                </p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Owned by</p>
                    <p className="text-sm font-bold text-brand-black">Sharon Mwende (Member)</p>
                  </div>
                  <button className="bg-brand-black text-white px-6 py-2 rounded-lg font-bold hover:bg-brand-red transition flex items-center gap-2 text-sm">
                    Order Now <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: The "Call to Action" Text */}
          <div className="lg:pl-10">
            <h3 className="text-3xl font-bold mb-6 text-brand-black">
              Do you have a <span className="text-brand-red">Hustle?</span>
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              The Consent_KE is more than just politics. We believe in economic empowerment. 
              As a member, you get a platform to market your skills and products to over 1,000 students and alumni.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 bg-brand-green rounded-full"></div>
                <span className="text-gray-700 font-medium">Free advertising on our platforms</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 bg-brand-green rounded-full"></div>
                <span className="text-gray-700 font-medium">Access to a network of buyers</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 bg-brand-green rounded-full"></div>
                <span className="text-gray-700 font-medium">Business mentorship opportunities</span>
              </li>
            </ul>

            <Link 
              href={SITE_CONFIG.whatsappLink}
              target="_blank" 
              className="inline-flex items-center gap-2 text-brand-red font-bold hover:text-red-700 transition border-b-2 border-brand-red pb-1"
            >
              Contact Admin to List Your Business
              <ArrowRight size={20} />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Marketplace;