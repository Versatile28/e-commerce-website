import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
import ProductCard from './ProductCard';

const products = [
   {
      id: 1,
      badgeText: 'Fresh',
      imageSrc: 'images/1.1.webp',
      title: 'White Tee',
      price: 40.0,
      rating: 3.5,
   },
   {
      id: 2,
      badgeText: '',
      imageSrc: 'images/2.1.webp',
      title: 'Black Blouse',
      price: 40.0,
      rating: 3.5,
   },
   {
      id: 3,
      badgeText: 'Sale',
      imageSrc: 'images/3.1.webp',
      title: 'College jacket',
      price: 40.0,
      rating: 3.5,
   },
   {
      id: 4,
      badgeText: '',
      imageSrc: 'images/4.1.webp',
      title: 'Carrot-fit jeans',
      price: 40.0,
      rating: 3.5,
   },
   {
      id: 5,
      badgeText: '',
      imageSrc: 'images/5.1.webp',
      title: 'Striped T-Shirt',
      price: 40.0,
      rating: 3.5,
   },
   {
      id: 6,
      badgeText: '',
      imageSrc: 'images/6.1.webp',
      title: 'Short top',
      price: 40.0,
      rating: 3.5,
   },
   {
      id: 7,
      badgeText: 'Sold out',
      imageSrc: 'images/7.1.webp',
      title: 'Ethnic Sweater',
      price: 40.0,
      rating: 3.5,
   },
   {
      id: 8,
      badgeText: '',
      imageSrc: 'images/8.1.webp',
      title: 'Beige',
      price: 40.0,
      rating: 3.5,
   },
   {
      id: 9,
      badgeText: '',
      imageSrc: 'images/9.1.webp',
      title: 'Skull Tree',
      price: 40.0,
      rating: 3.5,
   },
   {
      id: 10,
      badgeText: '',
      imageSrc: 'images/10.1.webp',
      title: 'Trucker jacket',
      price: 40.0,
      rating: 3.5,
   },
   {
      id: 11,
      badgeText: '',
      imageSrc: 'images/11.1.webp',
      title: 'Blouse',
      price: 40.0,
      rating: 3.5,
   },
   {
      id: 12,
      badgeText: '',
      imageSrc: 'images/12.1.webp',
      title: 'Shirt',
      price: 40.0,
      rating: 3.5,
   },
];

const ProductCarousel = () => {
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
            loop={true}
            grabCursor={true}
            breakpoints={{
               575: { slidesPerView: 2 },
               992: { slidesPerView: 3 },
               1024: { slidesPerView: 4 },
            }}
         >
            {products.map((item) => (
               <SwiperSlide key={item.id} className="mb-5">
                  <ProductCard {...item} />
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   );
};

export default ProductCarousel;
