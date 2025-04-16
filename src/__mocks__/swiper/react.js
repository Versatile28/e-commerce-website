module.exports = {
   Swiper: function Swiper(props) { return props.children; },
   SwiperSlide: function SwiperSlide(props) { 
     return <div data-testid="swiper-slide">{props.children}</div>; 
   }
 };