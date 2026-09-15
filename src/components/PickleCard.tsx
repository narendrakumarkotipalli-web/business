'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { ShoppingCart, Flame, Sparkles, Info, Leaf } from 'lucide-react';
import toast from 'react-hot-toast';
import { Pickle, PackSize } from '@/types';
import { useAppDispatch } from '@/store/hooks';
import { addToCart } from '@/store/cartSlice';
import { formatPrice } from '@/utils/formatPrice';
import SizeSelector from './SizeSelector';
import QuantitySelector from './QuantitySelector';
import PickleDetailModal from './PickleDetailModal';

interface PickleCardProps {
  pickle: Pickle;
  priority?: boolean;
}

const ALL_SIZES: PackSize[] = ['250g', '500g', '1kg'];

export default function PickleCard({ pickle, priority = false }: PickleCardProps) {
  const dispatch = useAppDispatch();
  const [selectedSize, setSelectedSize] = useState<PackSize>('250g');
  const [quantity, setQuantity] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);

  const currentPrice = pickle.prices[selectedSize];
  const isVeg = pickle.category === 'veg';

  const handleAddToCart = useCallback(() => {
    dispatch(
      addToCart({
        id: `${pickle.id}-${selectedSize}`,
        pickleId: pickle.id,
        name: pickle.name,
        size: selectedSize,
        quantity,
        price: currentPrice,
        image: pickle.image,
      })
    );
    toast.success(`${pickle.name} (${selectedSize}) added to cart!`, {
      icon: (
        <span className="w-6 h-6 rounded-full overflow-hidden shrink-0 inline-flex items-center justify-center border border-mustardGold/30 bg-pureWhite shadow-xs">
          <Image
            src="/aruh/Aruh_icon.webp"
            alt="Aruh"
            width={24}
            height={24}
            className="w-full h-full object-cover"
          />
        </span>
      ),
      duration: 2500,
    });
    setQuantity(1);
  }, [dispatch, pickle.id, pickle.name, selectedSize, quantity, currentPrice]);

  return (
    <>
      {/* ─── MOBILE: Card with Full-Width Heading (< sm) ─── */}
      <article className="pickle-card group bg-pureWhite rounded-2xl border border-warmTaupe/15 shadow-sm overflow-hidden
                          flex flex-col sm:hidden
                          transition-all duration-300">

        {/* 1. Full-Width Header: Name, badges & details button */}
        <div className="p-3.5 pb-2.5 bg-warmIvory/40 border-b border-warmTaupe/10">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0 flex-1">
              {/* Badges row */}
              <div className="flex items-center gap-1.5 mb-1.5 flex-wrap">
                {/* Veg / Non-Veg badge */}
                <div
                  className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-white border border-warmTaupe/20 text-[10px] font-semibold text-espresso shadow-2xs"
                  title={isVeg ? '100% Vegetarian' : 'Non-Vegetarian Delicacy'}
                >
                  <span className={`w-2 h-2 rounded-full ${isVeg ? 'bg-emerald-600' : 'bg-chiliRed'}`} />
                  <span>{isVeg ? 'Veg' : 'Non-Veg'}</span>
                </div>

                {pickle.tag && (
                  <span
                    className="inline-flex items-center gap-0.5 text-[10px] bg-mustardGold/15 text-espresso font-bold px-1.5 py-0.5 rounded-full border border-mustardGold/30"
                    title={pickle.tag}
                  >
                    <Sparkles size={8} />{pickle.tag}
                  </span>
                )}

                {pickle.spiceLevel && (
                  <span
                    className="inline-flex items-center gap-0.5 text-[10px] text-chiliRed font-semibold"
                    title={`Spice Level: ${pickle.spiceLevel}`}
                  >
                    <Flame size={9} />{pickle.spiceLevel}
                  </span>
                )}
              </div>

              {/* Full-width heading with tooltip & truncation */}
              <h3 
                className="font-serif font-bold text-espresso text-base leading-snug truncate"
                title={pickle.name}
              >
                {pickle.name}
              </h3>
            </div>

            {/* Info / Details Button */}
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="shrink-0 flex items-center gap-1 text-[11px] text-oliveGreen hover:text-forestGreen font-semibold border border-oliveGreen/30 hover:border-oliveGreen px-2.5 py-1 rounded-full transition-all duration-200 hover:bg-oliveGreen/5 mt-0.5"
              aria-label={`View details for ${pickle.name}`}
              title={`View ingredients & details for ${pickle.name}`}
            >
              <Info size={12} />
              <span>Details</span>
            </button>
          </div>
        </div>

        {/* 2. Middle Body: Image on left, Pack size & pricing on right */}
        <div className="p-3.5 flex gap-3.5 items-center">
          {/* Image Thumbnail */}
          <div 
            className="relative w-24 h-24 rounded-xl shrink-0 bg-softCream overflow-hidden border border-warmTaupe/15 cursor-pointer shadow-xs"
            onClick={() => setModalOpen(true)}
            title={`Click to view details and full image of ${pickle.name}`}
          >
            <Image
              src={pickle.image}
              alt={pickle.name}
              fill
              priority={priority}
              loading={priority ? undefined : 'lazy'}
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              sizes="96px"
            />
          </div>

          {/* Right Column: Pack Size & Price */}
          <div className="flex-1 min-w-0 flex flex-col justify-between gap-2">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-[10px] text-warmTaupe font-semibold uppercase tracking-wider">
                  Pack Size
                </span>
                <span className="text-[10px] text-mustardGold font-bold">Cold-Pressed Oil</span>
              </div>
              {/* Size selector buttons */}
              <div className="flex gap-1" role="group" aria-label="Select pack size">
                {ALL_SIZES.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    aria-pressed={selectedSize === size}
                    className={`flex-1 py-1 rounded-lg text-[11px] font-semibold border transition-all duration-150 ${
                      selectedSize === size
                        ? 'bg-oliveGreen border-oliveGreen text-white shadow-xs'
                        : 'border-warmTaupe/25 text-espresso hover:border-oliveGreen hover:text-oliveGreen bg-pureWhite'
                    }`}
                    title={`Select ${size} pack`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-baseline justify-between pt-0.5">
              <div>
                <span className="text-xs text-warmTaupe block leading-none mb-0.5">Price ({selectedSize})</span>
                <span className="text-lg font-bold text-espresso font-serif leading-none">
                  {formatPrice(currentPrice)}
                </span>
              </div>
              <span className="text-[11px] text-oliveGreen font-medium">
                ✓ No Preservatives
              </span>
            </div>
          </div>
        </div>

        {/* 3. Bottom Bar: Quantity & Full Add to Cart Action */}
        <div className="px-3.5 pb-3.5 pt-2 border-t border-warmTaupe/10 flex items-center justify-between gap-2.5 bg-softCream/30">
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="text-[11px] text-warmTaupe font-medium mr-0.5">Qty:</span>
            <QuantitySelector quantity={quantity} onChange={setQuantity} min={1} max={20} />
          </div>

          <button
            onClick={handleAddToCart}
            className="flex-1 flex items-center justify-center gap-1.5 bg-oliveGreen hover:bg-forestGreen active:scale-95 text-white font-semibold py-2.5 px-3 rounded-xl transition-all duration-200 text-xs shadow-sm shadow-oliveGreen/20"
            aria-label={`Add ${pickle.name} (${selectedSize}) to cart`}
            title={`Add ${pickle.name} (${selectedSize}) to cart`}
          >
            <ShoppingCart size={14} />
            <span>Add · {formatPrice(currentPrice * quantity)}</span>
          </button>
        </div>
      </article>

      {/* ─── DESKTOP: Vertical card (bigger, 3-per-row) ─── */}
      <article className="pickle-card group bg-pureWhite rounded-2xl border border-warmTaupe/15
                          shadow-[0_4px_24px_-4px_rgba(47,41,35,0.09)]
                          hover:shadow-[0_16px_40px_-8px_rgba(47,41,35,0.18)]
                          overflow-hidden flex-col h-full
                          hidden sm:flex
                          transition-all duration-300">

        {/* Image */}
        <div className="relative w-full h-60 lg:h-64 overflow-hidden bg-softCream shrink-0">
          <Image
            src={pickle.image}
            alt={pickle.name}
            fill
            priority={priority}
            loading={priority ? undefined : 'lazy'}
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            sizes="(max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none" />

          {/* Top-left badges */}
          <div className="absolute top-3 left-3 flex flex-wrap items-center gap-2">
            <div
              className="w-5 h-5 bg-white/95 rounded flex items-center justify-center border border-warmTaupe/20 shadow-sm"
              title={isVeg ? '100% Vegetarian' : 'Non-Vegetarian Delicacy'}
            >
              <span className={`w-2.5 h-2.5 rounded-full ${isVeg ? 'bg-emerald-600' : 'bg-chiliRed'}`} />
            </div>
            {pickle.tag && (
              <span className="bg-mustardGold text-espresso text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-sm flex items-center gap-1">
                <Sparkles size={10} />
                {pickle.tag}
              </span>
            )}
          </div>

          {/* Spice badge top-right */}
          {pickle.spiceLevel && (
            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-[11px] font-semibold text-chiliRed flex items-center gap-1 border border-chiliRed/20 shadow-sm">
              <Flame size={11} className="fill-chiliRed text-chiliRed" />
              {pickle.spiceLevel}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5 lg:p-6 flex flex-col flex-1 justify-between gap-4">
          {/* Top info section */}
          <div className="flex flex-col gap-4">
            {/* Name & dietary + info button */}
            <div className="flex items-start justify-between gap-2 min-w-0">
              <div className="min-w-0 flex-1">
                <h3 
                  className="font-serif text-xl font-bold text-espresso leading-snug truncate group-hover:text-oliveGreen transition-colors duration-200"
                  title={pickle.name}
                >
                  {pickle.name}
                </h3>
                <span className={`inline-flex items-center gap-1 text-xs font-semibold mt-1 ${isVeg ? 'text-emerald-700' : 'text-chiliRed'}`}>
                  {isVeg ? <Leaf size={11} /> : '🍗'} {isVeg ? 'Vegetarian' : 'Non-Veg'}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="shrink-0 flex items-center gap-1 text-[11px] text-oliveGreen hover:text-forestGreen font-semibold border border-oliveGreen/30 hover:border-oliveGreen px-2.5 py-1 rounded-full transition-all duration-200 hover:bg-oliveGreen/5"
                aria-label={`View details for ${pickle.name}`}
              >
                <Info size={12} />
                Details
              </button>
            </div>

            {/* Pack Size Selector */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-[11px] text-warmTaupe font-semibold uppercase tracking-wider">
                  Pack Size
                </span>
                <span className="text-[11px] text-mustardGold font-bold">No Preservatives</span>
              </div>
              <SizeSelector sizes={ALL_SIZES} selected={selectedSize} onChange={setSelectedSize} />
            </div>
          </div>

          {/* Bottom section: Pricing & CTA */}
          <div className="flex flex-col gap-3">
            {/* Pricing & Quantity */}
            <div className="pt-3 border-t border-warmTaupe/15 flex items-center justify-between">
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
                  Qty
                </p>
                <QuantitySelector quantity={quantity} onChange={setQuantity} />
              </div>
            </div>

            {/* Subtotal notice reserved height slot */}
            <div className="text-xs text-right text-warmTaupe min-h-[16px] -mt-1">
              {quantity > 1 && (
                <>
                  Total:{' '}
                  <span className="font-bold text-espresso">{formatPrice(currentPrice * quantity)}</span>
                </>
              )}
            </div>

            {/* Add to Cart CTA */}
            <button
              onClick={handleAddToCart}
              className="w-full flex items-center justify-center gap-2 bg-oliveGreen hover:bg-forestGreen active:scale-95 text-white font-semibold py-3.5 rounded-xl transition-all duration-200 shadow-sm shadow-oliveGreen/20 text-sm tracking-wide"
              aria-label={`Add ${pickle.name} ${selectedSize} to cart`}
            >
              <ShoppingCart size={16} />
              Add to Cart · {formatPrice(currentPrice * quantity)}
            </button>
          </div>
        </div>
      </article>

      {/* Detail Modal */}
      {modalOpen && (
        <PickleDetailModal pickle={pickle} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}
