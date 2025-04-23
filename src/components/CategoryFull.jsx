import React, { useState, useEffect } from 'react';
import { Col, Container } from 'react-bootstrap';
import 'react-loading-skeleton/dist/skeleton.css';
import { baseUrl } from '../utils/constant';
import CategoryMenuContainer from './CategoryMenuContainer';
import CategoryProductContainer from './CategoryProductContainer';

const colors = [
   { id: 'value_sidebar_Blue', name: 'Blue', color: 'rgb(102, 140, 185)' },
   { id: 'value_sidebar_White', name: 'White', color: 'rgb(255, 255, 255)' },
   { id: 'value_sidebar_Violet', name: 'Violet', color: 'rgb(139, 110, 164)' },
   { id: 'value_sidebar_Red', name: 'Red', color: 'rgb(221, 98, 101)' },
];

export default function CategoryFull({ products }) {
   const [selected, setSelected] = useState('Default');
   const [selectedSize, setSelectedSize] = useState('');
   const [selectedColors, setSelectedColors] = useState([]);
   const [minValue, setMinValue] = useState(40);
   const [maxValue, setMaxValue] = useState(110);
   const [filteredProducts, setFilteredProducts] = useState(products);
   const [selectedBrands, setSelectedBrands] = useState({});
   const [productNumber, setProductNumber] = useState(12);
   const [category, setCategory] = useState('');
   const [filterLoading, setFilterLoading] = useState(true);

   useEffect(() => {
      const fetchFilteredProducts = async () => {
         try {
            const params = new URLSearchParams();
            setFilterLoading(true);

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

            const res = await fetch(
               `${baseUrl}/api/filter?${params.toString()}`,
               {
                  headers: { 'Content-Type': 'application/json' },
               }
            );
            const data = await res.json();
            setFilteredProducts(data);
         } catch (err) {
            console.error('Error fetching filtered products', err);
         } finally {
            setFilterLoading(false);
         }
      };

      fetchFilteredProducts();
   }, [selectedBrands, selectedSize, minValue, maxValue, selected, category]);

   console.log(filteredProducts);

   const clearFilters = () => {
      setSelectedBrands({});
      setCategory('');
      setSelectedSize('');
      setMinValue(40);
      setMaxValue(110);
      setSelected('Default');
   };

   const handleSelect = (option) => {
      setSelected(option);
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
            <Col data-testid="menu" className="col-lg-3 col-12 order-2 order-lg-1">
               <CategoryMenuContainer
                  colors={colors}
                  selectedColors={selectedColors}
                  clearFilters={clearFilters}
                  handleCheckboxChange={handleCheckboxChange}
                  handleRadioChange={handleRadioChange}
                  handleColorChange={handleColorChange}
                  handleCategoryChange={handleCategoryChange}
                  minValue={minValue}
                  setMinValue={setMinValue}
                  maxValue={maxValue}
                  setMaxValue={setMaxValue}
                  selectedBrands={selectedBrands}
                  selectedSize={selectedSize}
               />
            </Col>
            <Col data-testid="products" className="col-lg-9 col-12 order-1 order-lg-2">
               <CategoryProductContainer
                  productNumber={productNumber}
                  filterLoading={filterLoading}
                  handleSelect={handleSelect}
                  itemsPerRow={itemsPerRow}
                  handleProductNumberChange={handleProductNumberChange}
                  selected={selected}
                  filteredProducts={filteredProducts}
               />
            </Col>
         </div>
      </Container>
   );
}
