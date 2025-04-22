import React from 'react';
import HeaderBar from '../layouts/HeaderBar';
import MyNavbar from '../layouts/MyNavbar';
import Footer from '../layouts/Footer';
import FeatureSection from '../components/FeatureSection';
import CategoryFull from '../components/CategoryFull';
import Loader from '../components/Loader';

export default function ProductList({ products, loading, menu, menuLoading }) {

   return (
      <div>
         {menuLoading ? (
            <Loader />
         ) : (
            <div data-testid="product-list-wrapper" className="position-relative">
               <div data-testid="product-headerbar" className="product-headerbar">
                  <HeaderBar />
               </div>
               <div data-testid="product-mynavbar" className="product-mynavbar">
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
