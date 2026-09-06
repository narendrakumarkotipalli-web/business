'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ShoppingCart, ChevronDown, Flame, Sparkles } from 'lucide-react';
import toast from 'react-hot-toast';
import { Pickle, PackSize } from '@/types';
import { useAppDispatch } from '@/store/hooks';
import { addToCart } from '@/store/cartSlice';
import { formatPrice } from '@/utils/formatPrice';
import SizeSelector from './SizeSelector';
import QuantitySelector from './QuantitySelector';

interface PickleCardProps {
  pickle: Pickle;
}

const ALL_SIZES: PackSize[] = ['250g', '500g', '1kg'];

export default function PickleCard({ pickle }: PickleCardProps) {
  const dispatch = useAppDispatch();
  const [selectedSize, setSelectedSize] = useState<PackSize>('250g');
  const [quantity, setQuantity] = useState(1);
  const [showIngredients, setShowIngredients] = useState(false);

  const currentPrice = pickle.prices[selectedSize];
  const isVeg = pickle.category === 'veg';

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: `${pickle.id}-${selectedSize}`,
        pickleId: pickle.id,
        name: pickle.name,
        size: selectedSize,
        quantity,
        price: currentPrice,
      })
    );
    toast.success(`${pickle.name} (${selectedSize}) added to cart!`, {
      icon: '🏺',
      duration: 2500,
    });
    setQuantity(1);
  };

  return (
    <article className="group bg-pureWhite rounded-2xl shadow-[0_4px_20px_-4px_rgba(47,41,35,0.08)] hover:shadow-[0_12px_30px_-6px_rgba(47,41,35,0.15)] border border-warmTaupe/15 overflow-hidden flex flex-col transition-all duration-300 transform hover:-translate-y-1">
      {/* Pickle Image Container */}
      <div className="relative w-full h-56 overflow-hidden bg-softCream">
        <Image
          src={pickle.image}
          alt={pickle.name}
          fill
          className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none" />

        {/* Badges on Image */}
        <div className="absolute top-3 left-3 flex flex-wrap items-center gap-2">
          {/* Dietary Indicator */}
          <div
            className="w-5 h-5 bg-white/95 rounded flex items-center justify-center shadow-sm border border-warmTaupe/20"
            title={isVeg ? '100% Vegetarian' : 'Non-Vegetarian Delicacy'}
          >
            <span
              className={`w-2.5 h-2.5 rounded-full ${isVeg ? 'bg-emerald-600' : 'bg-chiliRed'
                }`}
            />
          </div>

          {/* Tag / Category */}
          {pickle.tag && (
            <span className="bg-mustardGold text-espresso text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-sm flex items-center gap-1">
              <Sparkles size={11} className="text-espresso" />
              {pickle.tag}
            </span>
          )}
        </div>

        {pickle.spiceLevel && (
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full text-[11px] font-semibold text-chiliRed flex items-center gap-1 border border-chiliRed/20 shadow-sm">
            <Flame size={12} className="fill-chiliRed text-chiliRed" />
            {pickle.spiceLevel}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 gap-4">
        <div>
          <h3 className="font-serif text-xl font-bold text-espresso leading-snug group-hover:text-oliveGreen transition-colors duration-200">
            {pickle.name}
          </h3>
          <p className="text-sm text-warmTaupe mt-1.5 line-clamp-2 leading-relaxed">
            {pickle.description}
          </p>
        </div>

        {/* Ingredients accordion */}
        <div>
          <button
            type="button"
            onClick={() => setShowIngredients((p) => !p)}
            className="flex items-center gap-1 text-xs text-oliveGreen hover:text-forestGreen font-semibold tracking-wide"
            aria-expanded={showIngredients}
          >
            View Ingredients
            <ChevronDown
              size={14}
              className={`transition-transform duration-200 ${showIngredients ? 'rotate-180' : ''
                }`}
            />
          </button>
          {showIngredients && (
            <div className="mt-2 text-xs text-warmTaupe bg-softCream rounded-xl p-3 border border-mustardGold/25 leading-relaxed animate-fadeIn">
              <span className="font-semibold text-espresso block mb-1">Traditional recipe made with:</span>
              {pickle.ingredients.join(' · ')}
            </div>
          )}
        </div>

        {/* Pack Size Selector */}
        <div>
          <div className="flex justify-between items-center mb-1.5">
            <span className="text-[11px] text-warmTaupe font-semibold uppercase tracking-wider">
              Select Pack Size
            </span>
            <span className="text-[11px] text-mustardGold font-bold">100% Preservative Free</span>
          </div>
          <SizeSelector sizes={ALL_SIZES} selected={selectedSize} onChange={setSelectedSize} />
        </div>

        {/* Pricing & Quantity */}
        <div className="pt-2 border-t border-warmTaupe/15 flex items-center justify-between">
          <div>
            <p className="text-[11px] text-warmTaupe uppercase tracking-wider font-semibold">Price</p>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-espresso font-serif">
                {formatPrice(currentPrice)}
              </span>
              <span className="text-xs text-warmTaupe">/ {selectedSize}</span>
            </div>
          </div>
          <div>
            <p className="text-[11px] text-warmTaupe uppercase tracking-wider font-semibold mb-1 text-right">
              Quantity
            </p>
            <QuantitySelector quantity={quantity} onChange={setQuantity} />
          </div>
        </div>

        {/* Subtotal notice if > 1 */}
        {quantity > 1 && (
          <div className="text-xs text-right text-warmTaupe">
            Total for {quantity} packs:{' '}
            <span className="font-bold text-espresso">{formatPrice(currentPrice * quantity)}</span>
          </div>
        )}

        {/* Add to Cart CTA */}
        <button
          onClick={handleAddToCart}
          className="mt-auto w-full flex items-center justify-center gap-2 bg-oliveGreen hover:bg-forestGreen active:scale-98 text-white font-semibold py-3.5 rounded-xl transition-all duration-200 shadow-sm shadow-oliveGreen/20 text-sm tracking-wide"
          aria-label={`Add ${pickle.name} ${selectedSize} to cart`}
        >
          <ShoppingCart size={16} />
          Add to Cart · {formatPrice(currentPrice * quantity)}
        </button>
      </div>
    </article>
  );
}

