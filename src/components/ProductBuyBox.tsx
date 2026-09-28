'use client';

import { useState } from 'react';
import { Pickle, PackSize } from '@/types';
import { useAppDispatch } from '@/store/hooks';
import { addToCart } from '@/store/cartSlice';
import { formatPrice } from '@/utils/formatPrice';
import { buildWhatsAppSingleItemUrl } from '@/utils/whatsapp';
import WhatsAppIcon from './WhatsAppIcon';
import { ShoppingBag, Check } from 'lucide-react';
import toast from 'react-hot-toast';

interface ProductBuyBoxProps {
  pickle: Pickle;
}

export default function ProductBuyBox({ pickle }: ProductBuyBoxProps) {
  const [selectedSize, setSelectedSize] = useState<PackSize>('500g');
  const [added, setAdded] = useState(false);
  const dispatch = useAppDispatch();

  const price = pickle.prices[selectedSize];

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: `${pickle.id}-${selectedSize}`,
        pickleId: pickle.id,
        name: pickle.name,
        size: selectedSize,
        quantity: 1,
        price,
        image: pickle.image,
      })
    );

    setAdded(true);
    toast.success(`Added ${pickle.name} (${selectedSize}) to cart!`);

    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  const handleDirectWhatsAppOrder = () => {
    const url = buildWhatsAppSingleItemUrl(pickle.name, selectedSize, price);
    window.open(url, '_blank');
  };

  return (
    <div className="bg-pureWhite p-6 rounded-2xl border border-warmTaupe/15 shadow-sm space-y-6">
      {/* Size Selection */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-espresso mb-2">
          Select Quantity / Pack Size
        </label>
        <div className="grid grid-cols-3 gap-3">
          {(Object.keys(pickle.prices) as PackSize[]).map((size) => {
            const isSelected = selectedSize === size;
            return (
              <button
                key={size}
                type="button"
                onClick={() => setSelectedSize(size)}
                className={`py-3 px-3 rounded-xl border text-center transition-all ${
                  isSelected
                    ? 'border-oliveGreen bg-oliveGreen/10 text-espresso font-bold shadow-xs'
                    : 'border-warmTaupe/20 bg-warmIvory/30 text-warmTaupe hover:border-warmTaupe/40 font-medium'
                }`}
              >
                <div className="text-sm">{size}</div>
                <div className="text-xs font-bold text-oliveGreen mt-0.5">
                  {formatPrice(pickle.prices[size])}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Price Display */}
      <div className="flex items-baseline justify-between pt-2 border-t border-warmTaupe/10">
        <span className="text-sm font-medium text-warmTaupe">Price ({selectedSize}):</span>
        <span className="text-3xl font-serif font-bold text-oliveGreen">
          {formatPrice(price)}
        </span>
      </div>

      {/* Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <button
          type="button"
          onClick={handleAddToCart}
          className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md ${
            added
              ? 'bg-emerald-600 text-white'
              : 'bg-oliveGreen hover:bg-forestGreen text-white active:scale-98 shadow-oliveGreen/20'
          }`}
        >
          {added ? (
            <>
              <Check size={16} /> Added to Cart
            </>
          ) : (
            <>
              <ShoppingBag size={16} /> Add to Cart
            </>
          )}
        </button>

        <button
          type="button"
          onClick={handleDirectWhatsAppOrder}
          className="w-full py-3.5 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white transition-all shadow-md active:scale-98"
        >
          <WhatsAppIcon size={16} /> Order on WhatsApp
        </button>
      </div>
    </div>
  );
}
