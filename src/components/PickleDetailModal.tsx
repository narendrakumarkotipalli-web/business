'use client';

import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { X, Flame, Sparkles, Leaf } from 'lucide-react';
import { Pickle } from '@/types';

interface PickleDetailModalProps {
  pickle: Pickle;
  onClose: () => void;
}

export default function PickleDetailModal({ pickle, onClose }: PickleDetailModalProps) {
  const isVeg = pickle.category === 'veg';

  // Lock body scroll and handle Escape key
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);

    return () => {
      document.body.style.overflow = original;
      document.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose]
  );

  const spiceLevelColor =
    pickle.spiceLevel === 'Fiery Hot'
      ? 'text-chiliRed bg-chiliRed/10 border-chiliRed/25'
      : pickle.spiceLevel === 'Medium'
        ? 'text-mustardGold bg-mustardGold/10 border-mustardGold/25'
        : 'text-oliveGreen bg-oliveGreen/10 border-oliveGreen/25';

  const modal = (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-espresso/60 backdrop-blur-sm px-0 sm:px-4 modal-backdrop"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label={`Details for ${pickle.name}`}
    >
      {/* Sheet on mobile, centered card on desktop */}
      <div className="relative w-full sm:max-w-lg bg-warmIvory rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden modal-sheet">
        {/* Image strip */}
        <div className="relative w-full h-48 sm:h-56 bg-softCream overflow-hidden">
          <Image
            src={pickle.image}
            alt={pickle.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 512px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso/50 via-transparent to-transparent pointer-events-none" />

          {/* Drag handle (mobile) */}
          <div className="sm:hidden absolute top-3 left-1/2 -translate-x-1/2 w-10 h-1 bg-white/50 rounded-full" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-espresso hover:bg-white transition-all duration-200 shadow-md"
            aria-label="Close details"
          >
            <X size={16} />
          </button>

          {/* Badges */}
          <div className="absolute bottom-3 left-4 flex items-center gap-2">
            <div
              className="w-5 h-5 bg-white/95 rounded flex items-center justify-center border border-warmTaupe/20"
              title={isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
            >
              <span className={`w-2.5 h-2.5 rounded-full ${isVeg ? 'bg-emerald-600' : 'bg-chiliRed'}`} />
            </div>
            {pickle.tag && (
              <span className="bg-mustardGold text-espresso text-[11px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <Sparkles size={10} />
                {pickle.tag}
              </span>
            )}
            {pickle.spiceLevel && (
              <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border flex items-center gap-1 ${spiceLevelColor}`}>
                <Flame size={10} />
                {pickle.spiceLevel}
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 space-y-4 max-h-[55vh] sm:max-h-[50vh] overflow-y-auto">
          {/* Name & dietary */}
          <div>
            <h2 className="font-serif text-2xl font-bold text-espresso leading-tight">
              {pickle.name}
            </h2>
            <span className={`inline-flex items-center gap-1 text-xs font-semibold mt-1 ${isVeg ? 'text-emerald-700' : 'text-chiliRed'}`}>
              {isVeg ? <Leaf size={12} /> : '🍗'} {isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
            </span>
          </div>

          {/* Description */}
          <div>
            <p className="text-[11px] uppercase tracking-widest text-mustardGold font-bold mb-1.5">
              About this pickle
            </p>
            <p className="text-sm text-warmTaupe leading-relaxed">
              {pickle.description}
            </p>
          </div>

          {/* Ingredients */}
          <div>
            <p className="text-[11px] uppercase tracking-widest text-mustardGold font-bold mb-2">
              Traditional Ingredients
            </p>
            <div className="flex flex-wrap gap-1.5">
              {pickle.ingredients.map((ing) => (
                <span
                  key={ing}
                  className="text-xs bg-pureWhite border border-warmTaupe/20 text-espresso px-2.5 py-1 rounded-full font-medium"
                >
                  {ing}
                </span>
              ))}
            </div>
          </div>

          {/* Quality promise */}
          <div className="bg-oliveGreen/8 border border-oliveGreen/20 rounded-xl px-4 py-3">
            <p className="text-xs text-oliveGreen font-semibold">
              ✓ 100% Homemade &nbsp;·&nbsp; Zero Preservatives &nbsp;·&nbsp; Cold-Pressed Sesame Oil
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}
