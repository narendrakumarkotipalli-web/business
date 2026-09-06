import type { Metadata } from 'next';
import PickleSelectionSection from '@/components/PickleSelectionSection';

export const metadata: Metadata = {
  title: 'Our Traditional Pickles Menu — PickleMart',
  description:
    'Browse our handcrafted range of homemade Andhra pickles — Chicken, Gongura Chicken, Coastal Prawns, Pandu Mirchi, and Tomato pickles. Select pack size and order directly.',
};

export default function PicklesPage() {
  return (
    <div className="py-6 sm:py-10">
      <PickleSelectionSection />
    </div>
  );
}

