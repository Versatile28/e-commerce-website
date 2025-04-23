import React from 'react';
import { Accordion } from 'react-bootstrap';
import { GiTrousers } from 'react-icons/gi';
import { TbJacket } from 'react-icons/tb';
import { PiTShirtLight } from 'react-icons/pi';
import PriceSlider from './PriceSlider';

export default function CategoryMenuContainer({
   colors,
   selectedColors,
   clearFilters,
   handleCheckboxChange,
   handleRadioChange,
   handleColorChange,
   handleCategoryChange,
   minValue,
   setMinValue,
   maxValue,
   setMaxValue,
   selectedBrands,
   selectedSize
}) {
   return (
      <div className="category-menu-container">
         <h5 className="fw-bold ls-1">Category</h5>
         <Accordion className="category-menu">
            <Accordion.Item eventKey="0">
               <Accordion.Header className="category-menu-head">
                  <GiTrousers className="category-menu-icons" />
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
                  <TbJacket className="category-menu-icons" />
                  <span className="category-menu-title">Jackets</span>
                  <span className="text-mute category-menu-count ps-2">55</span>
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
                  <PiTShirtLight className="category-menu-icons" />
                  <span className="category-menu-title">T-Shirts</span>
                  <span className="text-mute category-menu-count ps-2">33</span>
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
                     <label htmlFor="Calvin Klein" className="form-check-label">
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
                     <label htmlFor="Levi Strauss" className="form-check-label">
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
                     <label htmlFor="Hugo Boss" className="form-check-label">
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
                     <label htmlFor="Tom Ford" className="form-check-label">
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
                     <label htmlFor="X-LARGE" className="form-check-label">
                        X-Large
                     </label>
                  </div>
               </div>
            </form>
         </div>
         <div className="category-color pb-5">
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
         <div className="m-3 d-flex justify-content-center">
            <button
               className="clear-filter-btn py-1 px-3"
               onClick={clearFilters}
            >
               Clear Filters
            </button>
         </div>
      </div>
   );
}
