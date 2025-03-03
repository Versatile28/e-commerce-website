import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { AiOutlineHeart } from 'react-icons/ai';
import { IoExpand } from "react-icons/io5";
import { PiShoppingBagOpen } from 'react-icons/pi';
import StarRating from './StarRating';

export default function ProductCard({
   id,
   badgeText = '',
   imageSrc = 'images/1.1.webp',
   title = 'White Tee',
   price = 40.0,
   rating = 3.5,
}) {
   const [hovered, setHovered] = useState(false);

   return (
         <div onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
            <Card
               className="product-card"
            >
               {badgeText && (
                  <span className={`badge-label ${badgeText === 'Fresh' ? 'fresh' : ''} ${badgeText === 'Sale' ? 'sale' : ''} ${badgeText === 'Sold out' ? 'sold-out' : ''}`}>
                     {badgeText}
                  </span>
               )}

               <Link className='product-link' to={`/category-full/product/${id}`}>
               <Card.Img
                  variant="top"
                  src={imageSrc}
                  alt={title}
                  className="product-image"
               />
               </Link>
               <div className={`hover-overlay ${hovered ? 'show' : ''}`}>
                  <div className="overlay-content">
                     <a href='/e-commerce-website' className='product-cart d-sm-inline-block d-none'>
                        Add to cart
                     </a>
                     <PiShoppingBagOpen className='d-sm-none d-inline-block icon'/>
                     <div>
                        <AiOutlineHeart className="icon" />
                        <IoExpand className="icon" />
                     </div>
                  </div>
               </div>
            </Card>

            <div>
               <Link to={`/category-full/product/${id}`} className='card-title mt-3'>{title}</Link>
               <div className='d-flex justify-content-between mt-2'>
                  <p className="text-mute product-price">${price.toFixed(2)}</p>
                  <div className={`star-rating ${hovered ? 'show' : ''}`}>
                     {<StarRating rating={rating} size={12.8} gap={2}/>}
                  </div>
               </div>
            </div>
         </div>
   );
}
