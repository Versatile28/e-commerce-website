import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai';
import { IoExpand } from 'react-icons/io5';
import { PiShoppingBagOpen } from 'react-icons/pi';

export default function AddToCartBar({ handleAddToCart }) {
  return (
   <div className="overlay-content">
   <span
      className="product-cart d-sm-inline-block d-none"
      onClick={handleAddToCart}
   >
      Add to cart
   </span>
   <PiShoppingBagOpen
      className="d-sm-none d-inline-block icon"
      onClick={handleAddToCart}
   />
   <div>
      <AiOutlineHeart className="icon" />
      <IoExpand className="icon" />
   </div>
</div>
  )
}
