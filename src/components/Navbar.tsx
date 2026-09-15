'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useAppSelector } from '@/store/hooks';
import { buildWhatsAppInquiryUrl } from '@/utils/whatsapp';
import WhatsAppIcon from './WhatsAppIcon';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const cartCount = useAppSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/pickles', label: 'Pickles' },
    { href: '/cart', label: 'Cart' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-softCream border-b border-warmTaupe/15 shadow-sm backdrop-blur-md bg-opacity-95">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group min-w-0">
            <div className="w-10 h-10 rounded-full bg-oliveGreen/10 flex items-center justify-center border border-oliveGreen/20 group-hover:scale-105 transition-transform duration-200 shrink-0 overflow-hidden">
              <Image
                src="/aruh/Aruh_icon.webp"
                alt="Aruh Foods"
                width={40}
                height={40}
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <div className="leading-tight">
              <p className="text-xl sm:text-2xl font-serif font-bold text-espresso tracking-tight">
                Aruh Foods
              </p>
              <p className="text-[11px] uppercase tracking-wider text-mustardGold font-semibold">
                Authentic Homemade Pickles
              </p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-warmTaupe hover:text-oliveGreen font-medium text-sm transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={buildWhatsAppInquiryUrl('Hi Aruh! 👋 I would like to know more details about your authentic pickles and delivery.')}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#25D366]/10 text-[#128C7E] border border-[#25D366]/30 hover:bg-[#25D366] hover:text-white transition-all duration-200 shadow-2xs"
              title="Chat or ask questions directly on WhatsApp without an order"
            >
              <WhatsAppIcon size={14} />
              <span>DM Us</span>
            </a>

            <Link
              href="/cart"
              aria-label={`Cart with ${cartCount} items`}
              className="relative p-2.5 rounded-xl text-espresso hover:text-oliveGreen hover:bg-oliveGreen/5 transition-all duration-200"
            >
              <ShoppingBag size={22} />
              {cartCount > 0 && (
                <span className="absolute top-0.5 right-0.5 bg-chiliRed text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm animate-pulse">
                  {cartCount > 99 ? '99+' : cartCount}
                </span>
              )}
            </Link>

            <button
              className="md:hidden p-2 rounded-xl text-espresso hover:text-oliveGreen hover:bg-oliveGreen/5 transition-colors"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-warmTaupe/15 bg-softCream px-4 py-3 shadow-lg">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 px-3 rounded-lg text-espresso hover:text-oliveGreen hover:bg-oliveGreen/5 font-medium border-b border-warmTaupe/10 last:border-0 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={buildWhatsAppInquiryUrl('Hi Aruh! 👋 I would like to know more details about your authentic pickles and delivery.')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="py-3 px-3 rounded-lg text-emerald-800 bg-emerald-500/10 font-medium flex items-center justify-between transition-colors duration-200 mt-1 border border-emerald-500/20"
              title="Chat or ask questions directly on WhatsApp without an order"
            >
              <span className="flex items-center gap-2">
                <WhatsAppIcon size={18} className="text-[#25D366]" />
                <span>DM on WhatsApp</span>
              </span>
              <span className="text-xs text-emerald-700 font-semibold">Chat Now →</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

