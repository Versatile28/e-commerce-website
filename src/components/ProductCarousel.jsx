import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
import ProductCard from './ProductCard';

const ProductCarousel = ({ products }) => {
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
                  <ProductCard {...item} />
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   );
};

export default ProductCarousel;
