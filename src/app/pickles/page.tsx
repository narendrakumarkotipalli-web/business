import type { Metadata } from 'next';
import PickleSelectionSection from '@/components/PickleSelectionSection';

export const metadata: Metadata = {
  title: 'Pickles — Aruh Homemade Andhra Pickles',
  description:
    'Browse our handcrafted range of homemade Andhra pickles — Chicken, Gongura Chicken, Coastal Prawns, Pandu Mirchi, and Tomato pickles. Select pack size and order directly via WhatsApp.',
};

export default function PicklesPage() {
  return (
    <div className="py-6 sm:py-10">
      <PickleSelectionSection />
    </div>
  );
}
