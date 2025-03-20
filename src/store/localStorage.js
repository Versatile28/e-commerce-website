export const loadCartState = () => {
   try {
     const serializedState = localStorage.getItem('cart');
     if (serializedState === null) return undefined;
     return JSON.parse(serializedState);
   } catch (error) {
     console.warn('Failed to load cart state:', error);
     return undefined;
   }
 };