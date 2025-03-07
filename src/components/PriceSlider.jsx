import React, { useState } from "react";

const PriceSlider = () => {
  const [minPrice, setMinPrice] = useState(40);
  const [maxPrice, setMaxPrice] = useState(110);
  const minValue = 0;
  const maxValue = 250;

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxPrice - 10);
    setMinPrice(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minPrice + 10);
    setMaxPrice(value);
  };

  return (
    <div className="range-slider-container">
      <div className="slider-values">
        <span>${minPrice}</span>
        <span>${maxPrice}</span>
      </div>
      <div className="slider">
        <input
          type="range"
          min={minValue}
          max={maxValue}
          value={minPrice}
          onChange={handleMinChange}
          className="thumb thumb-left"
        />
        <input
          type="range"
          min={minValue}
          max={maxValue}
          value={maxPrice}
          onChange={handleMaxChange}
          className="thumb thumb-right"
        />
        <div
          className="slider-track"
          style={{
            left: `${(minPrice / maxValue) * 100}%`,
            width: `${((maxPrice - minPrice) / maxValue) * 100}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default PriceSlider;
