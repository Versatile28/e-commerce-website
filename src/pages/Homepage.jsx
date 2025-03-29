import React from 'react';
import HeaderBar from '../layouts/HeaderBar';
import MyNavbar from '../layouts/MyNavbar';
import Footer from '../layouts/Footer';
import HeroCarousel from '../components/HeroCarousel';
import FeatureSection from '../components/FeatureSection';
import HistorySection from '../components/HistorySection';
import NewArrivalsSection from '../components/NewArrivalsSection';
import CountdownSection from '../components/CountdownSection';
import CategorySection from '../components/CategorySection';
import BrandSection from '../components/BrandSection';
import ProductSection from '../components/ProductSection';
import Loader from '../components/Loader';
import '../App.css';

export default function Homepage({ products, loading, menu, menuLoading }) {

   return (
      <>
         {menuLoading? (
            <Loader />
         ) : (
            <div className="position-relative w-100">
               <header className="position-absolute w-100 navigation-bars">
                  <HeaderBar />
                  <MyNavbar menu={menu}/>
               </header>
               <div className="position-relative w-100">
                  <HeroCarousel />
               </div>
               <CategorySection />
               <NewArrivalsSection />
               <ProductSection products={products} loading={loading} />
               <CountdownSection />
               <HistorySection />
               <BrandSection />
               <FeatureSection />
               <Footer />
            </div>
         )}
      </>
   );
}
