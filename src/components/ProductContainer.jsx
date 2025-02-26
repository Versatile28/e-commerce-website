import React from 'react';
import { CiCircleCheck } from 'react-icons/ci';
import { RxCross2 } from "react-icons/rx";
import { useRef } from 'react';

export default function ProductContainer() {
   const toastRef = useRef(null);

   function handleClose() {
      if (toastRef.current?.classList.contains('show-display')) {
         toastRef.current.classList.remove('show-display');
         toastRef.current.classList.add('hide-display');
      }
   }

   return (
      <div className="px-xl-7 product-container">
         <div ref={toastRef} className="add-cart-toast show-display flex-row justify-content-between align-items-center">
            <div className='d-flex flex-row align-items-center'>
            <CiCircleCheck className="icon-tick" />
            <p className="m-0 ps-3 fw-semibold text-white fs-6">
               Black blouse have been added to your cart.
            </p>
            <a href="/e-commerce-website" className='m-0 ps-3 fw-semibold text-white fs-6'>View Cart</a>
            </div>
            <button className='border-0 bg-transparent' onClick={()=>{handleClose()}}>
            <RxCross2 className="icon-close"/>
            </button>
         </div>
      </div>
   );
}
