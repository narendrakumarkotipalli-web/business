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
          className={`px-3 py-1.5 rounded-lg text-sm font-semibold border transition-all duration-200 ${
            selected === size
              ? 'bg-orange-500 border-orange-500 text-white shadow-sm'
              : 'border-gray-300 text-gray-700 hover:border-orange-400 hover:text-orange-500 bg-white'
          }`}
        >
          {size}
        </button>
      ))}
    </div>
  );
}
