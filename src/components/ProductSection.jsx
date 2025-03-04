import React, { lazy, Suspense } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ProductCard = lazy(() => import('./ProductCard'));

const containerVariants = {
   hidden: { opacity: 1 },
   visible: {
      transition: { staggerChildren: 0.1 },
   },
};

const cardVariants = {
   hidden: { opacity: 0, scale: 0.5 },
   visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
   },
};

export default function ProductSection({ products, loading }) {
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

         <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
         >
            <Row className="mt-4">
               {loading
                  ? Array.from({ length: 12 }).map((_, idx) => (
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
                          <Skeleton className="product-skeleton" height={300} />
                       </Col>
                    ))
                  : products.map((item, idx) => (
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
                          <Suspense
                             fallback={
                                <Skeleton
                                   className="product-skeleton"
                                   height={300}
                                />
                             }
                          >
                             <motion.div variants={cardVariants}>
                                <ProductCard
                                   id={item._id}
                                   badge={item.badge}
                                   image={item.image}
                                   name={item.name}
                                   price={item.price}
                                   rating={item.rating}
                                />
                             </motion.div>
                          </Suspense>
                       </Col>
                    ))}
            </Row>
         </motion.div>
      </Container>
   );
}
