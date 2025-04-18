import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

export default function StarRating({
  rating = 0,
  size = 18,
  gap = 4,
  color = '#bcac76',
}) {
  // Clamp to [0,5]
  const safeRating = Math.min(Math.max(rating, 0), 5);

  const fullStars = Math.floor(safeRating);
  const halfStar = safeRating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  const starStyle = {
    marginRight: `${gap}px`,
    color,
    fill: color,
  };

  return (
    <div className='d-flex align-items-center'>
      {[...Array(fullStars)].map((_, i) => (
        <BsStarFill
          key={`full-${i}`}
          data-testid='star-full'
          size={size}
          style={starStyle}
        />
      ))}
      {halfStar && (
        <BsStarHalf
          data-testid='star-half'
          size={size}
          style={starStyle}
        />
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <BsStar
          key={`empty-${i}`}
          data-testid='star-empty'
          size={size}
          style={starStyle}
        />
      ))}
    </div>
  );
}
