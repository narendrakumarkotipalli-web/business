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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aruh.store';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Aruh Foods — Authentic Homemade Andhra Pickles | Buy Online',
    template: '%s | Aruh Foods',
  },
  description:
    'Order authentic homemade Andhra & Rayalaseema pickles online. Handcrafted Chicken Pickle, Gongura Chicken Pickle, Coastal Prawns Pickle, Pandu Mirchi Pachadi, and Tomato Pickle made with pure cold-pressed sesame oil. Zero chemical preservatives. Fast delivery in Hyderabad, Kakinada, Samarlkot, Pithapuram & across India.',
  keywords: [
    'Andhra pickles online',
    'buy chicken pickle online',
    'homemade non-veg pickles',
    'gongura chicken pickle hyderabad',
    'authentic Andhra pickles',
    'spicy prawns pickle online',
    'pandu mirchi pickle pachadi',
    'traditional tomato pickle',
    'preservative free pickles',
    'Aruh Foods',
    'Aruh pickles',
  ],
  authors: [{ name: 'Aruh Foods', url: siteUrl }],
  creator: 'Aruh Foods',
  publisher: 'Aruh Foods',
  category: 'Food & Beverage',
  icons: {
    icon: '/aruh/Aruh_icon.webp',
    apple: '/aruh/Aruh_icon.webp',
  },
  manifest: '/manifest.webmanifest',
  openGraph: {
    title: 'Aruh Foods — Authentic Homemade Andhra & Rayalaseema Pickles',
    description:
      'Handcrafted Chicken, Gongura Chicken, Prawns, Pandu Mirchi & Tomato pickles online. Made with cold-pressed sesame oil & zero preservatives.',
    url: siteUrl,
    siteName: 'Aruh Foods',
    images: [
      {
        url: `${siteUrl}/aruh/Aruh_icon.webp`,
        width: 800,
        height: 800,
        alt: 'Aruh Foods Authentic Andhra Pickles',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aruh Foods — Authentic Homemade Andhra Pickles',
    description: 'Fresh artisanal pickles made in small batches with cold-pressed sesame oil.',
    images: [`${siteUrl}/aruh/Aruh_icon.webp`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || 'YOUR_GOOGLE_VERIFICATION_CODE',
  },
};

const storeSchema = {
  '@context': 'https://schema.org',
  '@type': 'FoodEstablishment',
  name: 'Aruh Foods',
  url: siteUrl,
  image: `${siteUrl}/aruh/Aruh_icon.webp`,
  description: 'Authentic Homemade Non-Veg & Veg Andhra Pickles crafted in small batches using cold-pressed sesame oil.',
  priceRange: '₹₹',
  servesCuisine: 'Andhra, Indian, Rayalaseema',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Hyderabad',
    addressRegion: 'Telangana & Andhra Pradesh',
    addressCountry: 'IN',
  },
  areaServed: ['Hyderabad', 'Kakinada', 'Samarlkot', 'Pithapuram', 'India'],
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, UPI, Online Payment',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Artisanal Pickles Catalog',
    itemListElement: [
      {
        '@type': 'OfferCatalog',
        name: 'Non-Veg Pickles',
      },
      {
        '@type': 'OfferCatalog',
        name: 'Veg Pickles',
      },
    ],
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Aruh Foods',
  url: siteUrl,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteUrl}/pickles?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body className="bg-warmIvory text-espresso font-sans min-h-screen flex flex-col antialiased selection:bg-mustardGold/30 selection:text-espresso">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(storeSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
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

