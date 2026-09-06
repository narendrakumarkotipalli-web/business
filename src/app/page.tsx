import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Star, ShieldCheck, Truck, Sparkles, HeartHandshake } from 'lucide-react';
import PickleSelectionSection from '@/components/PickleSelectionSection';

export const metadata: Metadata = {
  title: 'PickleMart — Authentic Homemade Traditional Andhra Pickles | Order Online',
  description:
    'Shop authentic homemade Andhra pickles — Chicken, Gongura Chicken, Prawns, Pandu Mirchi, and Tomato. Freshly made with cold-pressed sesame oil. Order online via WhatsApp.',
};

const trustBadges = [
  { icon: ShieldCheck, label: '100% Homemade & Pure', desc: 'No chemicals or synthetic colors' },
  { icon: Star, label: 'Cold-Pressed Sesame Oil', desc: 'Aged traditional Andhra recipes' },
  { icon: Truck, label: 'Pan-India Express Shipping', desc: 'Hygienic spill-proof packaging' },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative overflow-hidden bg-gradient-to-b from-softCream via-warmIvory to-warmIvory border-b border-warmTaupe/10"
        aria-label="Hero section"
      >
        {/* Subtle background ambient texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none text-[260px] leading-none flex items-center justify-center font-serif text-espresso">
          🏺
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <div className="inline-flex items-center gap-2 bg-mustardGold/15 border border-mustardGold/30 text-espresso text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase shadow-sm">
            <Sparkles size={13} className="text-mustardGold" />
            <span>Artisanal Andhra Delicacies · Handcrafted in Small Batches</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-espresso leading-[1.15] mb-6 tracking-tight">
            Authentic Homemade
            <br />
            <span className="text-oliveGreen italic">Tradition & Spice</span>
          </h1>

          <p className="text-warmTaupe text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Relish the unforgettable depth of coastal spices, tender meats, and sun-ripened chillies.
            Slow-simmered in cold-pressed sesame oil using heirloom Andhra family recipes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <a
              href="#select-pickles"
              className="inline-flex items-center justify-center gap-2.5 bg-oliveGreen hover:bg-forestGreen active:scale-98 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200 shadow-md shadow-oliveGreen/25 tracking-wide"
            >
              Order Now <ArrowRight size={18} />
            </a>
            <Link
              href="/pickles"
              className="inline-flex items-center justify-center gap-2 border border-warmTaupe/30 hover:border-oliveGreen hover:text-oliveGreen bg-pureWhite text-espresso font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200 shadow-sm"
            >
              View Full Menu
            </Link>
          </div>

          {/* Trust Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto pt-8 border-t border-warmTaupe/15">
            {trustBadges.map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="flex items-center gap-3.5 p-3 rounded-xl bg-pureWhite/60 border border-warmTaupe/10 text-left shadow-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-oliveGreen/10 flex items-center justify-center shrink-0 text-oliveGreen border border-oliveGreen/20">
                  <Icon size={20} />
                </div>
                <div>
                  <p className="font-semibold text-espresso text-sm leading-tight">{label}</p>
                  <p className="text-warmTaupe text-xs mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pickles Display & Selection Section */}
      <PickleSelectionSection />

      {/* Heritage Story / Quality Promise */}
      <section className="bg-softCream py-16 border-y border-warmTaupe/15">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs uppercase tracking-widest text-mustardGold font-bold mb-2 block">
                The Secret of True Andhra Flavour
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-espresso mb-5 leading-tight">
                No Mass Production. Just Honest Grandmothers’ Recipes.
              </h2>
              <p className="text-warmTaupe leading-relaxed mb-4 text-sm sm:text-base">
                Each jar of PickleMart is born from patience. From carefully cleaning farm-fresh meats and hand-picking fiery Guntur chillies, to slow roasting stone-ground fenugreek and mustard — we refuse to cut corners.
              </p>
              <p className="text-warmTaupe leading-relaxed mb-6 text-sm sm:text-base">
                We preserve solely through authentic traditional methods: pure cold-pressed sesame oil, salt, and sun-dried spices. No synthetic vinegar, no artificial preservatives, and no artificial colorants.
              </p>
              <div className="flex items-center gap-4 text-sm font-semibold text-espresso">
                <div className="flex items-center gap-1.5 text-oliveGreen">
                  <HeartHandshake size={18} /> Made with Love
                </div>
                <span className="text-warmTaupe/40">•</span>
                <div>100% Traditional Tadka</div>
                <span className="text-warmTaupe/40">•</span>
                <div>Fresh Batches Daily</div>
              </div>
            </div>

            <div className="bg-pureWhite p-8 rounded-3xl border border-warmTaupe/15 shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-mustardGold/10 rounded-full blur-2xl pointer-events-none" />
              <h3 className="font-serif font-bold text-xl text-espresso mb-6">
                Why Our Customers Keep Coming Back
              </h3>
              <div className="space-y-4 text-sm">
                <div className="p-4 rounded-xl bg-warmIvory/50 border border-warmTaupe/10">
                  <p className="font-semibold text-espresso mb-1">🍗 Generous Meat & Prawn Chunks</p>
                  <p className="text-warmTaupe text-xs leading-relaxed">
                    Unlike commercial brands with 90% gravy, our non-veg pickles are packed with juicy, succulent pieces in every single spoonful.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-warmIvory/50 border border-warmTaupe/10">
                  <p className="font-semibold text-espresso mb-1">🌿 Authentic Gongura & Ripe Chillies</p>
                  <p className="text-warmTaupe text-xs leading-relaxed">
                    Fresh sour sorrel leaves and fiery red Pandu Mirchi procured directly from farmers for that genuine homestyle punch.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-warmIvory/50 border border-warmTaupe/10">
                  <p className="font-semibold text-espresso mb-1">📦 Safe & Leak-Proof Pan-India Delivery</p>
                  <p className="text-warmTaupe text-xs leading-relaxed">
                    Double-sealed air-tight containers packed with protective cushioning to reach your doorstep in pristine condition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Order CTA */}
      <section className="bg-deepBrown text-pureWhite relative overflow-hidden py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs uppercase tracking-widest text-mustardGold font-bold mb-3 inline-block">
            Direct Farm-to-Table Experience
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">
            Craving That Homemade Kick?
          </h2>
          <p className="text-warmIvory/75 mb-8 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
            Order your favourite jars easily via WhatsApp. Custom spice preferences and bulk orders welcomed with open arms.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#select-pickles"
              className="inline-flex items-center justify-center gap-2 bg-oliveGreen hover:bg-forestGreen active:scale-98 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 text-base shadow-lg shadow-black/20"
            >
              Select Your Jars Now <ArrowRight size={18} />
            </a>
            <Link
              href="/cart"
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-mustardGold text-white hover:text-mustardGold font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-base bg-white/5"
            >
              Check Your Cart
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

