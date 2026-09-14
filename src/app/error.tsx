'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service in production
    console.error('Aruh application encountered an error:', error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-pureWhite rounded-3xl shadow-xl border border-chiliRed/10 p-8 text-center relative overflow-hidden z-10">
        {/* Decorative background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-chiliRed/5 rounded-full blur-3xl pointer-events-none -z-10" />
        
        {/* Brand Icon */}
        <div className="w-24 h-24 mx-auto bg-oliveGreen/10 rounded-full border border-oliveGreen/20 flex items-center justify-center mb-6 shadow-sm overflow-hidden shrink-0">
          <Image
            src="/aruh/Aruh_icon.webp"
            alt="Aruh Pickles"
            width={96}
            height={96}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        
        <div className="flex items-center justify-center gap-2 text-chiliRed mb-3">
          <h2 className="font-serif text-2xl font-bold text-espresso">Oops! A little spill</h2>
        </div>
        
        <p className="text-warmTaupe text-sm leading-relaxed mb-8">
          We are incredibly sorry for the inconvenience. Something went wrong while preparing this page. Our chefs have been notified!
        </p>

        <div className="flex justify-center">
          <Link
            href="/"
            className="w-full max-w-[200px] flex items-center justify-center bg-oliveGreen hover:bg-forestGreen active:scale-95 text-white font-semibold py-3 rounded-xl transition-all duration-200 shadow-sm"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
