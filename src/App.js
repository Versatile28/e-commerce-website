import React from 'react'
import { useEffect } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Landing from './components/Landing';
import './App.css'

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
          <Route path="/" element={<Landing/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}