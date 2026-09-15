'use client';

import { useState, useMemo, useCallback } from 'react';
import { pickles } from '@/data/pickles';
import PickleCard from './PickleCard';
import { Sparkles, Utensils, Leaf, Search, X, MapPin } from 'lucide-react';

const LOCATIONS = [
  'Hyderabad (All Areas)',
  'Kakinada',
  'Samarlkot',
  'Pithapuram & Surrounding Villages',
];

export default function PickleSelectionSection() {
  const [activeTab, setActiveTab] = useState<'all' | 'non-veg' | 'veg'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const handleTabChange = useCallback((id: 'all' | 'non-veg' | 'veg') => {
    setActiveTab(id);
  }, []);

  const handleClearSearch = useCallback(() => {
    setSearchQuery('');
  }, []);

  const filteredPickles = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return pickles.filter((pickle) => {
      const categoryMatch = activeTab === 'all' || pickle.category === activeTab;
      if (!q) return categoryMatch;
      const nameMatch = pickle.name.toLowerCase().includes(q);
      const ingMatch = pickle.ingredients.some((i) => i.toLowerCase().includes(q));
      const descMatch = pickle.description.toLowerCase().includes(q);
      return categoryMatch && (nameMatch || ingMatch || descMatch);
    });
  }, [activeTab, searchQuery]);

  const categories = [
    {
      id: 'all' as const,
      label: 'All',
      count: pickles.length,
      icon: Sparkles,
    },
    {
      id: 'non-veg' as const,
      label: 'Non-Veg',
      count: pickles.filter((p) => p.category === 'non-veg').length,
      icon: Utensils,
    },
    {
      id: 'veg' as const,
      label: 'Veg',
      count: pickles.filter((p) => p.category === 'veg').length,
      icon: Leaf,
    },
  ];

  return (
    <section id="select-pickles" className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 py-12 sm:py-16" aria-label="Pickle selection">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-mustardGold font-bold mb-2">
          ✨ Freshly Made in Small Batches
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-espresso">
          Select Your Pickles
        </h2>
        <p className="text-warmTaupe mt-3 text-sm sm:text-base leading-relaxed">
          Handcrafted with cold-pressed sesame oil and zero preservatives. Delivering across Hyderabad, Kakinada, Samarlkot and Pithapuram.
        </p>
      </div>

      {/* Delivery Locations Strip */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
        <span className="text-xs text-warmTaupe font-semibold mr-1">📍 Available in:</span>
        {LOCATIONS.map((loc) => (
          <span
            key={loc}
            className="inline-flex items-center gap-1 text-[11px] font-medium bg-oliveGreen/8 border border-oliveGreen/20 text-oliveGreen px-2.5 py-1 rounded-full"
          >
            <MapPin size={10} />
            {loc}
          </span>
        ))}
      </div>

      {/* Search Bar */}
      <div className="relative max-w-md mx-auto mb-6">
        <Search
          size={16}
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-warmTaupe pointer-events-none"
        />
        <input
          id="pickle-search"
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by name, ingredient…"
          className="w-full pl-10 pr-10 py-2.5 text-sm border border-warmTaupe/25 rounded-xl bg-pureWhite text-espresso placeholder-warmTaupe/60 focus:outline-none focus:border-oliveGreen focus:ring-2 focus:ring-oliveGreen/15 transition-all duration-200 shadow-sm"
          aria-label="Search pickles"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={handleClearSearch}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-warmTaupe hover:text-espresso transition-colors"
            aria-label="Clear search"
          >
            <X size={14} />
          </button>
        )}
      </div>

      {/* Category Filter Tabs */}
      <nav aria-label="Category filter" className="flex items-center justify-center gap-1.5 sm:gap-2 mb-8 p-1.5 bg-softCream rounded-2xl border border-warmTaupe/15 w-full max-w-[95%] sm:max-w-md mx-auto shadow-inner overflow-x-auto">
        {categories.map(({ id, label, count, icon: Icon }) => {
          const isActive = activeTab === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => handleTabChange(id)}
              className={`flex-1 flex items-center justify-center gap-1 sm:gap-1.5 px-2 py-2 sm:px-3.5 rounded-xl text-[10px] sm:text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                isActive
                  ? 'bg-oliveGreen text-white shadow-sm shadow-oliveGreen/25'
                  : 'text-warmTaupe hover:text-espresso hover:bg-white/60'
              }`}
            >
              <Icon size={12} className={isActive ? 'text-white' : 'text-mustardGold'} />
              <span>{label}</span>
              <span
                className={`text-[10px] px-1.5 rounded-full font-bold ${
                  isActive ? 'bg-white/20 text-white' : 'bg-warmTaupe/10 text-warmTaupe'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Results count */}
      {searchQuery && (
        <p className="text-center text-xs text-warmTaupe mb-4">
          {filteredPickles.length === 0
            ? 'No pickles found'
            : `${filteredPickles.length} pickle${filteredPickles.length > 1 ? 's' : ''} found`}
        </p>
      )}

      {/* Pickles Grid — 1 col mobile (horizontal cards), 2 on sm, 3 on lg */}
      {filteredPickles.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 items-stretch">
          {filteredPickles.map((pickle, index) => (
            <div
              key={pickle.id}
              className="pickle-card-wrapper h-full flex flex-col"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <PickleCard pickle={pickle} priority={index < 4} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="text-4xl mb-3">🔍</div>
          <p className="text-warmTaupe text-sm">No pickles match your search. Try a different keyword.</p>
          <button
            type="button"
            onClick={handleClearSearch}
            className="mt-4 text-xs text-oliveGreen font-semibold hover:underline"
          >
            Clear Search
          </button>
        </div>
      )}
    </section>
  );
}
