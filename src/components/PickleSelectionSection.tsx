'use client';

import { useState } from 'react';
import { pickles } from '@/data/pickles';
import PickleCard from './PickleCard';
import { Sparkles, Utensils, Leaf } from 'lucide-react';

export default function PickleSelectionSection() {
  const [activeTab, setActiveTab] = useState<'all' | 'non-veg' | 'veg'>('all');

  const filteredPickles = pickles.filter((pickle) => {
    if (activeTab === 'all') return true;
    return pickle.category === activeTab;
  });

  const categories = [
    {
      id: 'all',
      label: 'All Delicacies',
      count: pickles.length,
      icon: Sparkles,
    },
    {
      id: 'non-veg',
      label: 'Non-Veg Specialties',
      count: pickles.filter((p) => p.category === 'non-veg').length,
      icon: Utensils,
    },
    {
      id: 'veg',
      label: 'Vegetarian Classics',
      count: pickles.filter((p) => p.category === 'veg').length,
      icon: Leaf,
    },
  ] as const;

  return (
    <section id="select-pickles" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16" aria-label="Pickle selection">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-mustardGold font-bold mb-2">
          ✨ Freshly Made in Small Batches
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-espresso">
          Select Your Pickles
        </h2>
        <p className="text-warmTaupe mt-3 text-sm sm:text-base leading-relaxed">
          Choose from our signature non-veg delicacies or classic Andhra vegetarian pickles. Handcrafted with cold-pressed sesame oil and zero preservatives.
        </p>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8 p-1.5 bg-softCream rounded-2xl border border-warmTaupe/15 inline-flex shadow-inner">
          {categories.map(({ id, label, count, icon: Icon }) => {
            const isActive = activeTab === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => setActiveTab(id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-oliveGreen text-white shadow-sm shadow-oliveGreen/25'
                    : 'text-warmTaupe hover:text-espresso hover:bg-white/60'
                }`}
              >
                <Icon size={14} className={isActive ? 'text-white' : 'text-mustardGold'} />
                <span>{label}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.2 rounded-full font-bold ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-warmTaupe/10 text-warmTaupe'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Pickles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPickles.map((pickle) => (
          <PickleCard key={pickle.id} pickle={pickle} />
        ))}
      </div>
    </section>
  );
}
