import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Star, ShieldCheck, Truck } from 'lucide-react';
import { pickles } from '@/data/pickles';
import PickleCard from '@/components/PickleCard';

export const metadata: Metadata = {
  title: 'PickleMart — Authentic Homemade Non-Veg Pickles | Order Online',
  description:
    'Shop authentic homemade non-veg pickles — Chicken, Gongura Chicken & Prawns. Fresh ingredients, traditional recipes. Order online via WhatsApp.',
};

const trustBadges = [
  { icon: ShieldCheck, label: '100% Homemade', color: 'text-green-500' },
  { icon: Star, label: 'Traditional Recipe', color: 'text-yellow-500' },
  { icon: Truck, label: 'Pan-India Delivery', color: 'text-blue-500' },
];

export default function HomePage() {
  const featuredPickles = pickles.slice(0, 3);

  return (
    <>
      <section
        className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-50"
        aria-label="Hero section"
      >
        <div className="absolute inset-0 opacity-5 pointer-events-none select-none text-[200px] leading-none flex items-center justify-center">
          🥒
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <span className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
            🏡 Homemade · Hygienic · Delicious
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Authentic Homemade
            <br />
            <span className="text-orange-500">Non-Veg Pickles</span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto mb-8">
            Handcrafted with love using traditional family recipes. Made with
            the freshest ingredients and no artificial preservatives.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <Link
              href="/pickles"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-bold px-8 py-4 rounded-xl text-base transition-all duration-200 shadow-lg shadow-orange-200"
            >
              Order Now <ArrowRight size={18} />
            </Link>
            <Link
              href="/pickles"
              className="inline-flex items-center justify-center gap-2 border border-gray-300 hover:border-orange-400 hover:text-orange-500 text-gray-700 font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200"
            >
              Browse Pickles
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
            {trustBadges.map(({ icon: Icon, label, color }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-gray-700">
                <Icon size={18} className={color} />
                <span className="font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14" aria-label="Featured pickles">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Our Pickles</h2>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            Slow-cooked to perfection. Ready to spice up your meals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPickles.map((pickle) => (
            <PickleCard key={pickle.id} pickle={pickle} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/pickles"
            className="inline-flex items-center gap-2 border border-orange-400 text-orange-500 hover:bg-orange-50 font-semibold px-6 py-3 rounded-xl transition-all duration-200 text-sm"
          >
            View All Pickles <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="bg-orange-500 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Ready to Order?</h2>
          <p className="text-orange-100 mb-6 max-w-md mx-auto text-sm sm:text-base">
            Place your order directly via WhatsApp. It&apos;s quick, easy, and we
            confirm within minutes.
          </p>
          <Link
            href="/pickles"
            className="inline-flex items-center gap-2 bg-white text-orange-500 font-bold px-8 py-4 rounded-xl hover:bg-orange-50 transition-all duration-200 text-base active:scale-95"
          >
            Shop Now <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
