import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import { loadCartState } from './localStorage';

const localStorageMiddleware = (store) => (next) => (action) => {
   const result = next(action);

   if (action.type.startsWith('cart/')) {
      const { cart } = store.getState();
      localStorage.setItem('cart', JSON.stringify(cart));
   }

   return result;
};

export const store = configureStore({
   reducer: {
      cart: cartReducer,
   },
   preloadedState: {
     cart: loadCartState() || {items: [], total: 0},
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(localStorageMiddleware),
});
