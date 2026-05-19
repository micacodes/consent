"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-12 w-12 rounded-full overflow-hidden border border-gray-100">
                <Image src="/consent.jpeg" alt="Logo" fill className="object-cover" />
              </div>
              <span className="text-xl md:text-2xl font-extrabold text-brand-black tracking-tighter">
                CONSENT<span className="text-brand-red text-red-600">_KE</span>🇰🇪
              </span>
            </Link>
          </div>

          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/about" className="text-gray-700 hover:text-red-600 font-medium transition">About</Link>

            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-700 group-hover:text-red-600 font-medium transition py-4">
                Activities <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-200"/>
              </button>
              <div className="absolute top-full left-0 w-56 bg-white border border-gray-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-2 flex flex-col">
                  <Link href="/activities/hikes" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-600 rounded-lg transition">🧗 Hiking & Adventures</Link>
                  <Link href="/activities/choma-fest" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-orange-600 rounded-lg transition">🔥 Choma Fest</Link>
                  <Link href="/activities/csr" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600 rounded-lg transition">❤️ Community Outreach</Link>
                </div>
              </div>
            </div>

            <Link href="/marketplace" className="text-gray-700 hover:text-red-600 font-medium transition">Marketplace</Link>
            <Link href="/members-cabinet" className="text-gray-700 hover:text-red-600 font-medium transition">Members Cabinet</Link>
            <Link href="/constitution" className="text-gray-700 hover:text-red-600 font-medium transition">Constitution</Link>
          </div>

          <div className="hidden md:flex items-center">
            <Link href="https://whatsapp.com/channel/0029Vb1YoqJCMY0Pod02FL3M" target="_blank" className="bg-green-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-green-700 transition shadow-md">Join Us</Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-black p-2"><Menu size={30} /></button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t absolute w-full left-0 shadow-xl z-50">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link href="/about" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-gray-700">About</Link>
            <Link href="/activities/hikes" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-green-600">🧗 Hiking</Link>
            <Link href="/activities/choma-fest" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-orange-600">🔥 Choma Fest</Link>
            <Link href="/activities/csr" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-red-600">❤️ Outreach</Link>
            <Link href="/marketplace" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-gray-700">Marketplace</Link>
            <Link href="/constitution" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-gray-700">Constitution</Link>
            <Link href="/members-cabinet" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-gray-700">👑 Members Cabinet</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;