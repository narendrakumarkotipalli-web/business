'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { buildWhatsAppInquiryUrl } from '@/utils/whatsapp';
import WhatsAppIcon from './WhatsAppIcon';

const locations = [
  { city: 'Hyderabad', note: 'All over Hyderabad' },
  { city: 'Kakinada', note: 'Including surrounding villages' },
  { city: 'Samarlkot', note: 'Including surrounding villages' },
  { city: 'Pithapuram', note: 'Including surrounding villages' },
];

export default function Footer() {
  return (
    <footer className="bg-deepBrown text-warmIvory/80 mt-auto border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/aruh/Aruh_icon.webp"
                alt="Aruh Pickles"
                width={40}
                height={40}
                className="rounded-full bg-oliveGreen/10 border border-oliveGreen/20"
              />
              <span className="text-2xl font-serif font-bold text-white tracking-wide">
                Aruh
              </span>
            </div>
            <p className="text-sm text-warmIvory/70 leading-relaxed font-light mb-4">
              Authentic Andhra and Rayalaseema artisanal pickles prepared in small batches using cold-pressed sesame oil, sun-ripened ingredients, and time-honored secret recipes.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-mustardGold/30 text-xs text-mustardGold">
              ✨ 100% Homemade · No Chemical Preservatives
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="text-white font-serif font-semibold text-lg mb-4 border-b border-white/10 pb-2">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: '/', label: 'Home & Our Story' },
                { href: '/pickles', label: 'All Pickles (Veg & Non-Veg)' },
                { href: '/cart', label: 'View Cart' },
                { href: '/checkout', label: 'Order via WhatsApp' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-mustardGold text-warmIvory/75 transition-colors duration-200 flex items-center gap-1.5"
                  >
                    <span className="text-mustardGold text-xs">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Available Locations */}
          <div>
            <h3 className="text-white font-serif font-semibold text-lg mb-4 border-b border-white/10 pb-2">
              We Deliver To
            </h3>
            <ul className="space-y-2.5">
              {locations.map(({ city, note }) => (
                <li key={city} className="flex items-start gap-2">
                  <MapPin size={13} className="text-mustardGold mt-1 shrink-0" />
                  <div>
                    <span className="text-sm text-warmIvory/90 font-medium">{city}</span>
                    {note && (
                      <p className="text-xs text-warmIvory/50 mt-0.5">{note}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-xs text-warmIvory/60 mt-4 leading-relaxed">
              Have questions or need delivery outside these areas?{' '}
              <a
                href={buildWhatsAppInquiryUrl('Hi Aruh! 👋 I would like to check delivery availability and details for my location.')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-mustardGold hover:underline font-medium inline-flex items-center gap-1"
                title="DM on WhatsApp for delivery inquiry"
              >
                DM us on WhatsApp →
              </a>
            </p>
          </div>

          {/* The Aruh Promise */}
          <div>
            <h3 className="text-white font-serif font-semibold text-lg mb-4 border-b border-white/10 pb-2">
              The Aruh Promise
            </h3>
            <ul className="space-y-2 text-sm text-warmIvory/75">
              <li className="flex items-center gap-2">
                <span className="text-mustardGold font-bold">✓</span> Cold-Pressed Gingelly / Sesame Oil
              </li>
              <li className="flex items-center gap-2">
                <span className="text-mustardGold font-bold">✓</span> Sun-Dried Guntur Chillies & Spices
              </li>
              <li className="flex items-center gap-2">
                <span className="text-mustardGold font-bold">✓</span> Zero Artificial Additives & Colors
              </li>
              <li className="flex items-center gap-2">
                <span className="text-mustardGold font-bold">✓</span> Hygienic Glass/Food-Grade Packaging
              </li>
              <li className="flex items-center gap-2">
                <span className="text-mustardGold font-bold">✓</span> Fresh Small-Batch Production
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* WhatsApp Ordering & Bulk Orders Highlight */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-2 mb-6">
        <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-mustardGold/25 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366] shrink-0">
              <WhatsAppIcon size={22} />
            </div>
            <div>
              <p className="text-xs sm:text-sm text-warmIvory/90 leading-relaxed font-normal">
                Order your favourite jars easily via WhatsApp. Custom spice preferences and bulk orders welcomed with open arms.
              </p>
              <p className="text-[11px] text-warmIvory/60 mt-0.5">
                Just want to interact or learn more? Feel free to message us directly!
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0 flex-wrap justify-center">
            <a
              href={buildWhatsAppInquiryUrl('Hi Aruh! 👋 I would like to know more details about your authentic pickles, spice options, and recipes.')}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all px-4 py-2 rounded-full inline-flex items-center gap-1.5 shadow-sm active:scale-95"
              title="Chat or ask questions directly on WhatsApp without ordering"
            >
              <WhatsAppIcon size={14} />
              <span>DM on WhatsApp</span>
            </a>
            <Link
              href="/pickles"
              className="text-xs font-semibold text-mustardGold hover:text-white transition-colors bg-mustardGold/15 hover:bg-mustardGold/25 border border-mustardGold/30 px-4 py-2 rounded-full inline-flex items-center gap-1"
            >
              <span>Order Jars</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-white/10 pt-6 pb-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-warmIvory/50">
          <p>© {new Date().getFullYear()} Aruh Artisanal Foods. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Orders processed securely via <span className="text-mustardGold font-medium">WhatsApp</span> · Made with ❤️ in Andhra Pradesh
          </p>
        </div>
      </div>
    </footer>
  );
}
