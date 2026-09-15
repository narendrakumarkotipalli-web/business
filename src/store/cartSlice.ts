import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem, PackSize } from '@/types';

const CART_STORAGE_KEY = 'aruh_foods_cart_v1';

export function loadCartFromStorage(): CartItem[] {
  if (typeof window === 'undefined') return [];
  try {
    const item = localStorage.getItem(CART_STORAGE_KEY);
    return item ? JSON.parse(item) : [];
  } catch (e) {
    console.error('Failed to load cart from localStorage:', e);
    return [];
  }
}

export function saveCartToStorage(items: CartItem[]) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  } catch (e) {
    console.error('Failed to save cart to localStorage:', e);
  }
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartItems(state, action: PayloadAction<CartItem[]>) {
      state.items = action.payload;
      saveCartToStorage(state.items);
    },
    addToCart(state, action: PayloadAction<CartItem>) {
      const incoming = action.payload;
      const existingIndex = state.items.findIndex(
        (item) => item.pickleId === incoming.pickleId && item.size === incoming.size
      );
      if (existingIndex !== -1) {
        state.items[existingIndex].quantity += incoming.quantity;
      } else {
        state.items.push(incoming);
      }
      saveCartToStorage(state.items);
    },
    removeFromCart(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      saveCartToStorage(state.items);
    },
    updateQuantity(
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity = Math.max(1, action.payload.quantity);
      }
      saveCartToStorage(state.items);
    },
    updateSize(
      state,
      action: PayloadAction<{ id: string; size: PackSize; price: number }>
    ) {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item) {
        item.size = action.payload.size;
        item.price = action.payload.price;
        item.id = `${item.pickleId}-${action.payload.size}`;
      }
      saveCartToStorage(state.items);
    },
    clearCart(state) {
      state.items = [];
      saveCartToStorage(state.items);
    },
  },
});

export const {
  setCartItems,
  addToCart,
  removeFromCart,
  updateQuantity,
  updateSize,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
