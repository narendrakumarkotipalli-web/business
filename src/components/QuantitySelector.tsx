'use client';

import { Minus, Plus } from 'lucide-react';

interface QuantitySelectorProps {
  quantity: number;
  min?: number;
  max?: number;
  onChange: (quantity: number) => void;
}

export default function QuantitySelector({
  quantity,
  min = 1,
  max = 20,
  onChange,
}: QuantitySelectorProps) {
  return (
    <div className="flex items-center gap-2" role="group" aria-label="Quantity selector">
      <button
        type="button"
        onClick={() => onChange(Math.max(min, quantity - 1))}
        disabled={quantity <= min}
        aria-label="Decrease quantity"
        className="w-8 h-8 rounded-lg border border-warmTaupe/25 flex items-center justify-center text-espresso hover:border-oliveGreen hover:text-oliveGreen hover:bg-oliveGreen/5 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
      >
        <Minus size={13} />
      </button>
      <span className="w-7 text-center font-bold text-espresso text-sm" aria-live="polite">
        {quantity}
      </span>
      <button
        type="button"
        onClick={() => onChange(Math.min(max, quantity + 1))}
        disabled={quantity >= max}
        aria-label="Increase quantity"
        className="w-8 h-8 rounded-lg border border-warmTaupe/25 flex items-center justify-center text-espresso hover:border-oliveGreen hover:text-oliveGreen hover:bg-oliveGreen/5 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
      >
        <Plus size={13} />
      </button>
    </div>
  );
}

