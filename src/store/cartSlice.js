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
      }
   }
})