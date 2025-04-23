import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
   Navbar,
   Nav,
   Container,
   NavLink,
} from 'react-bootstrap';
import { PiShoppingBagOpen } from 'react-icons/pi';
import { SlUser } from 'react-icons/sl';
import { GoHeart } from 'react-icons/go';
import NavbarMenu from '../components/NavbarMenu';
import Cart from '../components/Cart';
import NavMenuOff from '../components/NavMenuOff';

export default function MyNavbar({ menu }) {
   const [show, setShow] = useState(false);
   const [open, setOpen] = useState(false);
   const [showCart, setShowCart] = useState(false);
   const [showFirst, setShowFirst] = useState(true);
   const [delayedClass, setDelayedClass] = useState('show-item');

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const handleCartClose = () => setShowCart(false);
   const handleCartShow = () => setShowCart(true);
   const [width, setWidth] = useState(window.innerWidth);

   useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
   }, []);

   useEffect(() => {
      if (showFirst) {
         const timer = setTimeout(() => {
            setDelayedClass('show-item');
         }, 300);

         return () => clearTimeout(timer);
      } else {
         setDelayedClass('hide-item');
      }
   }, [showFirst]);

   return (
      <Navbar expand="lg" className="py-4" data-testid="navbar">
         <Container className="mynavbar-container">
            <Nav className="d-lg-none d-flex justify-content-between flex-row w-100 navbar-s-collapse">
               <Link to="/" className="navbar-brand" data-testid="brand">
                  <Navbar.Brand className={`mx-2 ${delayedClass}`}>
                     Varkala
                  </Navbar.Brand>
               </Link>
               <Nav className={delayedClass}>
                  <div className="d-flex align-items-start">
                     <Nav.Link className="px-2 pt-2 collapse-icons" aria-label='user' data-testid="cart-icon">
                        <SlUser className="mynavbar-icon" />
                     </Nav.Link>
                     <Nav.Link className="px-2 pt-2 collapse-icons" aria-label='wishlist' data-testid="wishlist-icon">
                        <GoHeart className="mynavbar-icon-h" />
                     </Nav.Link>
                     <Nav.Link className="px-2 pt-2 collapse-icons" aria-label='cart' data-testid="user-icon">
                        <PiShoppingBagOpen
                           className="mynavbar-icon-h"
                           onClick={handleCartShow}
                        />
                        <Cart
                           showCart={showCart}
                           setShowCart={setShowCart}
                           handleCartClose={handleCartClose}
                           data-testid="cart-panel"
                        />
                     </Nav.Link>
                  </div>
               </Nav>

               <Navbar.Collapse className="collapse-opacity">
                  <Nav className="me-auto w-auto d-flex justify-content-between align-items-center flex-row">
                     <Link to="/" className="navbar-brand" data-testid="brand">
                        <Navbar.Brand className="mx-2">Varkala</Navbar.Brand>
                     </Link>
                     <div className="d-flex">
                        <Nav.Link className="px-2 collapse-icons" aria-label='user' data-testid="cart-icon">
                           <SlUser className="mynavbar-icon" />
                        </Nav.Link>
                        <Nav.Link className="px-2 collapse-icons" aria-label='wishlist' data-testid="wishlist-icon">
                           <GoHeart className="mynavbar-icon-h" />
                        </Nav.Link>
                        <Nav.Link className="px-2 collapse-icons" aria-label='cart' data-testid="user-icon">
                           <PiShoppingBagOpen
                              className="mynavbar-icon-h"
                              onClick={handleCartShow}
                           />
                           <Cart
                              showCart={showCart}
                              setShowCart={setShowCart}
                              handleCartClose={handleCartClose}
                              data-testid="cart-panel"
                           />
                        </Nav.Link>
                     </div>

                     <Navbar.Toggle
                        onClick={() => setShowFirst(!showFirst)}
                        className={`border-0 ${!delayedClass}`}
                        aria-controls="basic-navbar-nav"
                        aria-label="toggle main menu"
                        data-testid="main-toggle"
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
                     </Navbar.Toggle>
                  </Nav>
                  {width <= 992 && <NavbarMenu menu={menu} data-testid="navbar-menu"/>}
               </Navbar.Collapse>
               <Navbar.Toggle
                  onClick={() => setShowFirst(!showFirst)}
                  className={`border-0 ${delayedClass}`}
                  aria-controls="basic-navbar-nav"
                  aria-label="extra menu"
                  data-testid="extra-toggle"
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
               </Navbar.Toggle>
            </Nav>
            <Nav className="d-none d-lg-flex justify-content-between flex-row w-100">
               <Link to="/" className="navbar-brand" data-testid="brand">
                  <Navbar.Brand>Varkala</Navbar.Brand>
               </Link>
               {width > 992 && <NavbarMenu menu={menu} data-testid="navbar-menu"/>}
               <Nav className="d-none d-lg-flex justify-content-end align-items-center flex-row">
                  <NavLink className="px-2 collapse-icons" aria-label='user' data-testid="cart-icon">
                     <SlUser className="mynavbar-icon" />
                  </NavLink>
                  <NavLink className="px-2 collapse-icons" aria-label='wishlist' data-testid="wishlist-icon">
                     <GoHeart className="mynavbar-icon-h" />
                  </NavLink>
                  <NavLink className="px-2 collapse-icons" aria-label='cart' data-testid="user-icon">
                     <PiShoppingBagOpen
                        className="mynavbar-icon-h"
                        onClick={handleCartShow}
                     />
                     <Cart
                        showCart={showCart}
                        setShowCart={setShowCart}
                        handleCartClose={handleCartClose}
                        data-testid="cart-panel"
                     />
                  </NavLink>
               </Nav>
            </Nav>
            <NavMenuOff show={show} open={open} setOpen={setOpen} handleClose={handleClose} handleShow={handleShow} data-testid="nav-menu-off"/>
         </Container>
      </Navbar>
   );
}
