import React from 'react'
import HeaderBar from '../layouts/HeaderBar'
import MyNavbar from '../layouts/MyNavbar'
import Footer from '../layouts/Footer'
import HeroCarousel from '../components/HeroCarousel'
import FeatureSection from '../components/FeatureSection'
import HistorySection from '../components/HistorySection'
import NewArrivalsSection from '../components/NewArrivalsSection'
import CountdownSection from '../components/CountdownSection'
import CatagorySection from '../components/CatagorySection'
import BrandSection from '../components/BrandSection'
import ProductSection from '../components/ProductSection'
import '../App.css';

export default function Homepage() {
  return (
    <div style={{position:"relative"}}>
        <div style={{position:"absolute",width:'100%', zIndex:"1"}}>
        <HeaderBar/>
        <MyNavbar/>
        </div>
        <div style={{position:"relative",width:"100%"}}>
        <HeroCarousel/>
        </div>
        <CatagorySection/>
        <NewArrivalsSection/>
        <ProductSection/>
        <CountdownSection/>
        <HistorySection/>
        <BrandSection/>
        <FeatureSection/>
        <Footer/>
    </div>
  )
}
