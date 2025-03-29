import React from 'react';
import HeaderBar from '../layouts/HeaderBar';
import MyNavbar from '../layouts/MyNavbar';
import Footer from '../layouts/Footer';
import FeatureSection from '../components/FeatureSection';
import ProductContainer from '../components/ProductContainer';
import AdditionalInformation from '../components/AdditionalInformation';
import ProductCarousel from '../components/ProductCarousel';
import Loader from '../components/Loader';



export default function ProductDetails({ products, loading, menu, menuLoading }) {
    
   return (
      <>
         {menuLoading ? (
            <Loader />
         ) : (
            <div className="position-relative">
               <div className="product-headerbar">
                  <HeaderBar />
               </div>
               <div className="product-mynavbar">
                  <MyNavbar menu={menu}/>
               </div>
               <ProductContainer/>
               <AdditionalInformation />
               <ProductCarousel products={products} loading={loading} />
               <FeatureSection />
               <Footer />
            </div>
         )}
      </>
   );
}
