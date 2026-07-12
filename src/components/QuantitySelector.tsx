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
    <div className="flex items-center gap-3" role="group" aria-label="Quantity selector">
      <button
        onClick={() => onChange(Math.max(min, quantity - 1))}
        disabled={quantity <= min}
        aria-label="Decrease quantity"
        className="w-8 h-8 rounded-lg border border-gray-300 flex items-center justify-center text-gray-700 hover:border-orange-400 hover:text-orange-500 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
      >
        <Minus size={14} />
      </button>
      <span className="w-8 text-center font-semibold text-gray-900 text-sm" aria-live="polite">
        {quantity}
      </span>
      <button
        onClick={() => onChange(Math.min(max, quantity + 1))}
        disabled={quantity >= max}
        aria-label="Increase quantity"
        className="w-8 h-8 rounded-lg border border-gray-300 flex items-center justify-center text-gray-700 hover:border-orange-400 hover:text-orange-500 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
      >
        <Plus size={14} />
      </button>
    </div>
  );
}
