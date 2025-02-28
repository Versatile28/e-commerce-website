import React from 'react'
import '../App.css';
import HeaderBar from '../layouts/HeaderBar'
import MyNavbar from '../layouts/MyNavbar'
import Footer from '../layouts/Footer'
import FeatureSection from '../components/FeatureSection'
import BrandSection from '../components/BrandSection'
import ProductContainer from '../components/ProductContainer'
import AdditionalInformation from '../components/AdditionalInformation';

export default function Homepage() {
  return (
    <div className='position-relative'>
        <div className='product-headerbar'>
        <HeaderBar/>
        </div>
        <div className='product-mynavbar'>
        <MyNavbar/>
        </div>
        <ProductContainer/>
        <AdditionalInformation/>
        <BrandSection/>
        <FeatureSection/>
        <Footer/>
    </div>
  )
}
