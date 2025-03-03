import React from 'react'
// import Carousel from 'react-bootstrap/Carousel';
// import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';

// const images = [
//    { id: 0, src: "images/home-1-plain.webp", alt: "First slide" },
//    { id: 1, src: "images/home-2-plain.webp", alt: "Second slide" },
//    { id: 2, src: "images/home-3-plain.webp", alt: "Third slide" },
// ];

export default function HeroCarousel() {


   return (
      // <div className='hero-carousel-container'>
      //    <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>
      //       <Carousel.Item interval={5000}>
      //          <div className='slide-container first-slide carousel-image'>
      //             <div className='slide-caption w-xs align-items-start'>
      //                <h3 className='slide-highlight mt-5 mb-3'>OUR ALL-TIME FAVOURITES</h3>
      //                <h1 className='slide-title mb-4'>Blouses & Tops</h1>
      //                <p className='slide-desc mb-5'>The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pit</p>
      //                <button className='slide-btn'>DISCOVER MORE</button>
      //             </div>
      //             <div className='slide-caption'></div>
      //          </div>
      //       </Carousel.Item>
      //       <Carousel.Item interval={5000}>
      //          <div className='slide-container second-slide carousel-image d-flex justify-content-center'>
      //             <div className='d-flex justify-content-center flex-column align-items-center' style={{ width: "40%" }}>
      //                <h3 className='slide-highlight mb-3'>BLUE & WHITE</h3>
      //                <h1 className='slide-title mb-4' style={{ textAlign: "center" }}>Linen and denim</h1>
      //                <button className='slide-btn'>START SHOPPING</button>
      //             </div>
      //          </div>
      //       </Carousel.Item>
      //       <Carousel.Item interval={5000}>
      //          <div className='slide-container third-slide carousel-image'>
      //             <div className='slide-caption d-none d-md-flex'></div>
      //             <div className='slide-caption w-xs' style={{ alignItems: "start" }}>
      //                <h3 className='slide-highlight mb-4' style={{ color: "#BCAC76" }}>SNEAKERS</h3>
      //                <h1 className='slide-title mb-5'>For every <br />occassion</h1>
      //                <button className='slide-btn'>START SHOPPING</button>
      //             </div>
      //          </div>
      //       </Carousel.Item>
      //    </Carousel>
      //    <div className="custom-indicators">
      //       {images.map((image, i) => {
      //          let size = "small";

      //          if (i === index) {
      //             size = "large";
      //          } else if ((index === 0 && i === images.length - 1) || (index === images.length - 1 && i === 0)) {
      //             size = "small";
      //          } else {
      //             size = "medium";
      //          }

      //          return (
      //             <span
      //                key={i}
      //                className={`dot ${size}`}
      //                onClick={() => setIndex(i)}
      //             ></span>
      //          );
      //       })}
      //    </div>
      // </div>

      <Swiper
         className="hero-carousel-container"
         modules={[Navigation, Pagination, A11y]}
         spaceBetween={15}
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
               <div className="d-flex justify-content-center flex-column align-items-center w-40">
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
