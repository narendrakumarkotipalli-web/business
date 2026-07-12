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
    <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100">
      <h2 className="font-bold text-gray-900 mb-4 text-base">
        Order Summary ({items.length} {items.length === 1 ? 'item' : 'items'})
      </h2>
      <ul className="space-y-2.5 mb-4">
        {items.map((item) => (
          <li key={item.id} className="flex justify-between items-start text-sm">
            <div>
              <span className="font-medium text-gray-800">{item.name}</span>
              <span className="text-gray-500 ml-1">({item.size})</span>
              {!compact && (
                <p className="text-xs text-gray-400">
                  {formatPrice(item.price)} × {item.quantity}
                </p>
              )}
            </div>
            <span className="font-semibold text-gray-900 ml-4">
              {formatPrice(item.price * item.quantity)}
            </span>
          </li>
        ))}
      </ul>
      <div className="border-t border-orange-200 pt-3 flex justify-between items-center">
        <span className="font-bold text-gray-900">Total</span>
        <span className="text-xl font-bold text-orange-500">{formatPrice(total)}</span>
      </div>
    </div>
  );
}
