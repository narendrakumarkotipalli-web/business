import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem, PackSize } from '@/types';

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
    },
    removeFromCart(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateQuantity(
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity = Math.max(1, action.payload.quantity);
      }
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
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, updateSize, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
