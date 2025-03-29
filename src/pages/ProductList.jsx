import React from 'react';
import HeaderBar from '../layouts/HeaderBar';
import MyNavbar from '../layouts/MyNavbar';
import Footer from '../layouts/Footer';
import FeatureSection from '../components/FeatureSection';
import CategoryFull from '../components/CategoryFull';
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
               <CategoryFull products={products} loading={loading} />
               <FeatureSection />
               <Footer />
            </div>
         )}
      </>
   );
}
