import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai';
import { IoExpand } from 'react-icons/io5';
import { PiShoppingBagOpen } from 'react-icons/pi';

export default function AddToCartBar({ handleAddToCart, testId }) {
  return (
   <div className="overlay-content">
   <span
      className="product-cart d-sm-inline-block d-none"
      onClick={handleAddToCart}
      data-testid={testId}
   >
      Add to cart
   </span>
   <PiShoppingBagOpen
      data-testid="mobile-cart-icon"
      className="d-sm-none d-inline-block icon"
      onClick={handleAddToCart}
   />
   <div>
      <AiOutlineHeart data-testid="icon" className="icon" />
      <IoExpand data-testid="icon" className="icon" />
   </div>
</div>
  )
}
