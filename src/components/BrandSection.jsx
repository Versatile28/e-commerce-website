import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';

const brandLogos = [
   { id: 1, src: 'images/brand-1.svg', alt: 'Brand 1' },
   { id: 2, src: 'images/brand-2.svg', alt: 'Brand 2' },
   { id: 3, src: 'images/brand-3.svg', alt: 'Brand 3' },
   { id: 4, src: 'images/brand-4.svg', alt: 'Brand 4' },
   { id: 5, src: 'images/brand-5.svg', alt: 'Brand 5' },
   { id: 6, src: 'images/brand-6.svg', alt: 'Brand 6' },
];
const BrandSection = () => {
   return (
      <div className="product-carousel-container container pb-5 mb-4">
         <Swiper
         className='pb-5'
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={15}
            slidesPerView={5}
            navigation={false}
            pagination={{
               clickable: true,
               dynamicBullets: true,
            }}
            loop={true}
            grabCursor={true}
         >
            {brandLogos.map((brand) => (
               <SwiperSlide key={brand.id} className="d-flex justify-content-center align-items-end h-auto">
                  <img
                     src={brand.src}
                     alt={brand.alt}
                     className='bg-semi-transparent brand-img'
                  />
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   );
};

export default BrandSection;
