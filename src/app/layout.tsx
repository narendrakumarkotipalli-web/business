import type { Metadata } from 'next';
import { Playfair_Display, Poppins } from 'next/font/google';
import './globals.css';
import ReduxProvider from '@/store/Provider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
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
  title: 'PickleMart — Authentic Homemade Non-Veg & Veg Pickles',
  description:
    'Order authentic homemade Andhra pickles online. Handcrafted Chicken, Gongura Chicken, Prawns, Pandu Mirchi, and Tomato pickles made with traditional recipes. Delivered across India.',
  keywords: 'homemade pickles, Andhra pickles, non-veg pickles, veg pickles, chicken pickle, gongura pickle, prawns pickle, pandu mirchi pickle, tomato pickle, buy pickles online',
  icons: {
    icon: '/aruh_pickles/Aruh_icon.webp',
  },
  openGraph: {
    title: 'PickleMart — Authentic Homemade Traditional Pickles',
    description: 'Order fresh homemade traditional pickles online. Delivered pan-India.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body className="bg-warmIvory text-espresso font-sans min-h-screen flex flex-col antialiased selection:bg-mustardGold/30 selection:text-espresso">
        <ReduxProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
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

