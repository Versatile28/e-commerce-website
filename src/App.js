import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Landing from './components/Landing';
import './App.css'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}