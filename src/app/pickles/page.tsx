import type { Metadata } from 'next';
import { pickles } from '@/data/pickles';
import PickleCard from '@/components/PickleCard';

export const metadata: Metadata = {
  title: 'Our Pickles — PickleMart',
  description:
    'Browse our full range of homemade non-veg pickles. Choose your pack size and quantity. Chicken, Gongura Chicken, and Prawns pickles available.',
};

export default function PicklesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Our Pickles</h1>
        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          Select your favourite pickle, choose a pack size, and add to cart.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pickles.map((pickle) => (
          <PickleCard key={pickle.id} pickle={pickle} />
        ))}
      </div>
    </div>
  );
}
