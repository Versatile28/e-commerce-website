import React from 'react'
import HeaderBar from '../layouts/HeaderBar'
import MyNavbar from '../layouts/MyNavbar'
import Footer from '../layouts/Footer'
import FeatureSection from '../components/FeatureSection'
import BrandSection from '../components/BrandSection'
import '../App.css';

export default function Homepage() {
  return (
    <div style={{position:"relative"}}>
        <div style={{position:"absolute",width:'100%', zIndex:"1"}}>
        <HeaderBar/>
        <MyNavbar/>
        </div>
        <BrandSection/>
        <FeatureSection/>
        <Footer/>
    </div>
  )
}
