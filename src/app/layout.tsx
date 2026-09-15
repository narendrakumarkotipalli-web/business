import type { Metadata } from 'next';
import { Playfair_Display, Poppins } from 'next/font/google';
import './globals.css';
import ReduxProvider from '@/store/Provider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsAppButton from '@/components/FloatingWhatsAppButton';
import { Toaster } from 'react-hot-toast';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Aruh Foods — Authentic Homemade Non-Veg & Veg Pickles',
  description:
    'Order authentic homemade Andhra pickles online. Handcrafted Chicken, Gongura Chicken, Prawns, Pandu Mirchi, and Tomato pickles made with traditional recipes. Delivering in Hyderabad, Kakinada, Samarlkot, and Pithapuram.',
  keywords: 'homemade pickles, Andhra pickles, non-veg pickles, veg pickles, chicken pickle, gongura pickle, prawns pickle, pandu mirchi pickle, tomato pickle, Aruh foods, Aruh pickles',
  icons: {
    icon: '/aruh/Aruh_icon.webp',
  },
  openGraph: {
    title: 'Aruh Foods — Authentic Homemade Traditional Pickles',
    description: 'Order fresh homemade traditional Andhra pickles online.',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://aruhpickles.com', // Replace with actual domain when ready
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FoodEstablishment',
  name: 'Aruh Foods',
  image: '/aruh/Aruh_icon.webp',
  description: 'Authentic Homemade Non-Veg & Veg Andhra Pickles',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Hyderabad',
    addressRegion: 'Andhra Pradesh',
    addressCountry: 'IN',
  },
  servesCuisine: 'Andhra, Indian',
  priceRange: '₹₹',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body className="bg-warmIvory text-espresso font-sans min-h-screen flex flex-col antialiased selection:bg-mustardGold/30 selection:text-espresso">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ReduxProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingWhatsAppButton />
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                borderRadius: '12px',
                background: '#2F2923',
                color: '#FFF8E7',
                fontSize: '14px',
                fontFamily: 'var(--font-poppins)',
              },
            }}
          />
        </ReduxProvider>
      </body>
    </html>
  );
}

