import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../store/cartSlice';
import CartItem from './CartItem'

export default function Cart({ showCart, setShowCart, handleCartClose }) {
   const cartItems = useSelector(selectCartItems);
   const cartTotal = useSelector(selectCartTotal);
   console.log('Cart Items:', cartItems);

   return (
      <div>
         <Offcanvas
            className="overflow-auto d-flex justify-content-start align-items-center cart-offcanvas"
            show={showCart}
            onHide={handleCartClose}
            placement="end"
            name="end"
         >
            <div className="w-100">
               <Offcanvas.Header closeButton className='py-4 px-3 mb-4'></Offcanvas.Header>
               <div className="mx-1 px-5 cart-items-container">
                  {
                     cartItems.map((item, idx) => {
                        return (
                           <CartItem item={item}/>
                        )
                     })
                  }
               </div>
               <div className="m-1 px-5 py-3 mt-4">
                  <h5 class="mb-4 fw-semibold cart-total">
                     Subtotal: <span class="float-end">${cartTotal.toFixed(2)}</span>
                  </h5>
                  <a
                     role="button"
                     href="/cart"
                     class="mb-3 w-100 btn btn-outline-dark cart-btn fw-semibold"
                  >
                     VIEW CART
                  </a>
                  <a
                     role="button"
                     href="/checkout"
                     class="w-100 btn btn-dark cart-btn fw-semibold"
                  >
                     CHECKOUT
                  </a>
               </div>
            </div>
         </Offcanvas>
      </div>
   );
}
