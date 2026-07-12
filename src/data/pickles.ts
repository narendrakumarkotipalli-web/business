import { Pickle } from '@/types';

export const pickles: Pickle[] = [
  {
    id: 'chicken-pickle',
    name: 'Chicken Pickle',
    slug: 'chicken-pickle',
    description:
      'Tender pieces of farm-fresh chicken slow-cooked with a rich blend of aromatic spices, garlic, ginger, and oil — a timeless homemade recipe passed down through generations.',
    ingredients: [
      'Chicken',
      'Sesame oil',
      'Red chili powder',
      'Turmeric',
      'Garlic',
      'Ginger',
      'Mustard seeds',
      'Fenugreek',
      'Salt',
      'Vinegar',
    ],
    prices: {
      '250g': 250,
      '500g': 450,
      '1kg': 850,
    },
    image: '/pickle-placeholder.png',
  },
  {
    id: 'gongura-chicken-pickle',
    name: 'Gongura Chicken Pickle',
    slug: 'gongura-chicken-pickle',
    description:
      'A signature Andhra-style delicacy combining the tangy punch of sorrel leaves (gongura) with succulent chicken, fried spices, and traditional oil — bold, fiery, and utterly addictive.',
    ingredients: [
      'Chicken',
      'Gongura (sorrel leaves)',
      'Sesame oil',
      'Red chili powder',
      'Garlic',
      'Cumin',
      'Mustard seeds',
      'Fenugreek',
      'Turmeric',
      'Salt',
    ],
    prices: {
      '250g': 270,
      '500g': 480,
      '1kg': 900,
    },
    image: '/pickle-placeholder.png',
  },
  {
    id: 'prawns-pickle',
    name: 'Prawns Pickle',
    slug: 'prawns-pickle',
    description:
      'Juicy, hand-cleaned prawns marinated in a fiery blend of coastal spices, tamarind, and garlic — slow-cooked in sesame oil to perfection. A true seafood lover\'s treasure.',
    ingredients: [
      'Prawns',
      'Sesame oil',
      'Red chili powder',
      'Tamarind',
      'Garlic',
      'Ginger',
      'Mustard seeds',
      'Curry leaves',
      'Turmeric',
      'Salt',
    ],
    prices: {
      '250g': 300,
      '500g': 550,
      '1kg': 1000,
    },
    image: '/pickle-placeholder.png',
  },
];
