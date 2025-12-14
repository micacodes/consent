"use client"; // <--- THIS IS REQUIRED for buttons to work in Next.js

import { useState } from 'react'; // <--- Import State
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react'; // Import X for close icon

const Navbar = () => {
  // State to track if menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* LOGO SECTION */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-12 w-12 rounded-full overflow-hidden border border-gray-100">
                <Image src="/consent.jpeg" alt="Logo" fill className="object-cover" />
              </div>
              <span className="text-xl md:text-2xl font-extrabold text-brand-black tracking-tighter">
                CONSENT<span className="text-brand-red">_KE</span>🇰🇪
              </span>
            </Link>
          </div>

          {/* DESKTOP LINKS (Hidden on Mobile) */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="#about" className="text-gray-700 hover:text-brand-red font-medium transition">
              About
            </Link>
            
            {/* DROPDOWN */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-700 group-hover:text-brand-red font-medium transition py-4">
                Activities 
                <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-200"/>
              </button>
              <div className="absolute top-full left-0 w-48 bg-white border border-gray-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-2 flex flex-col">
                  <Link href="#hikes" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-green rounded-lg transition">
                    🧗 Hiking & Adventures
                  </Link>
                  <Link href="#csr" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-red rounded-lg transition">
                    ❤️ Community Outreach
                  </Link>
                </div>
              </div>
            </div>

            <Link href="#marketplace" className="text-gray-700 hover:text-brand-red font-medium transition">
              Marketplace
            </Link>
            <Link href="#rules" className="text-gray-700 hover:text-brand-red font-medium transition">
              Constitution
            </Link>
          </div>

          {/* JOIN BUTTON (Desktop) */}
          <div className="hidden md:flex items-center">
             <Link 
               href="https://whatsapp.com/channel/0029Vb1YoqJCMY0Pod02FL3M" 
               target="_blank"
               className="bg-brand-green text-white px-6 py-2.5 rounded-full font-bold hover:bg-green-700 transition shadow-md"
             >
               Join Us
             </Link>
          </div>

          {/* MOBILE MENU BUTTON (Visible on Mobile) */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} // <--- Toggle Logic
              className="text-brand-black p-2 hover:bg-gray-100 rounded-lg transition"
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE MENU DROPDOWN (This was missing logic before) */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link 
              href="#about" 
              onClick={() => setIsOpen(false)} // Close menu when clicked
              className="block px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
            >
              About
            </Link>
            
            <div className="border-t border-gray-100 my-2 pt-2">
              <p className="px-3 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Activities</p>
              <Link 
                href="#hikes" 
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-green"
              >
                🧗 Hiking & Adventures
              </Link>
              <Link 
                href="#csr" 
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-red"
              >
                ❤️ Community Outreach
              </Link>
            </div>

            <Link 
              href="#marketplace" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
            >
              Marketplace
            </Link>
            <Link 
              href="#rules" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
            >
              Constitution
            </Link>
            
            <Link 
               href="https://whatsapp.com/channel/0029Vb1YoqJCMY0Pod02FL3M" 
               target="_blank"
               className="block mt-4 text-center bg-brand-green text-white px-6 py-3 rounded-xl font-bold hover:bg-green-700 transition"
             >
               Join Us on WhatsApp
             </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;