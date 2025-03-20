import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { AiOutlineHeart } from 'react-icons/ai';
import { IoExpand } from 'react-icons/io5';
import { PiShoppingBagOpen } from 'react-icons/pi';
import StarRating from './StarRating';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

export default function ProductCard({
   item = {
      _id: 1,
      badge: '',
      image: 'images/1.1.webp',
      name: 'White Tee',
      price: 40.0,
      rating: 3.5,
   },
}) {
   const [hovered, setHovered] = useState(false);
   const [width, setWidth] = useState(window.innerWidth);
   const dispatch = useDispatch();
   function handleAddToCart() {
      dispatch(addToCart(item));
   }

   useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
   }, []);

   return (
      <div
         onMouseEnter={() => setHovered(true)}
         onMouseLeave={() => setHovered(false)}
      >
         <Card className="product-card">
            {item.badge && (
               <span
                  className={`badge-label ${
                     item.badge === 'Fresh' ? 'fresh' : ''
                  } ${item.badge === 'Sale' ? 'sale' : ''} ${
                     item.badge === 'Sold out' ? 'sold-out' : ''
                  }`}
               >
                  {item.badge}
               </span>
            )}

            <Link
               className="product-link"
               to={`/category-full/product/${item._id}`}
            >
               <Card.Img
                  variant="top"
                  src={item.image}
                  alt={item.name}
                  className="product-image"
               />
            </Link>
            <div className={`hover-overlay ${hovered  || width <= 768 ? 'show' : ''}`}>
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
            </div>
         </Card>

         <div>
            <Link
               to={`/category-full/product/${item._id}`}
               className="card-title mt-3"
            >
               {item.name}
            </Link>
            <div className="d-flex justify-content-between mt-2">
               <p className="text-mute product-price">
                  ${item.price.toFixed(2)}
               </p>
               <div className={`star-rating ${hovered || width <= 768 ? 'show' : ''}`}>
                  {<StarRating rating={item.rating} size={12.8} gap={2} />}
               </div>
            </div>
         </div>
      </div>
   );
}
