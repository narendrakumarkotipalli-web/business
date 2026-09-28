import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Aruh Foods — Authentic Homemade Andhra Pickles',
    short_name: 'Aruh Foods',
    description:
      'Order authentic homemade Andhra & Rayalaseema pickles online. Handcrafted Chicken, Gongura Chicken, Coastal Prawns, Pandu Mirchi, and Tomato pickles.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FFF8E7',
    theme_color: '#556B2F',
    icons: [
      {
        src: '/aruh/Aruh_icon.webp',
        sizes: '192x192',
        type: 'image/webp',
      },
      {
        src: '/aruh/Aruh_icon.webp',
        sizes: '512x512',
        type: 'image/webp',
      },
    ],
  };
}
