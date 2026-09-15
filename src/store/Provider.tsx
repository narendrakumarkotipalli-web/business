'use client';

import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './index';
import { loadCartFromStorage, setCartItems } from './cartSlice';

export default function ReduxProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Restore cart state from localStorage on client mount
    const savedItems = loadCartFromStorage();
    if (savedItems && savedItems.length > 0) {
      store.dispatch(setCartItems(savedItems));
    }

    // Sync cart across browser tabs if user modifies cart in another tab
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'aruh_foods_cart_v1') {
        const newItems = loadCartFromStorage();
        store.dispatch(setCartItems(newItems));
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return <Provider store={store}>{children}</Provider>;
}
