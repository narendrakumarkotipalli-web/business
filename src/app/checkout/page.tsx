import type { Metadata } from 'next';
import CheckoutForm from '@/components/CheckoutForm';
import OrderSummary from '@/components/OrderSummary';

export const metadata: Metadata = {
  title: 'Complete Your Order — Aruh Foods',
  description: 'Complete your homemade Andhra pickle order quickly and easily via WhatsApp.',
};

export default function CheckoutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-espresso">
          Checkout & Confirmation
        </h1>
        <p className="text-warmTaupe text-sm mt-1.5 font-medium">
          Fill in your delivery address to generate your instant WhatsApp order request.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div>
          <div className="bg-pureWhite rounded-3xl border border-warmTaupe/15 shadow-md p-6 sm:p-8">
            <h2 className="font-serif font-bold text-espresso mb-6 text-lg border-b border-warmTaupe/15 pb-2">
              Delivery Details
            </h2>
            <CheckoutForm />
          </div>
        </div>

        <div className="lg:sticky lg:top-28 space-y-4">
          <OrderSummary />
          <div className="bg-softCream border border-oliveGreen/20 rounded-2xl p-5 shadow-xs">
            <p className="text-xs text-oliveGreen font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <span>📲</span> Instant WhatsApp Confirmation
            </p>
            <ol className="text-xs text-espresso/80 space-y-2 list-decimal list-inside leading-relaxed font-medium">
              <li>Submit your delivery address and optional notes</li>
              <li>Click &quot;Place Order via WhatsApp&quot; button</li>
              <li>WhatsApp opens immediately with your pre-formatted order</li>
              <li>Send the text message — we acknowledge and dispatch swiftly!</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

