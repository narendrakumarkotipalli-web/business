'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { MessageCircle, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { clearCart } from '@/store/cartSlice';
import { buildWhatsAppUrl } from '@/utils/whatsapp';
import { CustomerForm } from '@/types';
import toast from 'react-hot-toast';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit Indian mobile number'),
  address: z.string().min(10, 'Please enter a complete delivery address'),
  note: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export default function CheckoutForm() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    if (cartItems.length === 0) {
      toast.error('Your cart is empty. Add some pickles first!');
      return;
    }
    setLoading(true);
    const customer: CustomerForm = {
      name: data.name,
      phone: data.phone,
      address: data.address,
      note: data.note,
    };
    const url = buildWhatsAppUrl(customer, cartItems, total);
    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer');
      dispatch(clearCart());
      reset();
      setLoading(false);
      toast.success('Order placed! Redirecting to WhatsApp...', {
        icon: '✅',
        duration: 3000,
      });
    }, 500);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div>
        <label htmlFor="checkout-name" className="block text-sm font-medium text-gray-700 mb-1.5">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          id="checkout-name"
          type="text"
          autoComplete="name"
          placeholder="e.g. Narendra Kumar"
          {...register('name')}
          className={`w-full px-4 py-3 rounded-xl border text-sm text-gray-900 placeholder-gray-400 outline-none transition-all duration-200 focus:ring-2 focus:ring-orange-400 focus:border-transparent ${
            errors.name ? 'border-red-400 bg-red-50' : 'border-gray-300 bg-white'
          }`}
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1.5" role="alert">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="checkout-phone" className="block text-sm font-medium text-gray-700 mb-1.5">
          WhatsApp / Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          id="checkout-phone"
          type="tel"
          autoComplete="tel"
          placeholder="10-digit mobile number"
          {...register('phone')}
          className={`w-full px-4 py-3 rounded-xl border text-sm text-gray-900 placeholder-gray-400 outline-none transition-all duration-200 focus:ring-2 focus:ring-orange-400 focus:border-transparent ${
            errors.phone ? 'border-red-400 bg-red-50' : 'border-gray-300 bg-white'
          }`}
        />
        {errors.phone && (
          <p className="text-red-500 text-xs mt-1.5" role="alert">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="checkout-address" className="block text-sm font-medium text-gray-700 mb-1.5">
          Delivery Address <span className="text-red-500">*</span>
        </label>
        <textarea
          id="checkout-address"
          rows={3}
          autoComplete="street-address"
          placeholder="House/Flat No, Street, City, State, PIN"
          {...register('address')}
          className={`w-full px-4 py-3 rounded-xl border text-sm text-gray-900 placeholder-gray-400 outline-none transition-all duration-200 focus:ring-2 focus:ring-orange-400 focus:border-transparent resize-none ${
            errors.address ? 'border-red-400 bg-red-50' : 'border-gray-300 bg-white'
          }`}
        />
        {errors.address && (
          <p className="text-red-500 text-xs mt-1.5" role="alert">{errors.address.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="checkout-note" className="block text-sm font-medium text-gray-700 mb-1.5">
          Special Instructions{' '}
          <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <textarea
          id="checkout-note"
          rows={2}
          placeholder="e.g. Extra spicy, gift wrapping, etc."
          {...register('note')}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-sm text-gray-900 placeholder-gray-400 outline-none transition-all duration-200 focus:ring-2 focus:ring-orange-400 focus:border-transparent resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading || cartItems.length === 0}
        className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all duration-200 text-base"
        aria-label="Place order via WhatsApp"
      >
        {loading ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Preparing Order...
          </>
        ) : (
          <>
            <MessageCircle size={18} />
            Place Order via WhatsApp
          </>
        )}
      </button>

      <p className="text-center text-xs text-gray-400">
        Your order details will be sent to us on WhatsApp. We will confirm shortly.
      </p>
    </form>
  );
}
