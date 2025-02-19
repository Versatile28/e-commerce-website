import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { AiOutlineHeart } from 'react-icons/ai';
import { IoExpand } from "react-icons/io5";
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

export default function ProductCard({
   badgeText = '',
   imageSrc = '/images/1.1.webp',
   title = 'White Tee',
   price = 40.0,
   rating = 3.5,
}) {
   const [hovered, setHovered] = useState(false);

   const renderStars = () => {
      const fullStars = Math.floor(rating);
      const halfStar = rating % 1 !== 0;
      const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

      return (
         <>
            {[...Array(fullStars)].map((_, i) => (
               <BsStarFill key={`full-${i}`} />
            ))}
            {halfStar && <BsStarHalf />}
            {[...Array(emptyStars)].map((_, i) => (
               <BsStar key={`empty-${i}`} />
            ))}
         </>
      );
   };

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

               <Card.Img
                  variant="top"
                  src={imageSrc}
                  alt={title}
                  className="product-image"
               />

               <div className={`hover-overlay ${hovered ? 'show' : ''}`}>
                  <div className="overlay-content">
                     <p className='product-cart' style={{ fontSize: ".9rem", fontWeight: "600" }}>
                        Add to cart
                     </p>
                     <div>
                        <AiOutlineHeart className="icon" />
                        <IoExpand className="icon" />
                     </div>
                  </div>
               </div>
            </Card>

            <div>
               <a href='/' className='card-title mt-3'>{title}</a>
               <div className='d-flex justify-content-between mt-2'>
                  <p className="text-muted product-price">${price.toFixed(2)}</p>
                  <div className={`star-rating ${hovered ? 'show' : ''}`}>
                     {renderStars()}
                  </div>
               </div>
            </div>
         </div>
   );
}
