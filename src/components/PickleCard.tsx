'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ShoppingCart, ChevronDown } from 'lucide-react';
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
      icon: '🛒',
      duration: 2500,
    });
    setQuantity(1);
  };

  return (
    <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300">
      <div className="relative w-full h-52 bg-orange-50">
        <Image
          src={pickle.image}
          alt={pickle.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="p-5 flex flex-col flex-1 gap-4">
        <div>
          <h2 className="text-lg font-bold text-gray-900">{pickle.name}</h2>
          <p className="text-sm text-gray-600 mt-1 leading-relaxed">{pickle.description}</p>
        </div>

        <button
          onClick={() => setShowIngredients((p) => !p)}
          className="flex items-center gap-1 text-xs text-orange-500 font-semibold w-fit hover:underline"
          aria-expanded={showIngredients}
        >
          Ingredients{' '}
          <ChevronDown
            size={14}
            className={`transition-transform duration-200 ${showIngredients ? 'rotate-180' : ''}`}
          />
        </button>
        {showIngredients && (
          <p className="text-xs text-gray-500 bg-orange-50 rounded-lg p-3 leading-relaxed">
            {pickle.ingredients.join(' · ')}
          </p>
        )}

        <div>
          <p className="text-xs text-gray-500 font-medium mb-2 uppercase tracking-wide">Pack Size</p>
          <SizeSelector sizes={ALL_SIZES} selected={selectedSize} onChange={setSelectedSize} />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500 font-medium mb-0.5">Price</p>
            <p className="text-xl font-bold text-orange-500">{formatPrice(currentPrice)}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 font-medium mb-1.5 text-right">Quantity</p>
            <QuantitySelector quantity={quantity} onChange={setQuantity} />
          </div>
        </div>

        <div className="text-xs text-gray-400 text-right">
          Subtotal: <span className="font-semibold text-gray-700">{formatPrice(currentPrice * quantity)}</span>
        </div>

        <button
          onClick={handleAddToCart}
          className="mt-auto w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-semibold py-3 rounded-xl transition-all duration-200 text-sm"
          aria-label={`Add ${pickle.name} ${selectedSize} to cart`}
        >
          <ShoppingCart size={16} />
          Add to Cart
        </button>
      </div>
    </article>
  );
}
