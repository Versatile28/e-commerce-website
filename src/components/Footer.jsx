import React from 'react';
import {
   Container,
   Row,
   Col,
   Form,
   InputGroup,
   Accordion,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GrMailOption } from "react-icons/gr";

const Footer = () => {
   return (
      <footer className="footer w-xs">
         <Container style={{ padding: '6rem 0' }}>
            <Row>
               <Col lg={6} className="pe-lg-5 pe-xl-6 mb-5 mb-lg-0 col-lg-5">
                  <h5 className="footer-title">Be in touch</h5>
                  <p className="footer-text">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                     itaque temporibus.
                  </p>
                  <InputGroup className="email-input">
                     <Form.Control
                        type="email"
                        placeholder="Your Email Address"
                     />

                     <button>
                     <GrMailOption className='email-icon'/>
                     </button>
                  </InputGroup>
               </Col>
               <Col lg={6}>
                  <Row className="d-lg-none">
                     {/* Collapsible sections for small screens */}
                     <Col xl={12} className="mt-4">
                        <Accordion>
                           <Accordion.Item eventKey="0">
                              <Accordion.Header className="footer-title-a">
                                 Shop
                              </Accordion.Header>
                              <Accordion.Body>
                                 <ul className="footer-list">
                                    <li>For Women</li>
                                    <li>For Men</li>
                                    <li>Stores</li>
                                    <li>Our Blog</li>
                                    <li>Shop</li>
                                 </ul>
                              </Accordion.Body>
                           </Accordion.Item>
                        </Accordion>

                        <Accordion>
                           <Accordion.Item eventKey="1">
                              <Accordion.Header className="footer-title-a">
                                 Company
                              </Accordion.Header>
                              <Accordion.Body>
                                 <ul className="footer-list">
                                    <li>Login</li>
                                    <li>Register</li>
                                    <li>Wishlist</li>
                                    <li>Our Products</li>
                                    <li>Checkouts</li>
                                 </ul>
                              </Accordion.Body>
                           </Accordion.Item>
                        </Accordion>

                        <Accordion>
                           <Accordion.Item eventKey="2">
                              <Accordion.Header className="footer-title-a">
                                 Your Account
                              </Accordion.Header>
                              <Accordion.Body>
                                 <ul className="footer-list">
                                    <li>Login</li>
                                    <li>Register</li>
                                    <li>Wishlist</li>
                                    <li>Our Products</li>
                                    <li>Checkouts</li>
                                 </ul>
                              </Accordion.Body>
                           </Accordion.Item>
                        </Accordion>
                     </Col>
                  </Row>

                  {/* Standard Layout for Large Screens */}
                  <Row className="d-none d-lg-flex">
                     <Col lg={4}>
                        <h5 className="footer-title mt-2">Shop</h5>
                        <ul className="footer-list list-unstyled">
                           <li>For Women</li>
                           <li>For Men</li>
                           <li>Stores</li>
                           <li>Our Blog</li>
                           <li>Shop</li>
                        </ul>
                     </Col>
                     <Col lg={4}>
                        <h5 className="footer-title mt-2">Company</h5>
                        <ul className="footer-list list-unstyled">
                           <li>Login</li>
                           <li>Register</li>
                           <li>Wishlist</li>
                           <li>Our Products</li>
                           <li>Checkouts</li>
                        </ul>
                     </Col>
                     <Col lg={4}>
                        <h5 className="footer-title mt-2">Your Account</h5>
                        <ul className="footer-list list-unstyled">
                           <li>Login</li>
                           <li>Register</li>
                           <li>Wishlist</li>
                           <li>Our Products</li>
                           <li>Checkouts</li>
                        </ul>
                     </Col>
                  </Row>
               </Col>
            </Row>
         </Container>
         <Container className="d-flex flex-column justify-content-center align-items-center">
            <Row className="footer-bottom d-flex flex-row flex-xs-column justify-content-center align-items-center w-100">
               <Col
                  lg={4}
                  md={12}
                  sm={12}
                  className="text-muted d-flex justify-content-lg-start justify-content-md-center justify-content-sm-center justify-content-center align-items-center mb-2"
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
               <Col
                  lg={8}
                  md={12}
                  sm={12}
                  xs={12}
                  className="text-lg-end text-md-center text-muted d-flex flex-wrap justify-content-lg-end justify-content-md-center justify-content-sm-center justify-content-center mb-2"
               >
                  <span>Terms & Conditions</span>
                  <span>Privacy & cookies</span>
                  <span>Accessibility</span>
                  <span>Customer Data Promise</span>
               </Col>
            </Row>
         </Container>
      </footer>
   );
};

export default Footer;
