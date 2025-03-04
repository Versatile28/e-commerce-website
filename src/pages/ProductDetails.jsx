import React from 'react'
import '../App.css';
import HeaderBar from '../layouts/HeaderBar'
import MyNavbar from '../layouts/MyNavbar'
import Footer from '../layouts/Footer'
import FeatureSection from '../components/FeatureSection'
import ProductContainer from '../components/ProductContainer'
import AdditionalInformation from '../components/AdditionalInformation';
import ProductCarousel from '../components/ProductCarousel';

export default function ProductDetails({ products }) {
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
        <ProductCarousel products={products}/>
        <FeatureSection/>
        <Footer/>
    </div>
  )
}
