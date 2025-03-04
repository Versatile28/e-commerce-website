import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import ProductDetails from './pages/ProductDetails';
import ProductList from './pages/ProductList';
import ScrollToTop from './components/ScrollToTop';
import { baseUrl } from './utils/constant';

export default function App() {
   const [products, setProducts] = useState([]);
   const [loading, setLoading] = useState(true);

   const fetchProducts = async () => {
      try {
         const { data } = await axios.get(`${baseUrl}/api/products`, {
            headers: { 'Content-Type': 'application/json' },
         });
         setProducts(data);
      } catch (error) {
         console.error(
            'Error fetching products:',
            error.response?.data?.message || error.message
         );
      } finally {
         setLoading(false);
      }
   };

   useEffect(() => {
      fetchProducts();
   }, []);

   useEffect(() => {
      document.title = 'Homepage - Directory React Theme';

      const favicon = document.querySelector("link[rel='icon']");
      if (favicon) {
         favicon.href = 'heart.png';
      }
   }, []);

   return (
      <div>
         <BrowserRouter>
            <ScrollToTop />
            <Routes>
               <Route
                  path="/"
                  element={<Homepage products={products} loading={loading} />}
               />
               <Route
                  path="/category-full/product/:id"
                  element={
                     <ProductDetails products={products} loading={loading} />
                  }
               />
               <Route path="/category-full" element={<ProductList />} />
            </Routes>
         </BrowserRouter>
      </div>
   );
}
