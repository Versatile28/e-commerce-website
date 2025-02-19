import React from 'react';
import { Container, Row, Col, Form, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {

   return (
      <footer className="footer w-xs">
         <Container style={{ padding: '6rem 0' }}>
            <Row>
               <Col lg={6} className='mb-5 pe-md-5'>
                  <h5 className="footer-title">Be in touch</h5>
                  <p className="footer-text">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                     itaque temporibus.
                  </p>
                  <InputGroup className="email-input">
                     <Form.Control
                        type="email"
                        placeholder="Your Email Address"
                        style={{
                           fontWeight: '500',
                           border: 'none',
                           borderRadius: '0',
                           borderBottom: '1px black solid',
                           backgroundColor: 'rgb(240, 235, 223,0)',
                           outline: 'none',
                        }}
                     />

                     <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                           <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                        </svg>
                     </button>

                  </InputGroup>
               </Col>
               <Col lg={2}>
                  <h5 className="footer-title mt-2">Shop</h5>
                  <ul className="footer-list">
                     <li>For Women</li>
                     <li>For Men</li>
                     <li>Stores</li>
                     <li>Our Blog</li>
                     <li>Shop</li>
                  </ul>
               </Col>
               <Col lg={2}>
                  <h5 className="footer-title mt-2">Company</h5>
                  <ul className="footer-list">
                     <li>Login</li>
                     <li>Register</li>
                     <li>Wishlist</li>
                     <li>Our Products</li>
                     <li>Checkouts</li>
                  </ul>
               </Col>
               <Col lg={2}>
                  <h5 className="footer-title mt-2">Your account</h5>
                  <ul className="footer-list">
                     <li>Login</li>
                     <li>Register</li>
                     <li>Wishlist</li>
                     <li>Our Products</li>
                     <li>Checkouts</li>
                  </ul>
               </Col>
            </Row>
         </Container>
         <Container className='d-flex flex-column justify-content-center align-items-center'>
            <Row className="footer-bottom d-flex flex-row flex-xs-column justify-content-center align-items-center w-100">
               <Col
                  lg={4}
                  md={12}
                  sm={12}
                  className="text-muted d-flex justify-content-center align-items-center"
               >
                  <div
                     style={{
                        fontFamily:
                           'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                        display: 'flex',
                     }}
                  >
                     &copy; 2025 Your company. All rights reserved.
                  </div>
               </Col>
               <Col lg={8} md={12} sm={12} className="text-lg-end text-md-center text-muted">
                  <span md={6}>Terms & Conditions</span>
                  <span md={6}>Privacy & cookies</span>
                  <span md={6}>Accessibility</span>
                  <span md={6}>Customer Data Promise</span>
               </Col>
            </Row>
         </Container>
      </footer>
   );
};

export default Footer;
