import React from 'react'
import HeaderBar from './HeaderBar'
import MyNavbar from './MyNavbar'
import HeroCarousel from './HeroCarousel'
import Footer from './Footer'
import FeatureSection from './FeatureSection'
import HistorySection from './HistorySection'
import NewArrivalsSection from './NewArrivalsSection'
import CountdownSection from './CountdownSection'
import CatagorySection from './CatagorySection'
import BrandSection from './BrandSection'
import ProductSection from './ProductSection'

export default function Landing() {
  return (
    <div>
        <div style={{position:"absolute",width:'100vw', zIndex:"1"}}>
        <HeaderBar/>
        <MyNavbar/>
        </div>
        <div style={{position:"relative"}}>
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
