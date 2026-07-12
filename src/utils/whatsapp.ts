import { CartItem, CustomerForm } from '@/types';

export function buildWhatsAppUrl(
  customer: CustomerForm,
  cartItems: CartItem[],
  total: number
): string {
  const itemLines = cartItems.map(
    (item) =>
      `• ${item.name} (${item.size}) x${item.quantity} = ₹${(item.price * item.quantity).toLocaleString('en-IN')}`
  );

  const lines = [
    `🛒 *New Pickle Order*`,
    ``,
    `*Customer Details*`,
    `👤 Name: ${customer.name}`,
    `📞 Phone: ${customer.phone}`,
    `📍 Address: ${customer.address}`,
    ...(customer.note ? [`📝 Note: ${customer.note}`] : []),
    ``,
    `*Order Details*`,
    ...itemLines,
    ``,
    `💰 *Total: ₹${total.toLocaleString('en-IN')}*`,
    ``,
    `_Thank you for ordering from our homemade pickle store!_`,
  ];

  const message = lines.join('\n');
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '';
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
