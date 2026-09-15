'use client';

import Image from 'next/image';
import { useAppSelector } from '@/store/hooks';
import { formatPrice } from '@/utils/formatPrice';
import { CartItem } from '@/types';
import { pickles } from '@/data/pickles';

interface OrderSummaryProps {
  compact?: boolean;
}

export default function OrderSummary({ compact = false }: OrderSummaryProps) {
  const items: CartItem[] = useAppSelector((state) => state.cart.items);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (items.length === 0) return null;

  return (
    <div className="bg-softCream rounded-2xl p-6 border border-warmTaupe/20 shadow-sm">
      <h2 className="font-serif font-bold text-espresso mb-4 text-lg border-b border-warmTaupe/15 pb-2">
        Order Summary ({items.length} {items.length === 1 ? 'item' : 'items'})
      </h2>
      <ul className="space-y-3.5 mb-5">
        {items.map((item) => {
          const itemImg = item.image || pickles.find((p) => p.id === item.pickleId)?.image || '/aruh/Aruh_icon.webp';
          return (
            <li key={item.id} className="flex justify-between items-center text-sm gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="relative w-10 h-10 rounded-lg overflow-hidden shrink-0 bg-pureWhite border border-warmTaupe/15 shadow-xs">
                  <Image
                    src={itemImg}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div className="min-w-0">
                  <span className="font-medium text-espresso block truncate">{item.name}</span>
                  <span className="text-warmTaupe text-xs">
                    {item.size}
                    {!compact && ` · ${formatPrice(item.price)} × ${item.quantity}`}
                  </span>
                </div>
              </div>
              <span className="font-serif font-bold text-espresso ml-2 shrink-0">
                {formatPrice(item.price * item.quantity)}
              </span>
            </li>
          );
        })}
      </ul>
      <div className="border-t border-warmTaupe/20 pt-4 flex justify-between items-center">
        <span className="font-serif font-bold text-espresso text-base">Grand Total</span>
        <span className="text-2xl font-bold text-oliveGreen font-serif">{formatPrice(total)}</span>
      </div>
    </div>
  );
}

