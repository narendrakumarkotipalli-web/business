import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Star, ShieldCheck, Truck, Sparkles, HeartHandshake, Leaf, ChefHat, MapPin } from 'lucide-react';
import dynamic from 'next/dynamic';

const PickleSelectionSection = dynamic(() => import('@/components/PickleSelectionSection'), {
  loading: () => <div className="py-24 text-center text-warmTaupe">Loading pickles...</div>,
  ssr: true, // we still want SSR for SEO, but it splits the JS bundle
});

export const metadata: Metadata = {
  title: 'Aruh — Authentic Homemade Traditional Andhra Pickles | Order Online',
  description:
    'Shop authentic homemade Andhra pickles — Chicken, Gongura Chicken, Prawns, Pandu Mirchi, and Tomato. Freshly made with cold-pressed sesame oil. Order online via WhatsApp. Delivering in Hyderabad, Kakinada, Samarlkot, Pithapuram.',
};

const trustBadges = [
  { icon: ShieldCheck, label: '100% Homemade & Pure', desc: 'No chemicals or synthetic colors' },
  { icon: Star, label: 'Cold-Pressed Sesame Oil', desc: 'Aged traditional Andhra recipes' },
  { icon: Truck, label: 'Fast Local Delivery', desc: 'Hygienic spill-proof packaging' },
];

