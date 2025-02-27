import React from 'react';
import { useState } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Dropdown from 'react-bootstrap/Dropdown';
import { CiCircleCheck } from 'react-icons/ci';
import { RxCross2 } from 'react-icons/rx';
import { useRef } from 'react';
import StarRating from './StarRating';
import { RiFacebookFill } from 'react-icons/ri';
import { FaTwitter } from 'react-icons/fa';
import { FaRegHeart } from "react-icons/fa";

export default function ProductContainer() {
   const toastRef = useRef(null);
   const [selected, setSelected] = useState('Small');
   const [change, setChange] = useState('value_0');

   const [quantity, setQuantity] = useState(1);

   const handleQuantity = (e) => {
      setQuantity(e.target.value);
   };

   const handleChange = (e) => {
      setChange(e.target.value);
   };

   function handleClose() {
      if (toastRef.current?.classList.contains('show-display')) {
         toastRef.current.classList.remove('show-display');
         toastRef.current.classList.add('hide-display');
      }
   }

   const handleSelect = (option) => {
      setSelected(option);
   };

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
               <div className="position-sticky">
                  {/* <div> */}
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
                  <div className="mb-4">
                     <div className="product-size mb-4">
                        <div className="d-flex align-items-center mb-1">
                           <h6 className="fw-bold">Size</h6>
                           <h6 className="text-mute required-text">
                              &nbsp;(required)
                           </h6>
                        </div>
                        <Dropdown>
                           <Dropdown.Toggle
                              variant="light"
                              className="custom-dropdown"
                           >
                              <div className="d-flex justify-content-between align-items-center mx-1">
                                 <span className="ls-4 fw-bold fs-7">
                                    {selected.toUpperCase()}
                                 </span>
                                 <span className="arrow">&#9660;</span>
                              </div>
                           </Dropdown.Toggle>

                           <Dropdown.Menu className="custom-dropdown-menu">
                              {['Small', 'Medium', 'Large'].map(
                                 (option, index) => (
                                    <Dropdown.Item
                                       key={option}
                                       onClick={() => handleSelect(option)}
                                       className={`dropdown-item-custom ${
                                          selected === option ? 'selected' : ''
                                       }`}
                                    >
                                       {option}
                                    </Dropdown.Item>
                                 )
                              )}
                           </Dropdown.Menu>
                        </Dropdown>
                     </div>
                     <div className="product-type">
                        <div className="d-flex align-items-center mb-1">
                           <h6 className="fw-bold">Type</h6>
                           <h6 className="text-mute required-text">
                              &nbsp;(required)
                           </h6>
                        </div>
                        <div className="type-btn">
                           <label
                              className={`btn btn-sm btn-outline-primary detail-option-btn-label me-1 ${
                                 change === 'value_0' ? 'active' : ''
                              }`}
                              htmlFor="material_0"
                           >
                              HOODIE
                              <input
                                 name="material"
                                 required
                                 type="radio"
                                 id="material_0"
                                 className="input-invisible form-control"
                                 value="value_0"
                                 checked={change === 'value_0'}
                                 onChange={handleChange}
                              />
                           </label>

                           <label
                              className={`btn btn-sm btn-outline-primary detail-option-btn-label me-1 
                              ${change === 'value_1' ? 'active' : ''}`}
                              htmlFor="material_1"
                           >
                              COLLEGE
                              <input
                                 name="material"
                                 required
                                 type="radio"
                                 id="material_1"
                                 className="input-invisible form-control"
                                 value="value_1"
                                 checked={change === 'value_1'}
                                 onChange={handleChange}
                              />
                           </label>
                        </div>
                     </div>
                  </div>
                  <div className="w-100 mb-4 input-group">
                     <input
                        name="items"
                        type="number"
                        className="detail-quantity form-control form-control-lg"
                        value={quantity}
                        onChange={handleQuantity}
                     />
                     <div className="flex-grow-1">
                        <div className="d-grid h-100">
                           <button
                              type="submit"
                              className="btn btn-dark add-cart-btn"
                           >
                              <svg
                                 aria-hidden="true"
                                 focusable="false"
                                 data-prefix="fas"
                                 data-icon="shopping-cart"
                                 className="svg-inline--fa fa-shopping-cart fa-w-18 me-2"
                                 role="img"
                                 xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 576 512"
                              >
                                 <path
                                    fill="currentColor"
                                    d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
                                 ></path>
                              </svg>
                              ADD TO CART
                           </button>
                        </div>
                     </div>
                  </div>
                  <div className="row mb-4">
                     <a
                        href="/#"
                        className="wishlist col-6 d-flex justify-content-start align-items-center"
                     >
                        <FaRegHeart className="wishlist-icon me-1" />
                        <span className="wishlist-text">Add to wishlist</span>
                     </a>
                     <div className="some-links col-6 d-flex justify-content-end align-items-center">
                        <RiFacebookFill />
                        <FaTwitter />
                     </div>
                  </div>
                  <ul class="list-unstyled">
                     <li>
                        <strong>Category:&nbsp;</strong>
                        <a class="text-mute text-decoration-none" href="/jackets">
                           Jackets
                        </a>
                     </li>
                     <li>
                        <strong>Tags:&nbsp;</strong>
                        <a class="text-mute text-decoration-none" href="/">
                           Leisure
                        </a>
                        <span class="text-mute text-decoration-none">,&nbsp;</span>
                        <a class="text-mute text-decoration-none" href="/">
                           Elegant
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
}
