import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';

export default function App() {
   const products = [
      {
         badgeText: 'Fresh',
         imageSrc: '/images/show/1.1.webp',
         title: 'White Tee',
         price: 40.0,
         rating: 3.5,
      },
      {
         badgeText: '',
         imageSrc: '/images/show/2.1.webp',
         title: 'Black Blouse',
         price: 40.0,
         rating: 3.5,
      },
      {
         badgeText: 'Sale',
         imageSrc: '/images/show/3.1.webp',
         title: 'College jacket',
         price: 40.0,
         rating: 3.5,
      },
      {
         badgeText: '',
         imageSrc: '/images/show/4.1.webp',
         title: 'Carrot-fit jeans',
         price: 40.0,
         rating: 3.5,
      },
      {
         badgeText: '',
         imageSrc: '/images/show/5.1.webp',
         title: 'Striped T-Shirt',
         price: 40.0,
         rating: 3.5,
      },
      {
         badgeText: '',
         imageSrc: '/images/show/6.1.webp',
         title: 'Short top',
         price: 40.0,
         rating: 3.5,
      },
      {
         badgeText: 'Sold out',
         imageSrc: '/images/show/7.1.webp',
         title: 'Ethnic Sweater',
         price: 40.0,
         rating: 3.5,
      },
      {
         badgeText: '',
         imageSrc: '/images/show/8.1.webp',
         title: 'Beige',
         price: 40.0,
         rating: 3.5,
      },
      {
         badgeText: '',
         imageSrc: '/images/show/9.1.webp',
         title: 'Skull Tree',
         price: 40.0,
         rating: 3.5,
      },
      {
         badgeText: '',
         imageSrc: '/images/show/10.1.webp',
         title: 'Trucker jacket',
         price: 40.0,
         rating: 3.5,
      }, {
         badgeText: '',
         imageSrc: '/images/show/11.1.webp',
         title: 'Blouse',
         price: 40.0,
         rating: 3.5,
      },
      {
         badgeText: '',
         imageSrc: '/images/show/12.1.webp',
         title: 'Shirt',
         price: 40.0,
         rating: 3.5,
      },
   ];

   return (
      <Container style={{paddingBottom:"2rem"}}>
         <Row className='mb-5'>
            <div className='d-flex justify-content-between align-items-center'>
               <div className='d-flex gap-2'>
                  <a href='/' className='product-links' style={{color:"black"}}>All Products</a>
                  <a href='/' className='product-links'>Clothing</a>
                  <a href='/' className='product-links'>Bags</a>
                  <a href='/' className='product-links'>Shoes</a>
                  <a href='/' className='product-links'>Accessories</a>
               </div>
               <a href='/' className='product-link-a'>ALL PRODUCTS</a>
            </div>
         </Row>
         <Row className="mt-4">
            {products.map((item, idx) => (
               <Col key={idx} xs={6} sm={6} md={4} lg={3} xl={2} xxl={2} className="mb-4">
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
   );
}
