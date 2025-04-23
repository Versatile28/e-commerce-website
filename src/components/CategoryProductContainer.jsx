import React, { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Pagination, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Skeleton from 'react-loading-skeleton';
import { Breadcrumb } from 'react-bootstrap';

export default function CategoryProductContainer({
   productNumber,
   filterLoading,
   handleSelect,
   itemsPerRow,
   handleProductNumberChange,
   selected,
   filteredProducts,
}) {
   const ProductCard = lazy(() => import('./ProductCard'));

   const cardVariants = {
      hidden: { opacity: 0, scale: 0.5 },
      visible: {
         opacity: 1,
         scale: 1,
         transition: { duration: 0.5, ease: 'easeOut' },
      },
   };

   return (
      <div>
         <div className="mb-5">
            <span className="category-title">Jackets and tops</span>
            <p className="text-mute category-desc width-lg-100">
               Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
               eiusmod tempor incididunt.
            </p>
         </div>
         <div className="breadcrumb-section">
            <Breadcrumb>
               <Breadcrumb.Item>
                  <Link to="/">Home</Link>
               </Breadcrumb.Item>
               <Breadcrumb.Item className="item-category" active>
                  Shop
               </Breadcrumb.Item>
            </Breadcrumb>
         </div>
         <div className="row filter-category">
            <div className="col-lg-4 col-md-6 col-12 h-100 d-flex align-items-center">
               <div
                  data-testid="showing-text"
                  className="text-mute d-flex align-items-center"
               >
                  Showing
                  <strong className="text-black">&nbsp;1-12&nbsp;</strong>
                  of&nbsp;<strong className="text-black">158</strong>
                  &nbsp;products
               </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 h-100 d-flex align-items-center justify-content-md-center">
               <div className="text-mute d-flex align-items-center justify-content-center">
                  Show &nbsp;
                  <strong
                     data-testid="product-count-option"
                     className="cursor-pointer"
                     onClick={() => {
                        handleProductNumberChange(12);
                     }}
                  >
                     &nbsp;12&nbsp;
                  </strong>
                  <strong
                     data-testid="product-count-option"
                     className="cursor-pointer"
                     onClick={() => {
                        handleProductNumberChange(24);
                     }}
                  >
                     &nbsp;24&nbsp;
                  </strong>{' '}
                  All
               </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 h-100 d-flex align-items-center justify-content-lg-end">
               <div className="text-mute d-flex align-items-center">
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
                                 selected === option.toUpperCase
                                    ? 'selected'
                                    : ''
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
         <div className="category-card-container">
            {filterLoading
               ? Array.from({
                    length: Math.ceil(productNumber / itemsPerRow),
                 }).map((_, rowIndex) => (
                    <Row key={rowIndex} className="mt-4">
                       {Array.from({ length: itemsPerRow }).map((_, idx) => (
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
                                animate="visible"
                             >
                                <div data-testid="product-skeleton">
                                   <Skeleton
                                      className="product-skeleton"
                                      height={300}
                                   />
                                </div>
                             </motion.div>
                          </Col>
                       ))}
                    </Row>
                 ))
               : Array.from({
                    length: Math.ceil(filteredProducts.length / itemsPerRow),
                 }).map((_, rowIndex) => (
                    <Row key={rowIndex} className="mt-4">
                       {filteredProducts
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
                                      <div data-testid="product-skeleton">
                                         <Skeleton
                                            className="product-skeleton"
                                            height={300}
                                         />
                                      </div>
                                   }
                                >
                                   <motion.div
                                      variants={cardVariants}
                                      initial="hidden"
                                      whileInView="visible"
                                      viewport={{
                                         once: true,
                                         amount: 0.2,
                                      }}
                                   >
                                      <ProductCard item={item} />
                                   </motion.div>
                                </Suspense>
                             </Col>
                          ))}
                    </Row>
                 ))}
         </div>
         <div className="w-100 d-flex justify-content-center category-pagination">
            <Pagination>
               <Pagination.Prev />
               <Pagination.Item active>{1}</Pagination.Item>
               <Pagination.Item>{2}</Pagination.Item>
               <Pagination.Item>{3}</Pagination.Item>
               <Pagination.Item>{4}</Pagination.Item>
               <Pagination.Next />
            </Pagination>
         </div>
      </div>
   );
}
