import { createSlice } from '@reduxjs/toolkit';

const initialState = {items: [], total: 0};

const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      addToCart: (state, action) => {
         const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);

         if(existingItemIndex >=0) {
            state.items[existingItemIndex].quantity += 1;
         } else {
            state.items.push({ ...action.payload, quantity: 1 })
         }

         state.total = state.items.reduce((sum,item) => sum + item.price * item.quantity,0 );
      },
      removeFromCart: (state, action) => {
         const itemIndex = state.items.findIndex(item => item.id === action.payload);
         if(itemIndex >=0 && itemIndex < state.items.length){
            state.total -= state.items[itemIndex].price * state.items[itemIndex].quantity;
            state.items.splice(itemIndex, 1);
         }
      },
      updateQuantity: (state, action) => {
         const { id, quantity } = action.payload;
         const itemIndex = state.items.findIndex(item => item.id === id);
         if(itemIndex >= 0 && quantity > 0){
            state.items[itemIndex].quantity = quantity;

            state.total = state.items.reduce(
               (sum, item) => sum + item.price * item.quantity,0
            );
         }
      },
      clearCart: (state) => {
         state.items = [];
         state.total = 0;
      }
   }
})

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;

export const selectCartItems = state => state.cart.items;
export const selectCartTotal = state => state.cart.total;
export const selectCartItemCount = state => state.cart.items.reduce(
  (count, item) => count + item.quantity, 0
);

export default cartSlice.reducer;