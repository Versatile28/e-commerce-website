import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export default function CatagorySection() {
  return (
<div style={{backgroundColor:"#F8F9FA"}}>
<Container className="w-xs" style={{padding:"5rem 1rem"}}>
   <Row>
     <Col xs={12} sm={6} className="mb-3 mb-sm-0">
       <div className="image-container">
         <a href="/women">
           <img
             src="images/category-women.webp"
             alt="Women"
             className="img-fluid"
           />
           <div className="overlay-text">Women</div>
         </a>
       </div>
     </Col>

     <Col xs={12} sm={6}>
       <div className="image-container">
         <a href="/men">
           <img
             src="images/category-men.webp"
             alt="Men"
             className="img-fluid"
           />
           <div className="overlay-text">Men</div>
         </a>
       </div>
     </Col>
   </Row>
 </Container>
</div>
  )
}
