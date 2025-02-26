import React from 'react'
import { useEffect } from "react";
import {HashRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import Homepage from './pages/Homepage';
import ProductDetails from './pages/ProductDetails';

export default function App() {

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
          <Route path="/" element={<Homepage />} />
          <Route path="/category-full/product" element={<ProductDetails />} />
        </Routes>
      </HashRouter>
    </div>
  )
}