import type { Metadata } from 'next';
import CheckoutForm from '@/components/CheckoutForm';
import OrderSummary from '@/components/OrderSummary';

export const metadata: Metadata = {
  title: 'Checkout — PickleMart',
  description: 'Complete your pickle order. Place your order via WhatsApp.',
};

export default function CheckoutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Checkout</h1>
        <p className="text-gray-500 text-sm mt-1">
          Fill in your details and place your order via WhatsApp.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h2 className="font-bold text-gray-900 mb-6 text-base">Contact Details</h2>
            <CheckoutForm />
          </div>
        </div>

        <div className="lg:sticky lg:top-20 lg:self-start">
          <OrderSummary />
          <div className="mt-4 bg-green-50 border border-green-100 rounded-2xl p-4">
            <p className="text-xs text-green-700 font-medium mb-1">📲 How it works</p>
            <ol className="text-xs text-green-600 space-y-1 list-decimal list-inside">
              <li>Fill your contact details</li>
              <li>Click &quot;Place Order via WhatsApp&quot;</li>
              <li>WhatsApp opens with your order pre-filled</li>
              <li>Send the message — we confirm within minutes!</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
