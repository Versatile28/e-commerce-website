import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';

export default function HeroCarousel() {


   return (

      <Swiper
         className="hero-carousel-container"
         modules={[Navigation, Pagination, A11y]}
         spaceBetween={0}
         navigation={true}
         pagination={{ clickable: true, dynamicBullets: true }}
         loop={true}
         grabCursor={true}
         speed={2000}
      >
         <SwiperSlide>
            <div className="slide-container first-slide carousel-image">
               <div className="slide-caption w-xs align-items-start p-7 padd-5">
                  <h3 className="slide-highlight mt-5 mb-3">OUR ALL-TIME FAVOURITES</h3>
                  <h1 className="slide-title mb-4">Blouses & Tops</h1>
                  <p className="slide-desc mb-5">
                     The bedding was hardly able to cover it and seemed ready to slide off any moment.
                  </p>
                  <button className="slide-btn">DISCOVER MORE</button>
               </div>
               <div className='slide-caption d-lg-inline-block d-none'></div>
            </div>
         </SwiperSlide>

         <SwiperSlide>
            <div className="slide-container second-slide carousel-image d-flex justify-content-center">
               <div className="d-flex justify-content-center flex-column align-items-center w-75">
                  <h3 className="slide-highlight mb-3">BLUE & WHITE</h3>
                  <h1 className="slide-title mb-4 text-center">Linen and Denim</h1>
                  <button className="slide-btn">START SHOPPING</button>
               </div>
            </div>
         </SwiperSlide>

         <SwiperSlide>
            <div className="slide-container third-slide carousel-image">
               <div className='slide-caption d-none d-lg-flex'></div>
               <div className="slide-caption w-xs ps-lg-0 ps-5">
                  <h3 className="slide-highlight mb-4 secondary-color-1">SNEAKERS</h3>
                  <h1 className="slide-title mb-5">For every <br /> occasion</h1>
                  <button className="slide-btn">START SHOPPING</button>
               </div>
            </div>
         </SwiperSlide>
      </Swiper>
   )
}
