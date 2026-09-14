'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { useAppSelector } from '@/store/hooks';
import CartItemCard from '@/components/CartItemCard';
import { formatPrice } from '@/utils/formatPrice';

export default function CartPage() {
  const items = useAppSelector((state) => state.cart.items);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 border border-oliveGreen/20 shadow-md bg-oliveGreen/5">
          <Image
            src="/aruh/Aruh_icon.webp"
            alt="Aruh Logo"
            width={80}
            height={80}
            className="rounded-full object-cover"
          />
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-espresso mb-3">
          Your Cart is Empty
        </h1>
        <p className="text-warmTaupe mb-8 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
          Looks like you haven&apos;t picked any artisanal jars yet. Discover our fresh homemade pickles!
        </p>
        <Link
          href="/pickles"
          className="inline-flex items-center gap-2 bg-oliveGreen hover:bg-forestGreen active:scale-98 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-md shadow-oliveGreen/25 text-base"
        >
          <ShoppingBag size={18} />
          Explore Our Pickles
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-espresso">Your Cart</h1>
        <p className="text-warmTaupe text-sm mt-1.5 font-medium">
          {itemCount} {itemCount === 1 ? 'jar' : 'jars'} selected for checkout
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <CartItemCard key={item.id} item={item} />
          ))}
          <div className="pt-3">
            <Link
              href="/pickles"
              className="inline-flex items-center gap-1.5 text-sm text-oliveGreen hover:text-forestGreen hover:underline font-semibold"
            >
              ← Continue Shopping Pickles
            </Link>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-pureWhite rounded-2xl border border-warmTaupe/15 shadow-md p-6 sticky top-28">
            <h2 className="font-serif font-bold text-espresso text-lg mb-4 border-b border-warmTaupe/15 pb-2">
              Price Details
            </h2>
            <div className="space-y-3 text-sm">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between text-warmTaupe">
                  <span className="truncate pr-2 font-medium">
                    {item.name} ({item.size}) ×{item.quantity}
                  </span>
                  <span className="font-semibold text-espresso shrink-0">
                    {formatPrice(item.price * item.quantity)}
                  </span>
                </div>
              ))}
            </div>
            <div className="border-t border-warmTaupe/15 mt-5 pt-4 flex justify-between items-baseline font-bold text-base">
              <span className="font-serif text-espresso text-lg">Total Amount</span>
              <span className="text-2xl font-serif text-oliveGreen">{formatPrice(total)}</span>
            </div>
            <Link
              href="/checkout"
              className="mt-6 w-full flex items-center justify-center gap-2 bg-oliveGreen hover:bg-forestGreen active:scale-98 text-white font-bold py-4 rounded-xl shadow-md shadow-oliveGreen/25 transition-all duration-200 text-sm"
            >
              Proceed to Checkout <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

