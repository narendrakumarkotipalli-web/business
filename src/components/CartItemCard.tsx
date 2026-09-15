'use client';

import Image from 'next/image';
import { Trash2 } from 'lucide-react';
import { CartItem } from '@/types';
import { pickles } from '@/data/pickles';
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
  const pickleImage = item.image || pickles.find((p) => p.id === item.pickleId)?.image || '/aruh/Aruh_icon.webp';

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
    toast.success(`${item.name} removed from cart`, { icon: '🗑️', duration: 2000 });
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3.5 sm:gap-5 p-3.5 sm:p-5 bg-pureWhite rounded-2xl border border-warmTaupe/15 shadow-[0_2px_12px_-3px_rgba(47,41,35,0.06)] hover:shadow-md transition-all duration-200">
      <div className="flex items-start gap-3.5 sm:gap-5 flex-1 min-w-0">
        {/* Pickle Image Thumbnail */}
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden shrink-0 bg-softCream border border-warmTaupe/15 shadow-inner">
          <Image
            src={pickleImage}
            alt={item.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 80px, 96px"
          />
        </div>

        <div className="flex-1 min-w-0 flex flex-col justify-between h-full">
          <div className="flex justify-between items-start gap-2">
            <h3 className="font-serif font-bold text-espresso text-base sm:text-lg leading-snug" title={item.name}>
              {item.name}
            </h3>
            {/* Mobile Trash */}
            <button
              type="button"
              onClick={handleRemove}
              aria-label={`Remove ${item.name} from cart`}
              className="sm:hidden text-warmTaupe/60 hover:text-chiliRed transition-colors duration-200 p-1 -mt-1 -mr-1 rounded-lg hover:bg-chiliRed/10 shrink-0"
            >
              <Trash2 size={16} />
            </button>
          </div>
          
          <p className="text-xs text-warmTaupe mt-1 font-medium">
            Pack size: <span className="font-semibold text-espresso">{item.size}</span>
          </p>
          <p className="text-sm font-semibold text-oliveGreen mt-1.5">
            {formatPrice(item.price)}{' '}
            <span className="text-warmTaupe font-normal text-xs">/ unit</span>
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between sm:flex-col sm:items-end gap-3 mt-2 sm:mt-0 pt-3 sm:pt-0 border-t border-warmTaupe/10 sm:border-0 w-full sm:w-auto shrink-0">
        <button
          type="button"
          onClick={handleRemove}
          aria-label={`Remove ${item.name} from cart`}
          className="hidden sm:block text-warmTaupe/60 hover:text-chiliRed transition-colors duration-200 p-1 rounded-lg hover:bg-chiliRed/10"
        >
          <Trash2 size={16} />
        </button>
        <QuantitySelector
          quantity={item.quantity}
          onChange={(q) => dispatch(updateQuantity({ id: item.id, quantity: q }))}
        />
        <p className="text-base sm:text-lg font-bold text-espresso font-serif">
          {formatPrice(item.price * item.quantity)}
        </p>
      </div>
    </div>
  );
}

