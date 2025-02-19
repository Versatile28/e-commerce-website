import React, { useState, useMemo } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const brandLogos = [
   { id: 1, src: '/images/brand-1.svg', alt: 'Brand 1' },
   { id: 2, src: '/images/brand-2.svg', alt: 'Brand 2' },
   { id: 3, src: '/images/brand-3.svg', alt: 'Brand 3' },
   { id: 4, src: '/images/brand-4.svg', alt: 'Brand 4' },
   { id: 5, src: '/images/brand-5.svg', alt: 'Brand 5' },
   { id: 6, src: '/images/brand-6.svg', alt: 'Brand 6' },
];

export default function BrandSection() {

   const track = useMemo(() => [...brandLogos, ...brandLogos], []);
   const [currentIndex, setCurrentIndex] = useState(0);


   const offsetPercentage = currentIndex * 20;

   return (
      <div
         className="position-relative"
         style={{
            marginBottom:"6rem",
               maxWidth: '100vw',
      }}
    >
      <Container fluid style={{ overflow: 'hidden' }}>
        <Row
          className="flex-nowrap m-0 p-0"
          style={{
            width: '100%',
            transform: `translateX(-${offsetPercentage}%)`,
            transition: 'transform 0.5s ease',
          }}
        >
          {track.map((brand, i) => (
            <Col
              key={i}
              className="d-flex justify-content-center align-items-center"
              style={{
                width: '20%',
                flex: '0 0 auto',
                height: '180px',
              }}
            >
              <img
                src={brand.src}
                alt={brand.alt}
                style={{ maxWidth: '80px', maxHeight: '80px' }}
              />
            </Col>
          ))}
        </Row>
      </Container>

      <div className="d-flex align-items-center justify-content-center mt-3" style={{height:"1rem"}}>
        {Array.from({ length: 6 }).map((_, i) => {
          let size = "small";

          if (i === currentIndex) {
             size = "large";
          } else if ((currentIndex === 0 && i === brandLogos.length - 1) || (brandLogos === brandLogos.length - 1 && i === 0)) {
             size = "small";
          } else {
             size = "medium";
          }

          return (
            <span
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`dot ${size}`}
              style={{
                margin: '5px 5px',
                cursor: 'pointer',
              }}
            />
          );
        })}
      </div>
    </div >
  );
}
