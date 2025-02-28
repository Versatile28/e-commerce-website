import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';

export default function ProductSection() {
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
      }, {
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

   return (
      <Container className='pb-3 product-section-container'>
         <Row className='mb-2 d-flex justify-content-center'>
            <Row className='d-flex justify-content-between align-items-center'>
               <Col md={8} sm={12} xs={12} className='d-flex flex-wrap gap-2 product-collapse mb-3 p-0'>
                  <a href='/' className='product-links text-black'>All Products</a>
                  <a href='/' className='product-links'>Clothing</a>
                  <a href='/' className='product-links'>Bags</a>
                  <a href='/' className='product-links'>Shoes</a>
                  <a href='/' className='product-links'>Accessories</a>
               </Col>
               <Col md={4} sm={12} xs={12} className='d-flex justify-content-md-end product-collapse mb-3 p-0'><a href='/e-commerce-website' className='product-link-a'>ALL PRODUCTS</a>
               </Col>
            </Row>
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
