import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-deepBrown text-warmIvory/80 mt-auto border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="text-2xl">🏺</span>
              <span className="text-2xl font-serif font-bold text-white tracking-wide">
                PickleMart
              </span>
            </div>
            <p className="text-sm text-warmIvory/70 leading-relaxed font-light mb-4">
              Authentic Andhra artisanal pickles prepared in small batches using cold-pressed sesame oil, sun-ripened ingredients, and time-honored secret recipes.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-mustardGold/30 text-xs text-mustardGold">
              ✨ 100% Homemade · No Chemical Preservatives
            </div>
          </div>

          <div>
            <h3 className="text-white font-serif font-semibold text-lg mb-4 border-b border-white/10 pb-2">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: '/', label: 'Home & Specials' },
                { href: '/pickles', label: 'All Pickles (Veg & Non-Veg)' },
                { href: '/cart', label: 'View Cart' },
                { href: '/checkout', label: 'Direct WhatsApp Checkout' },
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

          <div>
            <h3 className="text-white font-serif font-semibold text-lg mb-4 border-b border-white/10 pb-2">
              The PickleMart Promise
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
                <span className="text-mustardGold font-bold">✓</span> Fast Pan-India Express Delivery
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-warmIvory/50">
          <p>© {new Date().getFullYear()} PickleMart Artisanal Foods. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Orders processed securely via <span className="text-mustardGold font-medium">WhatsApp</span> · Made with ❤️ in Andhra Pradesh
          </p>
        </div>
      </div>
    </footer>
  );
}

