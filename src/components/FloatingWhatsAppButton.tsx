'use client';

import { useState } from 'react';
import WhatsAppIcon from './WhatsAppIcon';
import { buildWhatsAppInquiryUrl } from '@/utils/whatsapp';

export default function FloatingWhatsAppButton() {
  const [hovered, setHovered] = useState(false);
  const whatsappUrl = buildWhatsAppInquiryUrl(
    'Hi Aruh! 👋 I would like to know more details about your authentic pickles, custom spice options, and delivery.'
  );

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
      {/* Tooltip badge on hover or subtle visible pill */}
      <span
        className={`hidden sm:inline-block bg-espresso/90 text-warmIvory text-xs font-medium py-1.5 px-3 rounded-full shadow-md backdrop-blur-sm border border-warmTaupe/20 transition-all duration-300 ${
          hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
        }`}
      >
        DM us on WhatsApp 👋
      </span>

      {/* WhatsApp Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-[0_6px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_25px_rgba(37,211,102,0.55)] hover:scale-105 active:scale-95 transition-all duration-200"
        aria-label="Chat with Aruh on WhatsApp"
        title="Chat with Aruh on WhatsApp without placing an order"
      >
        {/* Ambient pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />

        {/* WhatsApp Icon */}
        <WhatsAppIcon size={30} className="relative z-10 text-white transition-transform duration-200 group-hover:scale-110" />

        {/* Mobile quick indicator dot */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-mustardGold rounded-full border-2 border-white" />
      </a>
    </div>
  );
}
