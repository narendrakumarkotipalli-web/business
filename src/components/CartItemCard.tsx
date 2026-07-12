'use client';

import { Trash2 } from 'lucide-react';
import { CartItem } from '@/types';
import { useAppDispatch } from '@/store/hooks';
import { removeFromCart, updateQuantity } from '@/store/cartSlice';
import { formatPrice } from '@/utils/formatPrice';
import QuantitySelector from './QuantitySelector';
import toast from 'react-hot-toast';

interface CartItemCardProps {
  item: CartItem;
}

export default function CartItemCard({ item }: CartItemCardProps) {
  const dispatch = useAppDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
    toast.success(`${item.name} removed from cart`, { icon: '🗑️', duration: 2000 });
  };

  return (
    <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-gray-900 text-sm truncate">{item.name}</h3>
        <p className="text-xs text-gray-500 mt-0.5">Pack: {item.size}</p>
        <p className="text-sm font-medium text-orange-500 mt-1">
          {formatPrice(item.price)} <span className="text-gray-400 text-xs">/ unit</span>
        </p>
      </div>

      <div className="flex flex-col items-end gap-3">
        <button
          onClick={handleRemove}
          aria-label={`Remove ${item.name} from cart`}
          className="text-gray-400 hover:text-red-500 transition-colors duration-200"
        >
          <Trash2 size={16} />
        </button>
        <QuantitySelector
          quantity={item.quantity}
          onChange={(q) => dispatch(updateQuantity({ id: item.id, quantity: q }))}
        />
        <p className="text-sm font-bold text-gray-900">
          {formatPrice(item.price * item.quantity)}
        </p>
      </div>
    </div>
  );
}
