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
    <div className="flex items-start gap-4 p-5 bg-pureWhite rounded-2xl border border-warmTaupe/15 shadow-[0_2px_12px_-3px_rgba(47,41,35,0.06)]">
      <div className="flex-1 min-w-0">
        <h3 className="font-serif font-bold text-espresso text-base truncate">{item.name}</h3>
        <p className="text-xs text-warmTaupe mt-0.5 font-medium">Pack size: {item.size}</p>
        <p className="text-sm font-semibold text-oliveGreen mt-1.5">
          {formatPrice(item.price)}{' '}
          <span className="text-warmTaupe font-normal text-xs">/ unit</span>
        </p>
      </div>

      <div className="flex flex-col items-end gap-3">
        <button
          type="button"
          onClick={handleRemove}
          aria-label={`Remove ${item.name} from cart`}
          className="text-warmTaupe/60 hover:text-chiliRed transition-colors duration-200 p-1 rounded-lg hover:bg-chiliRed/10"
        >
          <Trash2 size={16} />
        </button>
        <QuantitySelector
          quantity={item.quantity}
          onChange={(q) => dispatch(updateQuantity({ id: item.id, quantity: q }))}
        />
        <p className="text-base font-bold text-espresso font-serif">
          {formatPrice(item.price * item.quantity)}
        </p>
      </div>
    </div>
  );
}