const inspirations = [
  {
    icon: HeartHandshake,
    title: 'Keep Everyone Healthy',
    desc: 'We started Aruh with one heartfelt goal — to bring the nourishing power of home-cooked, preservative-free pickles to every family\'s table. Made with love and care, just like grandma used to make.',
  },
  {
    icon: Leaf,
    title: 'What Inspires Us',
    desc: 'Growing up in Andhra and Rayalaseema, pickles were never just a condiment — they were stories, traditions, and memories passed down through generations. The sight of clay jars filled with sesame-gold goodness was our everyday magic. We were inspired to bottle that magic for the world.',
  },
  {
    icon: ChefHat,
    title: 'Our Mission',
    desc: 'To let the world taste the authentic flavors of Andhra and Rayalaseema — where every spice is roasted by hand, every chilli is sun-dried, and every jar is packed with the soul of our coastal heritage. No mass production. No shortcuts. Just honest, delicious pickles.',
  },
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
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none select-none flex items-center justify-center overflow-hidden">
          <Image
            src="/aruh/Aruh_icon.webp"
            alt="Aruh watermark"
            width={320}
            height={320}
            priority
            className="w-64 sm:w-80 h-auto object-contain rounded-full filter grayscale"
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <div className="inline-flex items-center gap-2 bg-mustardGold/15 border border-mustardGold/30 text-espresso text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase shadow-sm">
            <Sparkles size={13} className="text-mustardGold" />
            <span>Artisanal Andhra Delicacies · Handcrafted in Small Batches</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-espresso leading-[1.15] mb-6 tracking-tight">
            Keeping Every Home
            <br />
            <span className="text-oliveGreen italic">Healthy, Happy & Flavourful</span>
          </h1>

          <p className="text-warmTaupe text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
            Handcrafted with love and care in small batches — authentic Andhra and Rayalaseema pickles made from time-honored heirloom family recipes. Pure ingredients, zero preservatives, and a whole lot of heart in every jar.
          </p>

          {/* Delivery Locations Pill */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 mb-10">
            <span className="flex items-center gap-1.5 text-xs bg-oliveGreen/10 border border-oliveGreen/20 text-oliveGreen font-semibold px-3 py-1.5 rounded-full">
              <MapPin size={12} />
              Hyderabad (All Areas)
            </span>
            <span className="flex items-center gap-1.5 text-xs bg-oliveGreen/10 border border-oliveGreen/20 text-oliveGreen font-semibold px-3 py-1.5 rounded-full">
              <MapPin size={12} />
              Kakinada
            </span>
            <span className="flex items-center gap-1.5 text-xs bg-oliveGreen/10 border border-oliveGreen/20 text-oliveGreen font-semibold px-3 py-1.5 rounded-full">
              <MapPin size={12} />
              Samarlkot
            </span>
            <span className="flex items-center gap-1.5 text-xs bg-oliveGreen/10 border border-oliveGreen/20 text-oliveGreen font-semibold px-3 py-1.5 rounded-full">
              <MapPin size={12} />
              Pithapuram & Villages
            </span>
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

      {/* Our Story / Inspiration Section */}
      <section className="bg-softCream py-16 border-b border-warmTaupe/15" aria-label="Our story and inspiration">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-mustardGold font-bold mb-2 block">
              The Aruh Story
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-espresso leading-tight">
              Born from Love, Made with Care
            </h2>
            <p className="text-warmTaupe mt-3 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Every jar of Aruh pickle carries with it a slice of Andhra heritage — the fragrance of slow-roasted spices, the warmth of a family kitchen, and the promise of wholesome goodness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {inspirations.map(({ icon: Icon, title, desc }) => (
              <article
                key={title}
                className="bg-pureWhite rounded-2xl p-7 border border-warmTaupe/15 shadow-sm hover:shadow-md transition-shadow duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-oliveGreen/10 flex items-center justify-center text-oliveGreen border border-oliveGreen/20 mb-5 group-hover:bg-oliveGreen group-hover:text-white transition-all duration-300">
                  <Icon size={22} />
                </div>
                <h3 className="font-serif font-bold text-xl text-espresso mb-3">{title}</h3>
                <p className="text-warmTaupe text-sm leading-relaxed">{desc}</p>
              </article>
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
                No Mass Production. Just Honest Grandmothers&apos; Recipes.
              </h2>
              <p className="text-warmTaupe leading-relaxed mb-4 text-sm sm:text-base">
                Each jar of Aruh is born from patience. From carefully cleaning farm-fresh meats and hand-picking fiery Guntur chillies, to slow roasting stone-ground fenugreek and mustard — we refuse to cut corners.
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

            <aside className="bg-pureWhite p-8 rounded-3xl border border-warmTaupe/15 shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-mustardGold/10 rounded-full blur-2xl pointer-events-none" />
              <h3 className="font-serif font-bold text-xl text-espresso mb-6">
                Why Our Customers Keep Coming Back
              </h3>
              <div className="space-y-4 text-sm">
                <article className="p-4 rounded-xl bg-warmIvory/50 border border-warmTaupe/10">
                  <h4 className="font-semibold text-espresso mb-1">🍗 Generous Meat & Prawn Chunks</h4>
                  <p className="text-warmTaupe text-xs leading-relaxed">
                    Unlike commercial brands with 90% gravy, our non-veg pickles are packed with juicy, succulent pieces in every single spoonful.
                  </p>
                </article>
                <article className="p-4 rounded-xl bg-warmIvory/50 border border-warmTaupe/10">
                  <h4 className="font-semibold text-espresso mb-1">🌿 Authentic Gongura & Ripe Chillies</h4>
                  <p className="text-warmTaupe text-xs leading-relaxed">
                    Fresh sour sorrel leaves and fiery red Pandu Mirchi procured directly from farmers for that genuine homestyle punch.
                  </p>
                </article>
                <article className="p-4 rounded-xl bg-warmIvory/50 border border-warmTaupe/10">
                  <h4 className="font-semibold text-espresso mb-1">📦 Safe & Leak-Proof Delivery</h4>
                  <p className="text-warmTaupe text-xs leading-relaxed">
                    Double-sealed air-tight containers packed with protective cushioning to reach your doorstep in pristine condition.
                  </p>
                </article>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* WhatsApp Order CTA */}
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
              Select Your Jars
            </a>
            <Link
              href="/pickles"
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-mustardGold text-white hover:text-mustardGold font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-base bg-white/5"
            >
              View All Pickles
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
