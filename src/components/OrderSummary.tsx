'use client';

import { useAppSelector } from '@/store/hooks';
import { formatPrice } from '@/utils/formatPrice';
import { CartItem } from '@/types';

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
      <ul className="space-y-3 mb-5">
        {items.map((item) => (
          <li key={item.id} className="flex justify-between items-start text-sm">
            <div>
              <span className="font-medium text-espresso">{item.name}</span>
              <span className="text-warmTaupe ml-1 text-xs">({item.size})</span>
              {!compact && (
                <p className="text-xs text-warmTaupe/80 mt-0.5">
                  {formatPrice(item.price)} × {item.quantity}
                </p>
              )}
            </div>
            <span className="font-serif font-bold text-espresso ml-4 shrink-0">
              {formatPrice(item.price * item.quantity)}
            </span>
          </li>
        ))}
      </ul>
      <div className="border-t border-warmTaupe/20 pt-4 flex justify-between items-center">
        <span className="font-serif font-bold text-espresso text-base">Grand Total</span>
        <span className="text-2xl font-bold text-oliveGreen font-serif">{formatPrice(total)}</span>
      </div>
    </div>
  );
}

