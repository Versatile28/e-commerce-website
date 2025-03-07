import React from 'react';
import { useState, useEffect } from 'react';
import HeaderBar from '../layouts/HeaderBar';
import MyNavbar from '../layouts/MyNavbar';
import Footer from '../layouts/Footer';
import FeatureSection from '../components/FeatureSection';
import ProductContainer from '../components/ProductContainer';
import AdditionalInformation from '../components/AdditionalInformation';
import ProductCarousel from '../components/ProductCarousel';
import Loader from '../components/Loader';



export default function ProductDetails({ products, loading }) {
   const [pageloading, setPageLoading] = useState(true);

   useEffect(() => {
      const handleLoad = () => {
         setTimeout(() => {
            setPageLoading(false);
         }, 1000);
      };

      if (document.readyState === 'complete') {
         handleLoad();
      } else {
         window.addEventListener('load', handleLoad);
      }

      return () => window.removeEventListener('load', handleLoad);
   }, []);
    
   return (
      <>
         {pageloading ? (
            <Loader />
         ) : (
            <div className="position-relative">
               <div className="product-headerbar">
                  <HeaderBar />
               </div>
               <div className="product-mynavbar">
                  <MyNavbar />
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
