import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { CiCircleCheck } from 'react-icons/ci';
import { RxCross2 } from 'react-icons/rx';
import { useRef } from 'react';
import StarRating from './StarRating';

export default function ProductContainer() {
   const toastRef = useRef(null);

   function handleClose() {
      if (toastRef.current?.classList.contains('show-display')) {
         toastRef.current.classList.remove('show-display');
         toastRef.current.classList.add('hide-display');
      }
   }

   return (
      <div className="px-xl-7 product-container container-fluid pb-lg-6">
         <div
            ref={toastRef}
            className="add-cart-toast show-display flex-row justify-content-between align-items-center mb-5"
         >
            <div className="d-flex flex-row align-items-center">
               <CiCircleCheck className="icon-tick" />
               <p className="m-0 ps-3 fw-semibold text-white fs-6">
                  Black blouse have been added to your cart.
               </p>
               <a
                  href="/e-commerce-website"
                  className="m-0 ps-3 fw-semibold text-white fs-6"
               >
                  View Cart
               </a>
            </div>
            <button
               className="border-0 bg-transparent"
               onClick={() => {
                  handleClose();
               }}
            >
               <RxCross2 className="icon-close" />
            </button>
         </div>
         <div className="breadcrumb-section">
            <Breadcrumb>
               <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
               <Breadcrumb.Item
                  className="item-category"
                  href="https://getbootstrap.com/docs/4.0/components/breadcrumb/"
               >
                  Tops & blouses
               </Breadcrumb.Item>
               <Breadcrumb.Item className="item-category" active>
                  Black blouse
               </Breadcrumb.Item>
            </Breadcrumb>
         </div>
         <div className="product-details d-flex row">
            <div className="pt-4 col-xl-7 col-lg-6 order-2 order-lg-1">
               <a className="d-block mb-4" href="images/detail-1-gray.jpg">
                  <figure className="product-grey cursor-pointer">
                     <div>
                        <img
                           className="product-img-grey"
                           alt=""
                           src="images/detail-1-gray.jpg"
                        />
                     </div>
                  </figure>
               </a>
               <a className="d-block mb-4" href="images/detail-2-gray.jpg">
                  <figure className="product-grey cursor-pointer">
                     <div>
                        <img
                           className="product-img-grey"
                           alt=""
                           src="images/detail-2-gray.jpg"
                        />
                     </div>
                  </figure>
               </a>
               <a className="d-block mb-4" href="images/detail-3-gray.jpg">
                  <figure className="product-grey cursor-pointer">
                     <div>
                        <img
                           className="product-img-grey"
                           alt=""
                           src="images/detail-3-gray.jpg"
                        />
                     </div>
                  </figure>
               </a>
               <a className="d-block mb-4" href="images/detail-4-gray.jpg">
                  <figure className="product-grey cursor-pointer">
                     <div>
                        <img
                           className="product-img-grey"
                           alt=""
                           src="images/detail-4-gray.jpg"
                        />
                     </div>
                  </figure>
               </a>
               <a className="d-block mb-4" href="images/detail-5-gray.jpg">
                  <figure className="product-grey cursor-pointer">
                     <div>
                        <img
                           className="product-img-grey"
                           alt=""
                           src="images/detail-5-gray.jpg"
                        />
                     </div>
                  </figure>
               </a>
               <a className="d-block mb-4" href="images/detail-6-gray.jpg">
                  <figure className="product-grey cursor-pointer">
                     <div>
                        <img
                           className="product-img-grey"
                           alt=""
                           src="images/detail-6-gray.jpg"
                        />
                     </div>
                  </figure>
               </a>
            </div>
            <div className="pt-4 px-3 ms-lg-auto col-xl-4 col-lg-6 order-1 order-lg-2">
               <div className='position-sticky'>
                  <h1 className="mb-4 fw-bold">College jacket</h1>
                  <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-sm-between mb-4">
                     <ul className="list-inline mb-2 mb-sm-0 d-xxl-flex">
                        <li className="font-body-font-family list-inline-item h4 fw-light mb-0">
                           $65.00
                        </li>
                        <li className="font-body-font-family list-inline-item text-mute fw-light">
                           <del>$90</del>
                        </li>
                     </ul>
                     <div className="d-flex align-items-center text-sm">
                        <div>
                           <StarRating rating={4} />
                        </div>
                        <span className="text-mute text-uppercase">
                           25 reviews
                        </span>
                     </div>
                  </div>
                  <p className="mb-4 text-mute">
                     Samsa was a travelling salesman - and above it there hung a
                     picture that he had recently cut out of an illustrated
                     magazine and housed in a nice, gilded frame.
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
}
