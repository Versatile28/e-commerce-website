import React from 'react';
import { useState, useEffect } from 'react';
import HeaderBar from '../layouts/HeaderBar';
import MyNavbar from '../layouts/MyNavbar';
import Footer from '../layouts/Footer';
import FeatureSection from '../components/FeatureSection';
import CategoryFull from '../components/CategoryFull';
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
               <CategoryFull products={products} loading={loading} />
               <FeatureSection />
               <Footer />
            </div>
         )}
      </>
   );
}
