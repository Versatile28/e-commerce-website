import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function FeatureSection() {
   return (
      <section className="features-section py-5 bg-light" data-testid="feature-section">
         <Container>
            <Row className="g-4">
               {/* 1. Free shipping & return */}
               <Col lg={3} md={6} sm={6} xs={12} className="text-center feature-block" data-testid="feature-block">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     data-testid="feature-icon"
                     role="img"
                     viewBox="0 0 24 24"
                     width="30"
                     height="30"
                     color="#000000"
                     fill="none"
                  >
                     <path
                        d="M19.5 17.5C19.5 18.8807 18.3807 20 17 20C15.6193 20 14.5 18.8807 14.5 17.5C14.5 16.1193 15.6193 15 17 15C18.3807 15 19.5 16.1193 19.5 17.5Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                     />
                     <path
                        d="M9.5 17.5C9.5 18.8807 8.38071 20 7 20C5.61929 20 4.5 18.8807 4.5 17.5C4.5 16.1193 5.61929 15 7 15C8.38071 15 9.5 16.1193 9.5 17.5Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                     />
                     <path
                        d="M14.5 17.5H9.5M2 4H12C13.4142 4 14.1213 4 14.5607 4.43934C15 4.87868 15 5.58579 15 7V15.5M15.5 6.5H17.3014C18.1311 6.5 18.5459 6.5 18.8898 6.6947C19.2336 6.8894 19.4471 7.2451 19.8739 7.95651L21.5725 10.7875C21.7849 11.1415 21.8911 11.3186 21.9456 11.5151C22 11.7116 22 11.918 22 12.331V15C22 15.9346 22 16.4019 21.799 16.75C21.6674 16.978 21.478 17.1674 21.25 17.299C20.9019 17.5 20.4346 17.5 19.5 17.5M2 13V15C2 15.9346 2 16.4019 2.20096 16.75C2.33261 16.978 2.52197 17.1674 2.75 17.299C3.09808 17.5 3.56538 17.5 4.5 17.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                     />
                     <path
                        d="M2 7H8M2 10H6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                     />
                  </svg>
                  <div>
                     <h6 className="fw-bolder">Free shipping & return</h6>
                     <p>Free Shipping over $300</p>
                  </div>
               </Col>

               {/* 2. Money back guarantee */}
               <Col lg={3} md={6} sm={6} xs={12} className="text-center feature-block" data-testid="feature-block">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     data-testid="feature-icon"
                     role="img"
                     viewBox="0 0 24 24"
                     width="30"
                     height="30"
                     color="#000000"
                     fill="none"
                  >
                     <path
                        d="M14 18C18.4183 18 22 14.4183 22 10C22 5.58172 18.4183 2 14 2C9.58172 2 6 5.58172 6 10C6 14.4183 9.58172 18 14 18Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                     />
                     <path
                        d="M3.15657 11C2.42523 12.1176 2 13.4535 2 14.8888C2 18.8162 5.18378 22 9.11116 22C10.5465 22 11.8824 21.5748 13 20.8434"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                     />
                     <path
                        d="M15.7712 8.20524C15.555 7.29311 14.4546 6.47004 13.1337 7.08579C11.8128 7.70154 11.603 9.68269 13.601 9.89315C14.5041 9.98828 15.0928 9.78277 15.6319 10.3641C16.1709 10.9454 16.2711 12.562 14.8931 12.9977C13.5151 13.4334 12.1506 12.7526 12.002 11.786M13.9862 6.00421V6.87325M13.9862 13.1318V14.0042"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                     />
                  </svg>
                  <div>
                     <h6 className="fw-bolder">Money / back guarantee</h6>
                     <p>30 Days Money Back Guarantee</p>
                  </div>
               </Col>

               {/* 3. Best prices */}
               <Col lg={3} md={6} sm={6} xs={12} className="text-center feature-block" data-testid="feature-block">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     data-testid="feature-icon"
                     role="img"
                     viewBox="0 0 24 24"
                     width="30"
                     height="30"
                     color="#000000"
                     fill="none"
                  >
                     <path
                        d="M7.69171 19.6161C8.28274 19.6161 8.57825 19.6161 8.84747 19.716C8.88486 19.7298 8.92172 19.7451 8.95797 19.7617C9.21897 19.8815 9.42793 20.0904 9.84585 20.5083C10.8078 21.4702 11.2887 21.9512 11.8805 21.9955C11.96 22.0015 12.04 22.0015 12.1195 21.9955C12.7113 21.9512 13.1923 21.4702 14.1541 20.5083C14.5721 20.0904 14.781 19.8815 15.042 19.7617C15.0783 19.7451 15.1151 19.7298 15.1525 19.716C15.4218 19.6161 15.7173 19.6161 16.3083 19.6161H16.4173C17.9252 19.6161 18.6792 19.6161 19.1476 19.1476C19.6161 18.6792 19.6161 17.9252 19.6161 16.4173V16.3083C19.6161 15.7173 19.6161 15.4218 19.716 15.1525C19.7298 15.1151 19.7451 15.0783 19.7617 15.042C19.8815 14.781 20.0904 14.5721 20.5083 14.1541C21.4702 13.1923 21.9512 12.7113 21.9955 12.1195C22.0015 12.04 22.0015 11.96 21.9955 11.8805C21.9512 11.2887 21.4702 10.8078 20.5083 9.84585C20.0904 9.42793 19.8815 9.21897 19.7617 8.95797C19.7451 8.92172 19.7298 8.88486 19.716 8.84747C19.6161 8.57825 19.6161 8.28274 19.6161 7.69171V7.58269C19.6161 6.07479 19.6161 5.32083 19.1476 4.85239C18.6792 4.38394 17.9252 4.38394 16.4173 4.38394H16.3083C15.7173 4.38394 15.4218 4.38394 15.1525 4.28405C15.1151 4.27018 15.0783 4.25491 15.042 4.23828C14.781 4.11855 14.5721 3.90959 14.1541 3.49167C13.1923 2.52977 12.7113 2.04882 12.1195 2.00447C12.04 1.99851 11.96 1.99851 11.8805 2.00447C11.2887 2.04882 10.8078 2.52977 9.84585 3.49167C9.42793 3.90959 9.21897 4.11855 8.95797 4.23828C8.92172 4.25491 8.88486 4.27018 8.84747 4.28405C8.57825 4.38394 8.28274 4.38394 7.69171 4.38394H7.58269C6.07479 4.38394 5.32083 4.38394 4.85239 4.85239C4.38394 5.32083 4.38394 6.07479 4.38394 7.58269V7.69171C4.38394 8.28274 4.38394 8.57825 4.28405 8.84747C4.27018 8.88486 4.25491 8.92172 4.23828 8.95797C4.11855 9.21897 3.90959 9.42793 3.49167 9.84585C2.52977 10.8078 2.04882 11.2887 2.00447 11.8805C1.99851 11.96 1.99851 12.04 2.00447 12.1195C2.04882 12.7113 2.52977 13.1923 3.49167 14.1541C3.90959 14.5721 4.11855 14.781 4.23828 15.042C4.25491 15.0783 4.27018 15.1151 4.28405 15.1525C4.38394 15.4218 4.38394 15.7173 4.38394 16.3083V16.4173C4.38394 17.9252 4.38394 18.6792 4.85239 19.1476C5.32083 19.6161 6.07479 19.6161 7.58269 19.6161H7.69171Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                     />
                     <path
                        d="M15 9L9 15"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                     />
                     <path
                        d="M15 15H14.9892M9.01076 9H9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                     />
                  </svg>
                  <div>
                     <h6 className="fw-bolder">Best prices</h6>
                     <p>Always the best prices</p>
                  </div>
               </Col>

               {/* 4. Phone support */}
               <Col lg={3} md={6} sm={6} xs={12} className="text-center feature-block" data-testid="feature-block">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     data-testid="feature-icon"
                     role="img"
                     viewBox="0 0 24 24"
                     width="30"
                     height="30"
                     color="#000000"
                     fill="none"
                  >
                     <path
                        d="M17 10.8045C17 10.4588 17 10.286 17.052 10.132C17.2032 9.68444 17.6018 9.51076 18.0011 9.32888C18.45 9.12442 18.6744 9.02219 18.8968 9.0042C19.1493 8.98378 19.4022 9.03818 19.618 9.15929C19.9041 9.31984 20.1036 9.62493 20.3079 9.87302C21.2513 11.0188 21.7229 11.5918 21.8955 12.2236C22.0348 12.7334 22.0348 13.2666 21.8955 13.7764C21.6438 14.6979 20.8485 15.4704 20.2598 16.1854C19.9587 16.5511 19.8081 16.734 19.618 16.8407C19.4022 16.9618 19.1493 17.0162 18.8968 16.9958C18.6744 16.9778 18.45 16.8756 18.0011 16.6711C17.6018 16.4892 17.2032 16.3156 17.052 15.868C17 15.714 17 15.5412 17 15.1955V10.8045Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                     />
                     <path
                        d="M7 10.8046C7 10.3694 6.98778 9.97821 6.63591 9.6722C6.50793 9.5609 6.33825 9.48361 5.99891 9.32905C5.55001 9.12458 5.32556 9.02235 5.10316 9.00436C4.43591 8.9504 4.07692 9.40581 3.69213 9.87318C2.74875 11.019 2.27706 11.5919 2.10446 12.2237C1.96518 12.7336 1.96518 13.2668 2.10446 13.7766C2.3562 14.6981 3.15152 15.4705 3.74021 16.1856C4.11129 16.6363 4.46577 17.0475 5.10316 16.996C5.32556 16.978 5.55001 16.8757 5.99891 16.6713C6.33825 16.5167 6.50793 16.4394 6.63591 16.3281C6.98778 16.0221 7 15.631 7 15.1957V10.8046Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                     />
                     <path
                        d="M5 9C5 5.68629 8.13401 3 12 3C15.866 3 19 5.68629 19 9"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="square"
                        strokeLinejoin="round"
                     />
                     <path
                        d="M19 17V17.8C19 19.5673 17.2091 21 15 21H13"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                     />
                  </svg>
                  <div>
                     <h6 className="fw-bolder">020-800-456-747</h6>
                     <p>24/7 Available Support</p>
                  </div>
               </Col>
            </Row>
         </Container>
      </section>
   );
}
