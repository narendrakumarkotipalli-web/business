import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🥒</span>
              <span className="text-xl font-bold text-white">PickleMart</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Authentic homemade non-veg pickles crafted with love, traditional
              spices, and the freshest ingredients.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: '/', label: 'Home' },
                { href: '/pickles', label: 'Our Pickles' },
                { href: '/cart', label: 'Cart' },
                { href: '/checkout', label: 'Checkout' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-orange-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Why Choose Us?</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>✅ 100% Homemade</li>
              <li>✅ Fresh Ingredients</li>
              <li>✅ No Preservatives</li>
              <li>✅ Traditional Recipes</li>
              <li>✅ Pan-India Delivery</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} PickleMart. All rights reserved.</p>
          <p>Orders via WhatsApp · Homemade with ❤️</p>
        </div>
      </div>
    </footer>
  );
}
