import React, { useEffect, useRef, useState } from "react";
import noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";

const PriceSlider = ({ min = 0, max = 250, initialMin = 40, initialMax = 110, onChange }) => {
   const sliderRef = useRef(null);
   const [minValue, setMinValue] = useState(initialMin);
   const [maxValue, setMaxValue] = useState(initialMax);
 
   useEffect(() => {
     if (!sliderRef.current) return;
 
     const slider = noUiSlider.create(sliderRef.current, {
       start: [initialMin, initialMax],
       connect: true,
       range: { min, max },
       step: 1,
     });
 
     slider.on("update", (values) => {
       setMinValue(Math.round(values[0]));
       setMaxValue(Math.round(values[1]));
       onChange && onChange({ min: Math.round(values[0]), max: Math.round(values[1]) });
     });
 
     return () => slider.destroy();
   }, [min, max, initialMin, initialMax, onChange]);
 
   return (
     <div className="range-slider-container">
       <div className="nouislider-wrapper">
         <div ref={sliderRef} className="nouislider"></div>
       </div>
       <div className="slider-values">
         <span>From: ${minValue}</span>
         <span>To: ${maxValue}</span>
       </div>
     </div>
   );
 };
 
 export default PriceSlider;