import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

export default function StarRating({ rating=0, size = 18, gap = 4, color = "#bcac76" }) {
   const fullStars = Math.floor(rating);
   const halfStar = rating % 1 !== 0;
   const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

   const starStyle = { marginRight: `${gap}px`, color: color, fill: color };

   return (
      <div className='d-flex align-items-center'>
         {[...Array(fullStars)].map((_, i) => (
            <BsStarFill key={`full-${i}`} className='product-star-rating' size={size} style={starStyle} />
         ))}
         {halfStar && <BsStarHalf size={size} style={starStyle} />}
         {[...Array(emptyStars)].map((_, i) => (
            <BsStar key={`empty-${i}`} className='product-star-rating' size={size} style={starStyle} />
         ))}
      </div>
   );
}
