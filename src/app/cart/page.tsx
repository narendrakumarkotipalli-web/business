'use client';

import Link from 'next/link';
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="text-6xl mb-6">🛒</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">Your cart is empty</h1>
        <p className="text-gray-500 mb-8 text-sm sm:text-base">
          Looks like you haven&apos;t added any pickles yet.
        </p>
        <Link
          href="/pickles"
          className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200"
        >
          <ShoppingBag size={18} />
          Browse Pickles
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Your Cart</h1>
        <p className="text-gray-500 text-sm mt-1">
          {itemCount} {itemCount === 1 ? 'item' : 'items'} in cart
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-3">
          {items.map((item) => (
            <CartItemCard key={item.id} item={item} />
          ))}
          <div className="pt-2">
            <Link
              href="/pickles"
              className="text-sm text-orange-500 hover:underline font-medium"
            >
              ← Continue Shopping
            </Link>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sticky top-20">
            <h2 className="font-bold text-gray-900 mb-4">Price Details</h2>
            <div className="space-y-2 text-sm">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between text-gray-600">
                  <span className="truncate pr-2">
                    {item.name} ({item.size}) ×{item.quantity}
                  </span>
                  <span className="font-medium text-gray-800 shrink-0">
                    {formatPrice(item.price * item.quantity)}
                  </span>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-100 mt-4 pt-4 flex justify-between font-bold text-base">
              <span>Total</span>
              <span className="text-orange-500">{formatPrice(total)}</span>
            </div>
            <Link
              href="/checkout"
              className="mt-5 w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-bold py-3.5 rounded-xl transition-all duration-200 text-sm"
            >
              Proceed to Checkout <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
