import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../store/cartSlice';
import CartItem from './CartItem'

export default function Cart({ showCart, setShowCart, handleCartClose }) {
   const cartItems = useSelector(selectCartItems);
   const cartTotal = useSelector(selectCartTotal);

   return (
      <div>
         <Offcanvas
            className="d-flex align-items-center justify-content-start cart-offcanvas overflow-auto"
            show={showCart}
            onHide={handleCartClose}
            placement="end"
            name="end"
         >
            <div className="w-100">
               <Offcanvas.Header closeButton className='mb-4 px-3 py-4'></Offcanvas.Header>
               <div className="cart-items-container mx-1 px-5">
                  {
                     cartItems.map((item, idx) => {
                        return (
                           <CartItem key={idx} item={item}/>
                        )
                     })
                  }
               </div>
               <div className="m-1 mt-4 px-5 py-3">
                  <h5 className="cart-total fw-semibold mb-4">
                     Subtotal: <span className="float-end">${cartTotal.toFixed(2)}</span>
                  </h5>
                  <a
                     role="button"
                     href="/cart"
                     className="btn btn-outline-dark w-100 cart-btn fw-semibold mb-3"
                  >
                     VIEW CART
                  </a>
                  <a
                     role="button"
                     href="/checkout"
                     className="btn btn-dark w-100 cart-btn fw-semibold"
                  >
                     CHECKOUT
                  </a>
               </div>
            </div>
         </Offcanvas>
      </div>
   );
}
