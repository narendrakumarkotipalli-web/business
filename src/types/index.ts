export type PackSize = '250g' | '500g' | '1kg';

export interface PicklePrices {
  '250g': number;
  '500g': number;
  '1kg': number;
}

export interface Pickle {
  id: string;
  name: string;
  slug: string;
  description: string;
  ingredients: string[];
  prices: PicklePrices;
  image: string;
  category?: 'non-veg' | 'veg';
  tag?: string;
  spiceLevel?: 'Mild' | 'Medium' | 'Fiery Hot';
}


export interface CartItem {
  id: string;
  pickleId: string;
  name: string;
  size: PackSize;
  quantity: number;
  price: number;
  image?: string;
}

export interface CustomerForm {
  name: string;
  phone: string;
  address: string;
  note?: string;
}
