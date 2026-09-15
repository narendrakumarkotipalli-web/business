import { CartItem, CustomerForm } from '@/types';

export function buildWhatsAppUrl(
  customer: CustomerForm,
  cartItems: CartItem[],
  total: number
): string {
  const formatPrice = (amount: number) => `₹${amount.toLocaleString('en-IN')}`;

  const itemLines = cartItems.flatMap((item, index) => [
    `${index + 1}. *${item.name}*`,
    `   • Pack Size: ${item.size}`,
    `   • Quantity: ${item.quantity}`,
    `   • Unit Price: ${formatPrice(item.price)}`,
    `   • Item Total: *${formatPrice(item.price * item.quantity)}*`,
    ``,
  ]);

  const lines = [
    `🌶️ *ARUH PICKLES ORDER*`,
    `━━━━━━━━━━━━━━━━━━━━`,
    ``,
    `👤 *CUSTOMER DETAILS*`,
    `Name: ${customer.name}`,
    `Phone: ${customer.phone}`,
    `Delivery Address:`,
    `${customer.address}`,
    ...(customer.note ? [`Special Instructions:`, `${customer.note}`] : []),
    ``,
    `🛍️ *ORDER DETAILS*`,
    ...itemLines,
    `━━━━━━━━━━━━━━━━━━━━`,
    `💰 *GRAND TOTAL: ${formatPrice(total)}*`,
    ``,
    `Please confirm my order and share the payment details.`,
    ``,
    `_Thank you for choosing Aruh Pickles!_`,
  ];

  const message = lines.join('\n');
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '917702925319';
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function buildWhatsAppInquiryUrl(
  customMessage = 'Hi Aruh! 👋 I would like to know more details about your authentic homemade pickles, spices, and delivery.'
): string {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '917702925319';
  return `https://wa.me/${number}?text=${encodeURIComponent(customMessage)}`;
}
