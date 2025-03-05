import React from 'react';
import { Container, Accordion } from 'react-bootstrap';
import { GiTrousers } from 'react-icons/gi';
import { TbJacket } from 'react-icons/tb';
import { PiTShirtLight } from 'react-icons/pi';

export default function CategoryFull() {
   return (
      <Container className="px-3 py-6">
         <div className="row">
            <div className="col-3 category-menu-container">
               <h5 className="fw-bold ls-1">Category</h5>
               <Accordion className="category-menu">
                  <Accordion.Item eventKey="0">
                     <Accordion.Header className="category-menu-head">
                        <GiTrousers
                           alt="Trousers"
                           className="category-menu-icons"
                        />
                        <span className="category-menu-title">Trousers</span>
                        <span className="text-mute category-menu-count ps-2">
                           120
                        </span>
                     </Accordion.Header>
                     <Accordion.Body>
                        <ul className="category-menu-list">
                           <li>
                              <p className='category-item'>Lorem ipsum</p>
                              <span className="item-underline"></span>
                           </li>
                           <li>
                              <p>Dolor</p>
                              <span className="item-underline"></span>
                           </li>
                           <li>
                              <p>Sit amet</p>
                              <span className="item-underline"></span>
                           </li>
                           <li>
                              <p>Donec vitae</p>
                              <span className="item-underline"></span>
                           </li>
                        </ul>
                     </Accordion.Body>
                  </Accordion.Item>
               </Accordion>
               <Accordion className="category-menu">
                  <Accordion.Item eventKey="0">
                     <Accordion.Header className="category-menu-head">
                        <TbJacket
                           alt="Jackets"
                           className="category-menu-icons"
                        />
                        <span className="category-menu-title">Jackets</span>
                        <span className="text-mute category-menu-count ps-2">
                           55
                        </span>
                     </Accordion.Header>
                     <Accordion.Body>
                        <ul className="category-menu-list">
                           <li>
                              <p>Lorem ipsum</p>
                              <span className="item-underline"></span>
                           </li>
                           <li>
                              <p>Dolor</p>
                              <span className="item-underline"></span>
                           </li>
                           <li>
                              <p>Sit amet</p>
                              <span className="item-underline"></span>
                           </li>
                           <li>
                              <p>Donec vitae</p>
                              <span className="item-underline"></span>
                           </li>
                        </ul>
                     </Accordion.Body>
                  </Accordion.Item>
               </Accordion>
               <Accordion className="category-menu border-0">
                  <Accordion.Item eventKey="0">
                     <Accordion.Header className="category-menu-head">
                        <PiTShirtLight
                           alt="T-Shirts"
                           className="category-menu-icons"
                        />
                        <span className="category-menu-title">T-Shirts</span>
                        <span className="text-mute category-menu-count ps-2">
                           33
                        </span>
                     </Accordion.Header>
                     <Accordion.Body>
                        <ul className="category-menu-list">
                           <li>
                              <p>Lorem ipsum</p>
                              <span className="item-underline"></span>
                           </li>
                           <li>
                              <p>Dolor</p>
                              <span className="item-underline"></span>
                           </li>
                           <li>
                              <p>Sit amet</p>
                              <span className="item-underline"></span>
                           </li>
                           <li>
                              <p>Donec vitae</p>
                              <span className="item-underline"></span>
                           </li>
                        </ul>
                     </Accordion.Body>
                  </Accordion.Item>
               </Accordion>
               <h5 className="fw-bold ls-1 pt-5">Price</h5>
            </div>
            <div className="col-9">
               <span className="category-title">Jackets and tops</span>
               <p className="text-mute category-desc">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt.
               </p>
            </div>
         </div>
      </Container>
   );
}
