import { SITE_CONFIG } from '@/lib/data';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-black text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-2xl font-bold text-white mb-6">
          CONSENT<span className="text-brand-red">_KE</span>🇰🇪
        </h2>

        <div className="flex justify-center space-x-6 mb-8">
            <Link href={SITE_CONFIG.whatsappLink} className="hover:text-brand-green transition">WhatsApp</Link>
            <Link href={SITE_CONFIG.instagramLink} className="hover:text-brand-red transition">Instagram</Link>
            <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-white transition">Email</a>
        </div>

        <div className="p-4 border border-gray-800 inline-block rounded-lg mb-8">
            <p className="text-brand-green font-medium tracking-wide uppercase">
                🇰🇪 God Bless You, God Bless The Consent_KE 🇰🇪
            </p>
        </div>

        <p className="text-sm text-gray-600">
          © {currentYear} The Consent KE. All rights reserved.
        </p>
        <p className="text-xs text-gray-700 mt-2">
          Developed by micasoftwares
        </p>
      </div>
    </footer>
  );
};

export default Footer;