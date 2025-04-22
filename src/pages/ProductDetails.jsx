import React from 'react';
import HeaderBar from '../layouts/HeaderBar';
import MyNavbar from '../layouts/MyNavbar';
import Footer from '../layouts/Footer';
import FeatureSection from '../components/FeatureSection';
import ProductContainer from '../components/ProductContainer';
import AdditionalInformation from '../components/AdditionalInformation';
import ProductCarousel from '../components/ProductCarousel';
import { baseUrl } from '../utils/constant';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from '../components/Loader';



export default function ProductDetails({ products, loading, menu, menuLoading }) {
   const [descLoading, setDescLoading] = useState(true);
      const [product, setProduct] = useState({   
         _id: 1,
         badge: '',
         image: '/images/1.1.webp',
         name: 'White Tee',
         price: 40.0,
         rating: 3.5,
         category: 'Tops & blouses',
         type: "COLLEGE",
         size: ["SMALL", "MEDIUM", "LARGE"],
         brand: "Calvin Klein",
         tags: ["Leisure", "Elegant"]});
   
   
      const { id } = useParams();
   
      useEffect(() => {
         const fetchProduct = async () => {
            try {
               const { data } = await axios.get(
                  `${baseUrl}/api/products/${id}`,
                  {
                     headers: { 'Content-Type': 'application/json' },
                  }
               );
               setProduct(data);
            } catch (err) {
               console.error(
                  'Error fetching product:',
                  err.response?.data?.message || err.message
               );
            } finally {
               setDescLoading(false);
            }
         };
   
         fetchProduct();
      }, [id]);
   
    
   return (
      <>
         {menuLoading || descLoading ? (
            <Loader />
         ) : (
            <div data-testid="product-details-wrapper" className="position-relative">
               <div data-testid="product-headerbar" className="product-headerbar">
                  <HeaderBar />
               </div>
               <div data-testid="product-mynavbar" className="product-mynavbar">
                  <MyNavbar menu={menu}/>
               </div>
               <ProductContainer product={product}/>
               <AdditionalInformation product={product}/>
               <ProductCarousel products={products} loading={loading} />
               <FeatureSection />
               <Footer />
            </div>
         )}
      </>
   );
}
