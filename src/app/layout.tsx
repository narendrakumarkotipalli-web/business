import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ReduxProvider from '@/store/Provider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'PickleMart — Authentic Homemade Non-Veg Pickles',
  description:
    'Order fresh, authentic, homemade non-veg pickles online. Chicken, Gongura Chicken, and Prawns pickles made with traditional recipes. Delivered across India.',
  keywords: 'homemade pickles, non-veg pickles, chicken pickle, gongura pickle, prawns pickle, buy pickles online',
  openGraph: {
    title: 'PickleMart — Authentic Homemade Non-Veg Pickles',
    description: 'Order fresh homemade non-veg pickles online. Delivered pan-India.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-gray-50 text-gray-900 font-sans min-h-screen flex flex-col antialiased">
        <ReduxProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                borderRadius: '12px',
                background: '#1f2937',
                color: '#fff',
                fontSize: '14px',
              },
            }}
          />
        </ReduxProvider>
      </body>
    </html>
  );
}
