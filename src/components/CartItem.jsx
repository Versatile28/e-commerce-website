import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoIosClose } from 'react-icons/io';
import { removeFromCart } from '../store/cartSlice';

export default function CartItem({ item }) {
   const dispatch = useDispatch();
   function handleRemoveFromCart(){
      dispatch(removeFromCart(item._id));
   }

   return (
      <div className="py-4 d-flex justify-content-between aligh align-items-center cart-item-container">
         <div className="d-flex">
            <Link to={`/category-full/product/${item._id}`}>
               <img src={item.image} alt={item.name} className="cartItemImg" />
            </Link>
            <div className="ms-3">
               <Link
                  to={`/category-full/product/${item._id}`}
                  className="cart-item-name"
               >
                  {item.name}
               </Link>
               <p className="text-mute cart-item-quantity">
                  Quantity: {item.quantity}
               </p>
               <p className="cart-item-price">${item.price.toFixed(2)}</p>
            </div>
         </div>
         <div>
            <IoIosClose className='cart-item-clear' onClick={handleRemoveFromCart}/>
         </div>
      </div>
   );
}
