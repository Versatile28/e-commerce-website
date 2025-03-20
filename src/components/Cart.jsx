import React from 'react';
import { Offcanvas } from 'react-bootstrap';

export default function Cart({ showCart, setShowCart, handleCartClose }) {
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
               <div className="m-1 px-5 py-3">
                  <h5 class="mb-4 fw-semibold cart-total">
                     Subtotal: <span class="float-end">$465.32</span>
                  </h5>
                  <a
                     role="button"
                     href="/cart"
                     class="mb-3 w-100 btn btn-outline-dark cart-btn fw-semibold"
                  >
                     VIEW CART
                  </a>
                  <a role="button" href="/checkout" class="w-100 btn btn-dark cart-btn fw-semibold">
                     CHECKOUT
                  </a>
               </div>
            </div>
         </Offcanvas>
      </div>
   );
}
