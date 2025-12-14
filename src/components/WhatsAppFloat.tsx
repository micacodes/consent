import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/data';

const WhatsAppFloat = () => {
  return (
    <Link 
      href={SITE_CONFIG.whatsappLink}
      target="_blank"
      aria-label="Join WhatsApp Channel"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:bg-[#20bd5a] transition-all duration-300 group"
    >
      <MessageCircle size={28} fill="white" className="text-white" />
      
      {/* Tooltip text that appears on hover (Desktop only) */}
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-bold">
        Join Channel
      </span>
    </Link>
  );
};

export default WhatsAppFloat;