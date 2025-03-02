import React, { useState, useMemo } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';

const products = [
   {
      badgeText: 'Fresh',
      imageSrc: 'images/1.1.webp',
      title: 'White Tee',
      price: 40.0,
      rating: 3.5,
   },
   {
      badgeText: '',
      imageSrc: 'images/2.1.webp',
      title: 'Black Blouse',
      price: 40.0,
      rating: 3.5,
   },
   {
      badgeText: 'Sale',
      imageSrc: 'images/3.1.webp',
      title: 'College jacket',
      price: 40.0,
      rating: 3.5,
   },
   {
      badgeText: '',
      imageSrc: 'images/4.1.webp',
      title: 'Carrot-fit jeans',
      price: 40.0,
      rating: 3.5,
   },
   {
      badgeText: '',
      imageSrc: 'images/5.1.webp',
      title: 'Striped T-Shirt',
      price: 40.0,
      rating: 3.5,
   },
   {
      badgeText: '',
      imageSrc: 'images/6.1.webp',
      title: 'Short top',
      price: 40.0,
      rating: 3.5,
   },
   {
      badgeText: 'Sold out',
      imageSrc: 'images/7.1.webp',
      title: 'Ethnic Sweater',
      price: 40.0,
      rating: 3.5,
   },
   {
      badgeText: '',
      imageSrc: 'images/8.1.webp',
      title: 'Beige',
      price: 40.0,
      rating: 3.5,
   },
   {
      badgeText: '',
      imageSrc: 'images/9.1.webp',
      title: 'Skull Tree',
      price: 40.0,
      rating: 3.5,
   },
   {
      badgeText: '',
      imageSrc: 'images/10.1.webp',
      title: 'Trucker jacket',
      price: 40.0,
      rating: 3.5,
   },
   {
      badgeText: '',
      imageSrc: 'images/11.1.webp',
      title: 'Blouse',
      price: 40.0,
      rating: 3.5,
   },
   {
      badgeText: '',
      imageSrc: 'images/12.1.webp',
      title: 'Shirt',
      price: 40.0,
      rating: 3.5,
   },
];

export default function BrandSection() {
   const track = useMemo(() => [...products, ...products], []);
   const [currentIndex, setCurrentIndex] = useState(0);

   const offsetPercentage = currentIndex * 25;

   return (
      <div
         className="position-relative product-carousel-container"
         style={{
            marginBottom: '6rem',
            maxWidth: '100vw',
         }}
      >
         <Container className="overflow-hidden container-fluid">
            <Row className='ps-3 font-body-font-family mb-4 mt-5'>
               <h5>You might also like these</h5>
            </Row>
            <Row
               className="flex-nowrap m-0 p-0"
               style={{
                  width: '100%',
                  transform: `translateX(-${offsetPercentage}%)`,
                  transition: 'transform 0.5s ease',
               }}
            >
               {track.map((item, i) => (
                  <Col
                     key={i}
                     className="d-flex justify-content-center align-items-center"
                     style={{
                        width: '25%',
                        flex: '0 0 auto',
                        height: 'auto',
                     }}
                  >
                     <ProductCard
                        badgeText={item.badgeText}
                        imageSrc={item.imageSrc}
                        title={item.title}
                        price={item.price}
                        rating={item.rating}
                     />
                  </Col>
               ))}
            </Row>
         </Container>

         <div
            className="d-flex align-items-center justify-content-center mt-3"
            style={{ height: '2rem' }}
         >
            {Array.from({ length: 8 }).map((_, i) => {
               let size = 'small';

               if (i === currentIndex) {
                  size = 'large';
               } else if (
                  (currentIndex === 0 && i === products.length - 1) ||
                  (products === products.length - 1 && i === 0)
               ) {
                  size = 'small';
               } else {
                  size = 'medium';
               }

               return (
                  <span
                     key={i}
                     onClick={() => setCurrentIndex(i)}
                     className={`dot ${size}`}
                     style={{
                        margin: '5px 5px',
                        cursor: 'pointer',
                     }}
                  />
               );
            })}
         </div>
      </div>
   );
}
