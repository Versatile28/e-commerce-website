import React from 'react';
import { lazy, Suspense } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
import { motion } from 'framer-motion';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ProductCard = lazy(() => import('./ProductCard'));

const ProductCarousel = ({ products }) => {
   const cardVariants = {
      hidden: { opacity: 0, scale: 0.5 },
      visible: {
         opacity: 1,
         scale: 1,
         transition: { duration: 0.5, ease: 'easeOut' },
      },
   };

   return (
      <div className="product-carousel-container container pb-5 mb-4">
         <h5 className="mt-5 mb-4 fw-semibold font-body-font-family">
            You might also like these
         </h5>
         <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={15}
            navigation={false}
            pagination={{
               clickable: true,
               dynamicBullets: true,
            }}
            loop={products.length > 4}
            grabCursor={true}
            breakpoints={{
               575: { slidesPerView: 2 },
               992: { slidesPerView: 3 },
               1024: { slidesPerView: 4 },
            }}
         >
            {products.map((item, index) => (
               <SwiperSlide key={item.id || `slide-${index}`} className="mb-5">
                  <Suspense
                     fallback={
                        <Skeleton className="product-skeleton" height={300} />
                     }
                  >
                     <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                           once: true,
                           amount: 0.2,
                        }}
                     >
                        <ProductCard
                           id={item._id}
                           badge={item.badge}
                           image={item.image}
                           name={item.name}
                           price={item.price}
                           rating={item.rating}
                        />
                     </motion.div>
                  </Suspense>
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   );
};

export default ProductCarousel;
