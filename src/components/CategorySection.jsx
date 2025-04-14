import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function CategorySection() {
  return (
<div className='category-section'>
<Container className="w-xs category-container">
   <Row>
     <Col xs={12} sm={6} className="mb-3 mb-sm-0">
       <div className="image-container">
         <Link to='/category-full'>
           <img
             src="images/category-women.webp"
             alt="Women Category"
             className="img-fluid"
           />
           <div className="overlay-text">Women</div>
         </Link>
       </div>
     </Col>

     <Col xs={12} sm={6}>
       <div className="image-container">
         <Link to='/category-full'>
           <img
             src="images/category-men.webp"
             alt="Men Category"
             className="img-fluid"
           />
           <div className="overlay-text">Men</div>
         </Link>
       </div>
     </Col>
   </Row>
 </Container>
</div>
  )
}
