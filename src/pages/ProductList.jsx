import React from 'react';
import HeaderBar from '../layouts/HeaderBar';
import MyNavbar from '../layouts/MyNavbar';
import Footer from '../layouts/Footer';
import FeatureSection from '../components/FeatureSection';
import CategoryFull from '../components/CategoryFull';
import Loader from '../components/Loader';

export default function ProductList({ products, loading, menu, menuLoading }) {

   return (
      <div data-testid="product-list-wrapper">
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
               <CategoryFull products={products}/>
               <FeatureSection />
               <Footer />
            </div>
         )}
      </div>
   );
}
