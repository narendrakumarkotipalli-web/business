import type { Metadata } from 'next';
import PickleSelectionSection from '@/components/PickleSelectionSection';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aruh.store';

export const metadata: Metadata = {
  title: 'Homemade Andhra Pickles (Non-Veg & Veg) — Buy Online | Aruh Foods',
  description:
    'Browse our handcrafted range of authentic homemade Andhra pickles — Chicken Pickle, Gongura Chicken, Coastal Prawns, Pandu Mirchi, and Tomato pickles. Prepared with pure sesame oil. Delivering in Hyderabad, Kakinada, Samarlkot, Pithapuram.',
  keywords: [
    'homemade Andhra pickles',
    'buy non veg pickles online',
    'buy chicken pickle hyderabad',
    'gongura chicken pickle online',
    'spicy prawns pickle',
    'pandu mirchi pachadi',
    'tomato pickle traditional',
    'Aruh Foods pickles',
  ],
  alternates: {
    canonical: `${siteUrl}/pickles`,
  },
  openGraph: {
    title: 'Authentic Homemade Andhra Pickles Catalog — Aruh Foods',
    description: 'Explore our full menu of traditional Non-Veg and Veg Andhra pickles handcrafted in small batches.',
    url: `${siteUrl}/pickles`,
  },
};

export default function PicklesPage() {
  return (
    <div className="py-6 sm:py-10">
      <PickleSelectionSection />
    </div>
  );
}
