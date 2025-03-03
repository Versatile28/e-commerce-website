import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';

export default function ProductSection() {
   const [products, setProducts] = useState([]);

   const fetchProducts = async () => {
      try {
         const { data } = await axios.get(
            'http://localhost:5000/api/products',
            {
               headers: { 'Content-Type': 'application/json' },
            }
         );
         setProducts(data);
      } catch (error) {
         console.error(
            'Error fetching products:',
            error.response?.data?.message || error.message
         );
      }
   };

   useEffect(() => {
      fetchProducts();
   }, []);
   console.log(products);

   return (
      <Container className="pb-3 product-section-container">
         <Row className="mb-2 d-flex justify-content-center">
            <Row className="d-flex justify-content-between align-items-center">
               <Col
                  md={8}
                  sm={12}
                  xs={12}
                  className="d-flex flex-wrap gap-2 product-collapse mb-3 p-0"
               >
                  <a href="/" className="product-links text-black">
                     All Products
                  </a>
                  <a href="/" className="product-links">
                     Clothing
                  </a>
                  <a href="/" className="product-links">
                     Bags
                  </a>
                  <a href="/" className="product-links">
                     Shoes
                  </a>
                  <a href="/" className="product-links">
                     Accessories
                  </a>
               </Col>
               <Col
                  md={4}
                  sm={12}
                  xs={12}
                  className="d-flex justify-content-md-end product-collapse mb-3 p-0"
               >
                  <a href="/" className="product-link-a">
                     ALL PRODUCTS
                  </a>
               </Col>
            </Row>
         </Row>
         <Row className="mt-4">
            {products.map((item, idx) => (
               <Col
                  key={idx}
                  xs={6}
                  sm={6}
                  md={4}
                  lg={3}
                  xl={2}
                  xxl={2}
                  className="mb-4"
               >
                  <ProductCard
                     id={item._id}
                     badgeText={item.badge}
                     imageSrc={item.image}
                     title={item.name}
                     price={item.price}
                     rating={item.rating}
                  />
               </Col>
            ))}
         </Row>
      </Container>
   );
}
