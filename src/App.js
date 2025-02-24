import React from 'react'
import { useEffect } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import Homepage from './pages/Homepage';

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
      <BrowserRouter basename='/e-commerce-website'>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}