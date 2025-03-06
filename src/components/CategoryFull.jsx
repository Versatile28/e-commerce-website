import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Container, Accordion, Dropdown, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { GiTrousers } from 'react-icons/gi';
import { TbJacket } from 'react-icons/tb';
import { PiTShirtLight } from 'react-icons/pi';
import { Breadcrumb } from 'react-bootstrap';

export default function CategoryFull({ products, loading }) {
   const [selected, setSelected] = useState('Default');

   const handleSelect = (option) => {
      setSelected(option);
   };

   const ProductCard = lazy(() => import('./ProductCard'));

   const cardVariants = {
      hidden: { opacity: 0, scale: 0.5 },
      visible: {
         opacity: 1,
         scale: 1,
         transition: { duration: 0.5, ease: 'easeOut' },
      },
   };

   const getItemsPerRow = (width) => {
      if (width >= 1400) return 4;
      if (width >= 1200) return 4;
      if (width >= 992) return 3;
      if (width >= 768) return 2;
      return 1;
   };

   const [itemsPerRow, setItemsPerRow] = useState(
      getItemsPerRow(window.innerWidth)
   );

   useEffect(() => {
      const handleResize = () =>
         setItemsPerRow(getItemsPerRow(window.innerWidth));
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
   }, []);

   return (
      <Container className="px-3 py-6">
         <div className="row">
            <div className="col-3 category-menu-container">
               <h5 className="fw-bold ls-1">Category</h5>
               <Accordion className="category-menu">
                  <Accordion.Item eventKey="0">
                     <Accordion.Header className="category-menu-head">
                        <GiTrousers
                           alt="Trousers"
                           className="category-menu-icons"
                        />
                        <span className="category-menu-title">Trousers</span>
                        <span className="text-mute category-menu-count ps-2">
                           120
                        </span>
                     </Accordion.Header>
                     <Accordion.Body>
                        <ul className="category-menu-list">
                           <li>
                              <p className="category-item">Lorem ipsum</p>
                              <span className="item-underline"></span>
                           </li>
                           <li>
                              <p>Dolor</p>
                              <span className="item-underline"></span>
                           </li>
                           <li>
                              <p>Sit amet</p>
                              <span className="item-underline"></span>
                           </li>
                           <li>
                              <p>Donec vitae</p>
                              <span className="item-underline"></span>
                           </li>
                        </ul>
                     </Accordion.Body>
                  </Accordion.Item>
               </Accordion>
               <Accordion className="category-menu">
                  <Accordion.Item eventKey="0">
                     <Accordion.Header className="category-menu-head">
                        <TbJacket
                           alt="Jackets"
                           className="category-menu-icons"
                        />
                        <span className="category-menu-title">Jackets</span>
                        <span className="text-mute category-menu-count ps-2">
                           55
                        </span>
                     </Accordion.Header>
                     <Accordion.Body>
                        <ul className="category-menu-list">
                           <li>
                              <p>Lorem ipsum</p>
                              <span className="item-underline"></span>
                           </li>
                           <li>
                              <p>Dolor</p>
                              <span className="item-underline"></span>
                           </li>
                           <li>
                              <p>Sit amet</p>
                              <span className="item-underline"></span>
                           </li>
                           <li>
                              <p>Donec vitae</p>
                              <span className="item-underline"></span>
                           </li>
                        </ul>
                     </Accordion.Body>
                  </Accordion.Item>
               </Accordion>
               <Accordion className="category-menu border-0">
                  <Accordion.Item eventKey="0">
                     <Accordion.Header className="category-menu-head">
                        <PiTShirtLight
                           alt="T-Shirts"
                           className="category-menu-icons"
                        />
                        <span className="category-menu-title">T-Shirts</span>
                        <span className="text-mute category-menu-count ps-2">
                           33
                        </span>
                     </Accordion.Header>
                     <Accordion.Body>
                        <ul className="category-menu-list">
                           <li>
                              <p>Lorem ipsum</p>
                              <span className="item-underline"></span>
                           </li>
                           <li>
                              <p>Dolor</p>
                              <span className="item-underline"></span>
                           </li>
                           <li>
                              <p>Sit amet</p>
                              <span className="item-underline"></span>
                           </li>
                           <li>
                              <p>Donec vitae</p>
                              <span className="item-underline"></span>
                           </li>
                        </ul>
                     </Accordion.Body>
                  </Accordion.Item>
               </Accordion>
               <h5 className="fw-bold ls-1 pt-5">Price</h5>
            </div>
            <div className="col-9">
               <div className="mb-5">
                  <span className="category-title">Jackets and tops</span>
                  <p className="text-mute category-desc width-lg-100">
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                     sed do eiusmod tempor incididunt.
                  </p>
               </div>
               <div className="breadcrumb-section">
                  <Breadcrumb>
                     <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                     <Breadcrumb.Item className="item-category" active>
                        Shop
                     </Breadcrumb.Item>
                  </Breadcrumb>
               </div>
               <div className="row filter-category mb-4">
                  <div className="col-lg-4 col-6 h-100 d-flex align-items-center">
                     <div className="me-3 mb-3 text-mute d-flex align-items-center">
                        Showing
                        <strong className="text-black">&nbsp;1-12&nbsp;</strong>
                        of&nbsp;<strong className="text-black">158</strong>
                        &nbsp;products
                     </div>
                  </div>
                  <div className="col-lg-4 col-6 h-100 d-flex align-items-center justify-content-center">
                     <div className="me-3 mb-3 text-mute d-flex align-items-center justify-content-center">
                        Show &nbsp;
                        <strong className="text-black">&nbsp;12&nbsp;</strong>
                        &nbsp; 24&nbsp; All
                     </div>
                  </div>
                  <div className="col-lg-4 col-6 h-100 d-flex align-items-center">
                     <div className="me-3 mb-3 text-mute d-flex align-items-center">
                        <div className="pe-3">Sort by</div>
                        <Dropdown className="w-auto">
                           <Dropdown.Toggle
                              variant="light"
                              className="sortby-dropdown"
                           >
                              <div className="d-flex justify-content-between align-items-center mx-1">
                                 <span className="ls-4 fw-bold fs-7">
                                    {selected.toUpperCase()}
                                 </span>
                                 <span className="arrow">&#9660;</span>
                              </div>
                           </Dropdown.Toggle>

                           <Dropdown.Menu className="sortby-dropdown-menu">
                              {[
                                 'Default',
                                 'Popularity',
                                 'Rating',
                                 'Newest first',
                              ].map((option, index) => (
                                 <Dropdown.Item
                                    key={option}
                                    onClick={() => handleSelect(option)}
                                    className={`dropdown-item-sortby ${
                                       selected === option ? 'selected' : ''
                                    }`}
                                 >
                                    {option}
                                 </Dropdown.Item>
                              ))}
                           </Dropdown.Menu>
                        </Dropdown>
                     </div>
                  </div>
               </div>
               {Array.from({
                  length: Math.ceil(products.length / itemsPerRow),
               }).map((_, rowIndex) => (
                  <Row key={rowIndex} className="mt-4">
                     {loading
                        ? Array.from({ length: itemsPerRow }).map((_, idx) => (
                             <Col
                                key={idx}
                                xs={6}
                                sm={6}
                                md={6}
                                lg={4}
                                xl={3}
                                xxl={3}
                                className="mb-4"
                             >
                                <motion.div
                                   variants={cardVariants}
                                   initial="hidden"
                                   whileInView="visible"
                                   viewport={{ once: true, amount: 0.2 }}
                                >
                                   <Skeleton
                                      className="product-skeleton"
                                      height={300}
                                   />
                                </motion.div>
                             </Col>
                          ))
                        : products
                             .slice(
                                rowIndex * itemsPerRow,
                                rowIndex * itemsPerRow + itemsPerRow
                             )
                             .map((item, idx) => (
                                <Col
                                   key={idx}
                                   xs={6}
                                   sm={6}
                                   md={6}
                                   lg={4}
                                   xl={3}
                                   xxl={3}
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
                                      <motion.div
                                         variants={cardVariants}
                                         initial="hidden"
                                         whileInView="visible"
                                         viewport={{ once: true, amount: 0.2 }}
                                      >
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
               ))}
            </div>
         </div>
      </Container>
   );
}
