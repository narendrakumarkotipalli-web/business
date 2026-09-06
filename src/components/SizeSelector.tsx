'use client';

import { PackSize } from '@/types';

interface SizeSelectorProps {
  sizes: PackSize[];
  selected: PackSize;
  onChange: (size: PackSize) => void;
}

export default function SizeSelector({ sizes, selected, onChange }: SizeSelectorProps) {
  return (
    <div className="flex gap-2" role="group" aria-label="Select pack size">
      {sizes.map((size) => (
        <button
          key={size}
          onClick={() => onChange(size)}
          aria-pressed={selected === size}
          className={`flex-1 px-3 py-2 rounded-xl text-xs font-semibold border transition-all duration-200 ${
            selected === size
              ? 'bg-oliveGreen border-oliveGreen text-white shadow-sm shadow-oliveGreen/20'
              : 'border-warmTaupe/25 text-espresso hover:border-oliveGreen hover:text-oliveGreen bg-pureWhite'
          }`}
        >
          {size}
        </button>
      ))}
    </div>
  );
}

