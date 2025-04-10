import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import {
   Container,
   Accordion,
   Dropdown,
   Pagination,
   Row,
   Col,
} from 'react-bootstrap';
import { motion } from 'framer-motion';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { GiTrousers } from 'react-icons/gi';
import { TbJacket } from 'react-icons/tb';
import { PiTShirtLight } from 'react-icons/pi';
import { Breadcrumb } from 'react-bootstrap';
import PriceSlider from './PriceSlider';
import { baseUrl } from '../utils/constant';

const colors = [
   { id: 'value_sidebar_Blue', name: 'Blue', color: 'rgb(102, 140, 185)' },
   { id: 'value_sidebar_White', name: 'White', color: 'rgb(255, 255, 255)' },
   { id: 'value_sidebar_Violet', name: 'Violet', color: 'rgb(139, 110, 164)' },
   { id: 'value_sidebar_Red', name: 'Red', color: 'rgb(221, 98, 101)' },
];

export default function CategoryFull({ products, loading }) {
   const [selected, setSelected] = useState('Default');
   const [selectedSize, setSelectedSize] = useState('');
   const [selectedColors, setSelectedColors] = useState([]);
   const [minValue, setMinValue] = useState(40);
   const [maxValue, setMaxValue] = useState(110);
   const [filteredProducts, setFilteredProducts] = useState(products);
   const [selectedBrands, setSelectedBrands] = useState({});
   const [productNumber, setProductNumber] = useState(12);
   const [category, setCategory] = useState('');

   // useEffect(() => {
   //    let filtered = products;
   //    if (Object.values(selectedBrands).some((isSelected) => isSelected)) {
   //       const activeBrands = Object.keys(selectedBrands).filter(
   //          (key) => selectedBrands[key]
   //       );
   //       filtered = filtered.filter((product) =>
   //          activeBrands.includes(product.brand)
   //       );
   //    }
   //    if (category) {
   //       filtered = filtered.filter(
   //          (product) => product.category === category
   //       );
   //    }
   //    if (selectedSize) {
   //       filtered = filtered.filter((product) => product.size.includes(selectedSize));
   //    }
   //    if (minValue) {
   //       filtered = filtered.filter(
   //          (product) => product.price >= parseFloat(minValue)
   //       );
   //    }
   //    if (maxValue) {
   //       filtered = filtered.filter(
   //          (product) => product.price <= parseFloat(maxValue)
   //       );
   //    }
   //    if (selected === "Rating") {
   //       filtered = filtered.sort((a, b) => b.rating - a.rating);
   //    } else if (selected === "Newest first") {
   //       filtered = filtered.sort((a, b) => new Date(b.created) - new Date(a.created));
   //    }
   //    setFilteredProducts(filtered);
   // }, [selectedBrands, selectedSize, minValue, maxValue, selected, category, products]);

   useEffect(() => {
      const fetchFilteredProducts = async () => {
         try {
            const params = new URLSearchParams();

            if (Object.values(selectedBrands).some((val) => val)) {
               const activeBrands = Object.keys(selectedBrands).filter(
                  (key) => selectedBrands[key]
               );
               params.append('selectedBrands', activeBrands.join(','));
            }

            if (category) params.append('category', category);
            if (selectedSize) params.append('selectedSize', selectedSize);
            if (minValue) params.append('minValue', minValue);
            if (maxValue) params.append('maxValue', maxValue);
            if (selected) params.append('selected', selected);
            console.log(params.toString());

            const res = await fetch(`${baseUrl}/api/filter?${params.toString()}`);
            const data = await res.json();
            setFilteredProducts(data);
         } catch (err) {
            console.error('Error fetching filtered products', err);
         }
      };

      fetchFilteredProducts();
   }, [selectedBrands, selectedSize, minValue, maxValue, selected, category]);

   console.log(filteredProducts);

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
      return 2;
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

   const handleCheckboxChange = (event) => {
      const { id, checked } = event.target;
      setSelectedBrands((prev) => ({ ...prev, [id]: checked }));
   };

   const handleRadioChange = (event) => {
      setSelectedSize(event.target.id);
   };

   const handleColorChange = (id) => {
      setSelectedColors((prev) =>
         prev.includes(id)
            ? prev.filter((color) => color !== id)
            : [...prev, id]
      );
   };

   const handleProductNumberChange = (num) => {
      setProductNumber(num);
   };

   const handleCategoryChange = (cat) => {
      setCategory(cat);
   };

   return (
      <Container className="px-3 py-6">
         <div className="row">
            <div className="col-lg-3 col-12 category-menu-container order-2 order-lg-1">
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
                           <li
                              onClick={() => {
                                 handleCategoryChange('Jeans');
                              }}
                           >
                              <p className="category-item">Jeans</p>
                              <span className="item-underline"></span>
                           </li>
                           <li
                              onClick={() => {
                                 handleCategoryChange('Jeans');
                              }}
                           >
                              <p>Dolor</p>
                              <span className="item-underline"></span>
                           </li>
                           <li
                              onClick={() => {
                                 handleCategoryChange('Jeans');
                              }}
                           >
                              <p>Sit amet</p>
                              <span className="item-underline"></span>
                           </li>
                           <li
                              onClick={() => {
                                 handleCategoryChange('Jeans');
                              }}
                           >
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
                           <li
                              onClick={() => {
                                 handleCategoryChange('Jackets');
                              }}
                           >
                              <p>Jackets</p>
                              <span className="item-underline"></span>
                           </li>
                           <li
                              onClick={() => {
                                 handleCategoryChange('Sweaters');
                              }}
                           >
                              <p>Sweaters</p>
                              <span className="item-underline"></span>
                           </li>
                           <li
                              onClick={() => {
                                 handleCategoryChange('Jackets');
                              }}
                           >
                              <p>Sit amet</p>
                              <span className="item-underline"></span>
                           </li>
                           <li
                              onClick={() => {
                                 handleCategoryChange('Jackets');
                              }}
                           >
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
                           <li
                              onClick={() => {
                                 handleCategoryChange('Shirts');
                              }}
                           >
                              <p>Shirts</p>
                              <span className="item-underline"></span>
                           </li>
                           <li
                              onClick={() => {
                                 handleCategoryChange('Tops & blouses');
                              }}
                           >
                              <p>Tops & blouses</p>
                              <span className="item-underline"></span>
                           </li>
                           <li
                              onClick={() => {
                                 handleCategoryChange('Shirts');
                              }}
                           >
                              <p>Sit amet</p>
                              <span className="item-underline"></span>
                           </li>
                           <li
                              onClick={() => {
                                 handleCategoryChange('Shirts');
                              }}
                           >
                              <p>Donec vitae</p>
                              <span className="item-underline"></span>
                           </li>
                        </ul>
                     </Accordion.Body>
                  </Accordion.Item>
               </Accordion>
               <div className="pb-3 mb-3 category-price">
                  <h5 className="fw-bold ls-1 pt-5">Price</h5>
                  <PriceSlider
                     minValue={minValue}
                     setMinValue={setMinValue}
                     maxValue={maxValue}
                     setMaxValue={setMaxValue}
                  />
               </div>
               <div className="category-brand">
                  <h5 className="fw-bold ls-1 pt-4">Brand</h5>
                  <form className="mt-4 mt-lg-0 mb-5">
                     <div className="mb-1">
                        <div className="form-check">
                           <input
                              name="clothes-brand"
                              type="checkbox"
                              className="form-check-input"
                              id="Calvin Klein"
                              checked={selectedBrands['Calvin Klein'] || false}
                              onChange={handleCheckboxChange}
                           />
                           <label
                              htmlFor="Calvin Klein"
                              className="form-check-label"
                           >
                              Calvin Klein <small>(18)</small>
                           </label>
                        </div>
                     </div>
                     <div className="mb-1">
                        <div className="form-check">
                           <input
                              name="clothes-brand"
                              type="checkbox"
                              id="Levi Strauss"
                              className="form-check-input"
                              checked={selectedBrands['Levi Strauss'] || false}
                              onChange={handleCheckboxChange}
                           />
                           <label
                              htmlFor="Levi Strauss"
                              className="form-check-label"
                           >
                              Levi Strauss <small>(30)</small>
                           </label>
                        </div>
                     </div>
                     <div className="mb-1">
                        <div className="form-check">
                           <input
                              name="clothes-brand"
                              type="checkbox"
                              id="Hugo Boss"
                              className="form-check-input"
                              checked={selectedBrands['Hugo Boss'] || false}
                              onChange={handleCheckboxChange}
                           />
                           <label
                              htmlFor="Hugo Boss"
                              className="form-check-label"
                           >
                              Hugo Boss <small>(120)</small>
                           </label>
                        </div>
                     </div>
                     <div className="mb-1">
                        <div className="form-check">
                           <input
                              name="clothes-brand"
                              type="checkbox"
                              id="Tomi Hilfiger"
                              className="form-check-input"
                              checked={selectedBrands['Tomi Hilfiger'] || false}
                              onChange={handleCheckboxChange}
                           />
                           <label
                              htmlFor="Tomi Hilfiger"
                              className="form-check-label"
                           >
                              Tomi Hilfiger <small>(70)</small>
                           </label>
                        </div>
                     </div>
                     <div className="mb-1">
                        <div className="form-check">
                           <input
                              name="clothes-brand"
                              type="checkbox"
                              id="Tom Ford"
                              className="form-check-input"
                              checked={selectedBrands['Tom Ford'] || false}
                              onChange={handleCheckboxChange}
                           />
                           <label
                              htmlFor="Tom Ford"
                              className="form-check-label"
                           >
                              Tom Ford <small>(110)</small>
                           </label>
                        </div>
                     </div>
                  </form>
               </div>
               <div className="category-size">
                  <h5 className="fw-bold ls-1 pt-4">Size</h5>
                  <form className="mt-4 mt-lg-0 mb-5">
                     <div className="mb-1">
                        <div className="form-check">
                           <input
                              name="size"
                              type="radio"
                              id="SMALL"
                              value="SMALL"
                              className="form-check-input"
                              checked={selectedSize === 'SMALL'}
                              onChange={handleRadioChange}
                           />
                           <label htmlFor="SMALL" className="form-check-label">
                              Small
                           </label>
                        </div>
                     </div>
                     <div className="mb-1">
                        <div className="form-check">
                           <input
                              name="size"
                              type="radio"
                              id="MEDIUM"
                              value="MEDIUM"
                              className="form-check-input"
                              checked={selectedSize === 'MEDIUM'}
                              onChange={handleRadioChange}
                           />
                           <label htmlFor="MEDIUM" className="form-check-label">
                              Medium
                           </label>
                        </div>
                     </div>
                     <div className="mb-1">
                        <div className="form-check">
                           <input
                              name="size"
                              type="radio"
                              id="LARGE"
                              value="LARGE"
                              className="form-check-input"
                              checked={selectedSize === 'LARGE'}
                              onChange={handleRadioChange}
                           />
                           <label htmlFor="LARGE" className="form-check-label">
                              Large
                           </label>
                        </div>
                     </div>
                     <div className="mb-1">
                        <div className="form-check">
                           <input
                              name="size"
                              type="radio"
                              id="X-LARGE"
                              value="X-LARGE"
                              className="form-check-input"
                              checked={selectedSize === 'X-LARGE'}
                              onChange={handleRadioChange}
                           />
                           <label
                              htmlFor="X-LARGE"
                              className="form-check-label"
                           >
                              X-Large
                           </label>
                        </div>
                     </div>
                  </form>
               </div>
               <div>
                  <h5 className="fw-bold ls-1 pt-4 mb-3">Color</h5>
                  <ul className="list-inline mb-0 colours-wrapper mt-4 mt-lg-0">
                     {colors.map(({ id, color }) => (
                        <li className="list-inline-item" key={id}>
                           <div className="color-input">
                              <input
                                 name="colour"
                                 type="checkbox"
                                 id={id}
                                 className="form-check-input m-1"
                                 style={{ backgroundColor: color }}
                                 checked={selectedColors.includes(id)}
                                 onChange={() => handleColorChange(id)}
                              />
                           </div>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
            <div className="col-lg-9 col-12 order-1 order-lg-2">
               <div className="mb-5">
                  <span className="category-title">Jackets and tops</span>
                  <p className="text-mute category-desc width-lg-100">
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                     sed do eiusmod tempor incididunt.
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
                     <div className="text-mute d-flex align-items-center">
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
                           className="cursor-pointer"
                           onClick={() => {
                              handleProductNumberChange(12);
                           }}
                        >
                           &nbsp;12&nbsp;
                        </strong>
                        <strong
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
                  {loading
                     ? Array.from({
                          length: Math.ceil(productNumber / itemsPerRow),
                       }).map((_, rowIndex) => (
                          <Row key={rowIndex} className="mt-4">
                             {Array.from({ length: itemsPerRow }).map(
                                (_, idx) => (
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
                                         <Skeleton
                                            className="product-skeleton"
                                            height={300}
                                         />
                                      </motion.div>
                                   </Col>
                                )
                             )}
                          </Row>
                       ))
                     : Array.from({
                          length: Math.ceil(
                             filteredProducts.length / itemsPerRow
                          ),
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
         </div>
      </Container>
   );
}
