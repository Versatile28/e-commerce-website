import React from 'react'
import { useState, useEffect } from "react";
import axios from 'axios';
import {HashRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import Homepage from './pages/Homepage';
import ProductDetails from './pages/ProductDetails';

export default function App() {

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

   useEffect(() => {
      document.title = "Homepage - Directory React Theme";
  
      const favicon = document.querySelector("link[rel='icon']");
      if (favicon) {
        favicon.href = "heart.png";
      }
    }, []);

  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Homepage products={products}/>} />
          <Route path="/category-full/product/:id" element={<ProductDetails products={products}/>} />
        </Routes>
      </HashRouter>
    </div>
  )
}