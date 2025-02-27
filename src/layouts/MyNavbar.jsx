import React from 'react';
import { useState, useEffect } from 'react';
import {
   Navbar,
   Nav,
   Container,
   Collapse,
   Button,
   NavLink,
   Offcanvas,
} from 'react-bootstrap';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { PiShoppingBagOpen } from 'react-icons/pi';
import { SlUser } from 'react-icons/sl';
import { GoHeart } from 'react-icons/go';
import NavbarMenu from '../components/NavbarMenu';

export default function MyNavbar() {
   const [show, setShow] = useState(false);
   const [open, setOpen] = useState(false);
   const [showFirst, setShowFirst] = useState(true);
   const [delayedClass, setDelayedClass] = useState("show-item");

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const [width, setWidth] = useState(window.innerWidth);

   useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
   }, []);

   useEffect(() => {
      if (showFirst) {
         const timer = setTimeout(() => {
            setDelayedClass("show-item");
         }, 300);

         return () => clearTimeout(timer);
      } else {
         setDelayedClass("hide-item");
      }
   }, [showFirst]);


   return (
      <Navbar expand="lg" className="py-4">
         <Container className="mynavbar-container">
            <Nav className="d-lg-none d-flex justify-content-between flex-row w-100 navbar-s-collapse">
               <Navbar.Brand className={`mx-2 ${delayedClass}`} href="#">
                  Varkala
               </Navbar.Brand>
               <Nav className={delayedClass}>
                  <div className="d-flex align-items-center">
                     <Nav.Link className="px-2 pt-2 collapse-icons">
                        <SlUser className="mynavbar-icon" />
                     </Nav.Link>
                     <Nav.Link className="px-2 pt-2 collapse-icons">
                        <GoHeart className="mynavbar-icon-h" />
                     </Nav.Link>
                     <Nav.Link className="px-2 pt-2 collapse-icons">
                        <PiShoppingBagOpen className="mynavbar-icon-h" />
                     </Nav.Link>
                  </div>
               </Nav>

               <Navbar.Collapse className="collapse-opacity">
                  <Nav className="me-auto w-auto d-flex justify-content-between align-items-center flex-row">
                     <Navbar.Brand href="#" className="mx-2">
                        Varkala
                     </Navbar.Brand>
                     <div className="d-flex">
                        <Nav.Link className="px-2 collapse-icons">
                           <SlUser className="mynavbar-icon" />
                        </Nav.Link>
                        <Nav.Link className="px-2 collapse-icons">
                           <GoHeart className="mynavbar-icon-h" />
                        </Nav.Link>
                        <Nav.Link className="px-2 collapse-icons">
                           <PiShoppingBagOpen className="mynavbar-icon-h" />
                        </Nav.Link>
                     </div>

                     <Navbar.Toggle
                        onClick={() => setShowFirst(!showFirst)}
                        className={`border-0 ${!delayedClass}`}
                        aria-controls="basic-navbar-nav"
                     >
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                           <path
                              fill="none"
                              stroke="black"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 6h16M4 12h8m-8 6h16"
                           />
                        </svg>
                     </Navbar.Toggle>
                  </Nav>
                  {width <= 992 && <NavbarMenu />}
               </Navbar.Collapse>
               <Navbar.Toggle
                  onClick={() => setShowFirst(!showFirst)}
                  className={`border-0 ${delayedClass}`}
                  aria-controls="basic-navbar-nav"
               >
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                     <path
                        fill="none"
                        stroke="black"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                     />
                  </svg>
               </Navbar.Toggle>
            </Nav>
            <Nav className="d-none d-lg-flex justify-content-between flex-row w-100">
               <Navbar.Brand href="#">Varkala</Navbar.Brand>
               {width > 992 && <NavbarMenu />}
               <Nav className="d-none d-lg-flex justify-content-end align-items-center flex-row">
                  <NavLink className="px-2 collapse-icons">
                     <SlUser className="mynavbar-icon" />
                  </NavLink>
                  <NavLink className="px-2 collapse-icons">
                     <GoHeart className="mynavbar-icon-h" />
                  </NavLink>
                  <NavLink className="px-2 collapse-icons">
                     <PiShoppingBagOpen className="mynavbar-icon-h" />
                  </NavLink>
               </Nav>
            </Nav>
            <Button
               className="d-none d-lg-block bg-transparent border-0"
               onClick={handleShow}
            >
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
               >
                  <path
                     fill="none"
                     stroke="black"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth="2"
                     d="M4 6h16M4 12h8m-8 6h16"
                  />
               </svg>
            </Button>
            <Offcanvas
               className="overflow-auto d-none d-md-flex d-flex justify-content-start align-items-center w-40"
               show={show}
               onHide={handleClose}
               placement="end"
               name="end"
            >
               <div className="w-100 px-5">
                  <Offcanvas.Header closeButton></Offcanvas.Header>
                  <Offcanvas.Title className="fw-bold pb-5">
                     Varkala
                  </Offcanvas.Title>
                  <Offcanvas.Title className="pb-3">Home</Offcanvas.Title>
                  <Offcanvas.Title className="pb-3">Link</Offcanvas.Title>
                  <Offcanvas.Title className="pb-3">Disabled</Offcanvas.Title>
                  <Offcanvas.Title className="pb-3">
                     <div>
                        <p onClick={() => setOpen(!open)}
                           className="d-inline-block cursor-pointer"
                        >
                           Dropdown link{' '}
                           <span>
                              {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
                           </span>
                        </p>

                        <Collapse in={open}>
                           <div className="pb-3">
                              <p className="option option-color pt-3">
                                 Action
                              </p>
                              <p className="option option-color">
                                 Another action
                              </p>
                              <p className="option option-color">
                                 Something else here
                              </p>
                           </div>
                        </Collapse>
                     </div>
                  </Offcanvas.Title>
                  <Offcanvas.Title>
                     <Navbar>
                        <Nav.Link href="#home" className="mar-r-5">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="15"
                              height="15"
                              viewBox="0 0 224 432"
                           >
                              <path
                                 fill="currentColor"
                                 d="M145 429H66V235H0v-76h66v-56q0-48 27-74t72-26q36 0 59 3v67l-41 1q-22 0-30 9t-8 27v49h76l-10 76h-66v194z"
                              />
                           </svg>
                        </Nav.Link>
                        <Navbar.Brand href="#home">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="15"
                              height="15"
                              viewBox="0 0 432 384"
                           >
                              <path
                                 fill="currentColor"
                                 d="M383 105v11q0 45-16.5 88.5t-47 79.5t-79 58.5T134 365q-73 0-134-39q10 1 21 1q61 0 109-37q-29-1-51.5-18T48 229q8 2 16 2q12 0 23-4q-30-6-50-30t-20-55v-1q19 10 40 11q-39-27-39-73q0-24 12-44q33 40 79.5 64T210 126q-2-10-2-20q0-36 25.5-61.5T295 19q38 0 64 27q30-6 56-21q-10 31-39 48q27-3 51-13q-18 26-44 45z"
                              />
                           </svg>
                        </Navbar.Brand>
                        <Navbar href="#home" className="phone-number">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="25"
                              viewBox="0 0 24 24"
                           >
                              <path
                                 fill="none"
                                 stroke="currentColor"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 strokeWidth="1"
                                 d="m9.159 5.712l-.403-.906c-.263-.592-.395-.888-.592-1.115a2 2 0 0 0-.928-.603C6.949 3 6.625 3 5.976 3c-.948 0-1.422 0-1.82.182a2.12 2.12 0 0 0-1.061 1.169c-.143.413-.102.838-.02 1.689q1.31 13.575 14.886 14.885c.85.082 1.275.123 1.689-.02a2.12 2.12 0 0 0 1.168-1.06c.182-.399.182-.873.182-1.821c0-.649 0-.973-.088-1.26a2 2 0 0 0-.603-.928c-.226-.197-.523-.328-1.115-.592l-.906-.402c-.642-.285-.962-.428-1.288-.459a2 2 0 0 0-.919.128c-.305.119-.574.343-1.114.793c-.537.447-.805.67-1.133.79a2.16 2.16 0 0 1-.981.101c-.346-.05-.61-.192-1.14-.475c-1.645-.88-2.553-1.787-3.433-3.433c-.283-.53-.424-.794-.475-1.14a2.16 2.16 0 0 1 .1-.98c.12-.329.344-.597.791-1.134c.45-.54.675-.809.793-1.114c.114-.292.158-.607.128-.919c-.03-.325-.173-.646-.459-1.288"
                                 color="currentColor"
                              />
                           </svg>
                           020-800-456-747
                        </Navbar>
                     </Navbar>
                  </Offcanvas.Title>
                  <Offcanvas.Title className="text-secondary fw-normal fs-6">
                     Samsa was a travelling salesman - and above it there hung a
                     picture that he had recently cut out of an illustrated
                     magazine and housed in a nice, gilded frame.
                  </Offcanvas.Title>
               </div>
            </Offcanvas>
         </Container>
      </Navbar>
   );
}
