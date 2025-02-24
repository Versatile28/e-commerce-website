import React from 'react';
import { useState } from 'react';
import {
   Navbar,
   Nav,
   Container,
   Collapse,
   Form,
   Button,
   NavLink,
   Offcanvas,
} from 'react-bootstrap';
import { MdExpandMore } from 'react-icons/md';
import {
   GiTrousers,
   GiShorts,
   GiUnderwearShorts,
   GiWatch,
   GiBowTie,
} from 'react-icons/gi';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { TbJacket } from 'react-icons/tb';
import {
   PiTShirtLight,
   PiShirtFolded,
   PiHoodieLight,
   PiSuitcaseSimple,
   PiBaseballCap,
} from 'react-icons/pi';

export default function MyNavbar() {
   const [show, setShow] = useState(false);
   const [open, setOpen] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   const [activeDropdown, setActiveDropdown] = useState(null);
   const [closingDropdown, setClosingDropdown] = useState(null);

   const toggleDropdown = (dropdownName) => {
      if (activeDropdown === dropdownName) {
         setClosingDropdown(dropdownName);
         setTimeout(() => {
            setActiveDropdown(null);
            setClosingDropdown(null);
         }, 300);
      } else {
         setActiveDropdown(dropdownName);
         setClosingDropdown(null);
      }
   };

   return (
      <Navbar expand="lg">
         <Container>
            <Navbar.Brand href="#">Varkala</Navbar.Brand>
            <Navbar.Collapse className="collapse-opacity">
               <Nav className="me-auto">
                  {/* Home */}
                  <div className="d-flex flex-column justify-content-center align-items-center collapse-menu">
                     <div
                        className="d-flex justify-content-center align-items-center collapse-menu-items"
                        onClick={() => {
                           toggleDropdown('home');
                        }}
                     >
                        <button class="border-0 bg-transparent menu-option text-black">
                           Home
                        </button>
                        <MdExpandMore className="cursor-pointer" />
                     </div>
                     <div
                        className={`drop-home bg-white shadow position-absolute top-5 ${
                           activeDropdown === 'home' ? 'show' : ''
                        } ${closingDropdown === 'home' ? 'hide' : ''}`}
                     >
                        <div className="d-flex flex-column justify-content-center align-items-center py-2 px-4">
                           <a
                              href="/"
                              className="option option-color w-100 py-1 m-1"
                           >
                              Home 1 - Fashion
                           </a>
                           <a
                              href="/"
                              className="option option-color w-100 py-1 m-1"
                           >
                              Home 2 - Fashion
                           </a>
                           <a
                              href="/"
                              className="option option-color w-100 d-flex justify-content-start align-items-center py-1 m-1"
                           >
                              Home 3 - Design
                              <div className="new-btn">New</div>
                           </a>
                           <a
                              href="/"
                              className="option option-color w-100 d-flex justify-content-start align-items-center py-1 m-1"
                           >
                              Home 4 - Design
                              <div className="new-btn">New</div>
                           </a>
                        </div>
                     </div>
                  </div>
                  {/* Shop */}
                  <div className="d-flex flex-column justify-content-center align-items-center collapse-menu">
                     <div
                        className="d-flex justify-content-center align-items-center collapse-menu-items"
                        onClick={() => toggleDropdown('shopPages')}
                     >
                        <button class="border-0 bg-transparent menu-option">
                           Shop
                        </button>
                        <MdExpandMore className="cursor-pointer" />
                     </div>

                     <div
                        className={`drop-shop bg-white shadow position-absolute top-5 ${
                           activeDropdown === 'shopPages' ? 'show' : ''
                        } ${closingDropdown === 'shopPages' ? 'hide' : ''}`}
                     >
                        <div className="row m-0">
                           <div className="col d-flex flex-column my-5 ms-4">
                              <h5 className="mb-4 drop-down-title">
                                 Shop pages
                              </h5>
                              <a href="/" className="mb-4 option option-color">
                                 Full width
                              </a>
                              <a href="/" className="mb-4 option option-color">
                                 Full width with category menu
                              </a>
                              <a href="/" className="mb-4 option option-color">
                                 Full width with big products
                              </a>
                              <a href="/" className="mb-4 option option-color">
                                 Fixed width
                              </a>
                              <a href="/" className="mb-4 option option-color">
                                 Fixed width &amp; sidebar
                              </a>
                              <a
                                 href="/"
                                 className="mb-4 d-flex align-items-center option option-color"
                              >
                                 Fixed width &amp; masonry layout
                                 <span className="new-btn">New</span>
                              </a>
                              <a href="/" className="mb-4 option option-color">
                                 Subcategories
                              </a>
                           </div>

                           <div className="col d-flex flex-column my-5">
                              <h5 className="mb-4 drop-down-title">
                                 Product pages
                              </h5>
                              <a href="/" className="mb-4 option option-color">
                                 Product with sticky info
                              </a>
                              <a href="/" className="mb-4 option option-color">
                                 Product with background
                              </a>
                              <a href="/" className="mb-4 option option-color">
                                 Product standard
                              </a>
                           </div>

                           <div className="col padd-0">
                              <img
                                 src="images/shop.webp"
                                 alt="Model"
                                 class="img-fluid h-100"
                              />
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* Product Cards */}
                  <div className="d-flex flex-column justify-content-center align-items-center collapse-menu">
                     <div
                        className="d-flex justify-content-center align-items-center collapse-menu-items"
                        onClick={() => toggleDropdown('product')}
                     >
                        <button class="border-0 bg-transparent menu-option">
                           Product Card
                        </button>
                        <MdExpandMore className="cursor-pointer" />
                     </div>

                     <div
                        className={`drop-product bg-white shadow position-absolute top-5 ${
                           activeDropdown === 'product' ? 'show' : ''
                        } ${closingDropdown === 'product' ? 'hide' : ''}`}
                     >
                        <div className="row m-0">
                           <div className="col d-flex flex-column my-5 ms-4">
                              <h5 className="mb-3 drop-down-title">
                                 Shop Card
                              </h5>
                              <a href="/" className="mb-3 option option-color">
                                 Default
                              </a>
                              <a href="/" className="mb-3 option option-color">
                                 Product Card 1
                              </a>
                              <a href="/" className="mb-3 option option-color">
                                 Product Card 2
                              </a>
                              <a href="/" className="mb-3 option option-color">
                                 Product Card 3
                              </a>
                           </div>

                           <div className="col d-flex flex-column my-5">
                              <h5 className="mb-4 p-1"> </h5>
                              <a href="/" className="mb-3 option option-color">
                                 Product Card 4
                              </a>
                              <a href="/" className="mb-3 option option-color">
                                 Product Card 5
                              </a>
                              <a href="/" className="mb-3 option option-color">
                                 Product Card 6
                              </a>
                              <a href="/" className="mb-3 option option-color">
                                 Product Card 7
                              </a>
                           </div>

                           <div className="col padd-0">
                              <img
                                 src="images/2.1.webp"
                                 alt="Model"
                                 class="img-fluid h-100"
                              />
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* Icons */}
                  <div className="d-flex flex-column justify-content-center align-items-center collapse-menu">
                     {/* Trigger button */}
                     <div
                        className="d-flex justify-content-center align-items-center collapse-menu-items"
                        onClick={() => toggleDropdown('icons')}
                     >
                        <button class="border-0 bg-transparent menu-option">
                           Icons
                        </button>
                        <MdExpandMore className="cursor-pointer" />
                     </div>

                     {/* The dropdown container */}
                     <div
                        className={`drop-icons shadow bg-white position-absolute top-5 ${
                           activeDropdown === 'icons' ? 'show' : ''
                        } ${closingDropdown === 'icons' ? 'hide' : ''}`}
                     >
                        {/* 2 rows of 6 icons each */}
                        <div className="col-12 pt-4 px-3">
                           <div className="row m-0 mt-4 mb-5">
                              {/* 1) Trousers */}
                              <a
                                 className="col-2 d-flex flex-column align-items-center icon-select"
                                 href="/"
                              >
                                 <GiTrousers
                                    alt="Trousers"
                                    className="icon-style"
                                 />
                                 <span className="mb-3">Trousers</span>
                              </a>

                              {/* 2) Jackets */}
                              <a
                                 className="col-2 d-flex flex-column align-items-center icon-select"
                                 href="/"
                              >
                                 <TbJacket
                                    alt="Jackets"
                                    className="icon-style"
                                 />
                                 <span className="mb-3">ackets</span>
                              </a>

                              {/* 3) T-Shirts */}
                              <a
                                 className="col-2 d-flex flex-column align-items-center icon-select"
                                 href="/"
                              >
                                 <PiTShirtLight
                                    alt="T-Shirts"
                                    className="icon-style"
                                 />
                                 <span className="mb-3">T-Shirts</span>
                              </a>

                              {/* 4) Shirts */}
                              <a
                                 className="col-2 d-flex flex-column align-items-center icon-select"
                                 href="/"
                              >
                                 <PiShirtFolded
                                    alt="Shirts"
                                    className="icon-style"
                                 />
                                 <span className="mb-3">Shirts</span>
                              </a>

                              {/* 5) Pullovers */}
                              <a
                                 className="col-2 d-flex flex-column align-items-center icon-select"
                                 href="/"
                              >
                                 <PiHoodieLight
                                    alt="Pullovers"
                                    className="icon-style"
                                 />
                                 <span className="mb-3">Pullovers</span>
                              </a>

                              {/* 6) Scarfs */}
                              <a
                                 className="col-2 d-flex flex-column align-items-center icon-select"
                                 href="/"
                              >
                                 <GiTrousers
                                    alt="Scarfs"
                                    className="icon-style"
                                 />
                                 <span className="mb-3">Scarfs</span>
                              </a>
                           </div>

                           <div className="row m-0 mb-5">
                              {/* 7) Shorts */}
                              <a
                                 className="col-2 d-flex flex-column align-items-center icon-select"
                                 href="/"
                              >
                                 <GiShorts
                                    alt="Shorts"
                                    className="icon-style"
                                 />
                                 <span className="mb-3">Shorts</span>
                              </a>

                              {/* 8) Underwear */}
                              <a
                                 className="col-2 d-flex flex-column align-items-center icon-select"
                                 href="/"
                              >
                                 <GiUnderwearShorts
                                    alt="Underwear"
                                    className="icon-style"
                                 />
                                 <span className="mb-3">Underwear</span>
                              </a>

                              {/* 9) Watches */}
                              <a
                                 className="col-2 d-flex flex-column align-items-center icon-select"
                                 href="/"
                              >
                                 <GiWatch
                                    alt="Watches"
                                    className="icon-style"
                                 />
                                 <span className="mb-3">Watches</span>
                              </a>

                              {/* 10) Bags */}
                              <a
                                 className="col-2 d-flex flex-column align-items-center icon-select"
                                 href="/"
                              >
                                 <PiSuitcaseSimple
                                    alt="Bags"
                                    className="icon-style"
                                 />
                                 <span className="mb-3">Bags</span>
                              </a>

                              {/* 11) Caps */}
                              <a
                                 className="col-2 d-flex flex-column align-items-center icon-select"
                                 href="/"
                              >
                                 <PiBaseballCap
                                    alt="Caps"
                                    className="icon-style"
                                 />
                                 <span className="mb-3">Caps</span>
                              </a>

                              {/* 12) Accessories */}
                              <a
                                 className="col-2 d-flex flex-column align-items-center icon-select"
                                 href="/"
                              >
                                 <GiBowTie
                                    alt="Accessories"
                                    className="icon-style"
                                 />
                                 <span className="mb-3">Accessories</span>
                              </a>
                           </div>
                        </div>
                        <div className="icons-bottom d-flex justify-content-center align-items-center pt-4 pb-1 px-5">
                           <p>
                              Don't miss our biggest sales this year. Use the
                              code 'SUMMER35' at checkout until Jun. 15!
                           </p>
                        </div>
                     </div>
                  </div>
                  {/* Pages */}
                  <div className="d-flex flex-column justify-content-center align-items-center collapse-menu">
                     {/* Trigger button*/}
                     <div
                        className="d-flex justify-content-center align-items-center collapse-menu-items"
                        onClick={() => toggleDropdown('pages')}
                     >
                        <button class="border-0 bg-transparent menu-option">
                           Pages
                        </button>
                        <MdExpandMore className="cursor-pointer" />
                     </div>

                     {/* Dropdown container */}
                     <div
                        className={`drop-pages shadow bg-white position-absolute top-5 p-2 ${
                           activeDropdown === 'pages' ? 'show' : ''
                        } ${closingDropdown === 'pages' ? 'hide' : ''}`}
                     >
                        {/* Four columns in a row */}
                        <div className="row m-0 mb-5">
                           {/* Column 1 */}
                           <div className="d-flex col col-3 flex-column px-3">
                              <img src="images\pages-img-1.webp" alt="" />
                              <h5 className="mt-4 py-1 m-1 fw-bold">
                                 Homepage
                              </h5>
                              <a
                                 href="/"
                                 className="option option-color w-100 py-1 m-1"
                              >
                                 Home 1 - Fashion
                              </a>
                              <a
                                 href="/"
                                 className="option option-color w-100 py-1 m-1"
                              >
                                 Home 2 - Fashion
                              </a>
                              <a
                                 href="/"
                                 className="option option-color w-100 d-flex justify-content-start align-items-center m-1"
                              >
                                 Home 3 - Design
                                 <div className="new-btn">New</div>
                              </a>
                              <a
                                 href="/"
                                 className="option option-color w-100 d-flex justify-content-start align-items-center m-1"
                              >
                                 Home 4 - Design
                                 <div className="new-btn">New</div>
                              </a>
                              <h5 className="mt-4 py-1 m-1 fw-bold">
                                 Category
                              </h5>
                              <a
                                 href="/"
                                 className="option option-color w-100 py-1 m-1"
                              >
                                 Full width
                              </a>
                              <a
                                 href="/"
                                 className="option option-color w-100 py-1 m-1"
                              >
                                 Full width with category menu
                              </a>
                              <a
                                 href="/"
                                 className="option option-color w-100 py-1 m-1"
                              >
                                 Full width with big products
                              </a>
                              <a
                                 href="/"
                                 className="option option-color w-100 py-1 m-1"
                              >
                                 Fixed width
                              </a>
                              <a
                                 href="/"
                                 className="option option-color w-100 py-1 m-1"
                              >
                                 Fixed width &amp; sidebar
                              </a>
                              <a
                                 href="/"
                                 className="option option-color w-100 d-flex justify-content-start align-items-center m-1"
                              >
                                 Fixed width &amp; masonry layout
                                 <div className="new-btn">New</div>
                              </a>
                              <a
                                 href="/"
                                 className="option option-color w-100 py-1 m-1"
                              >
                                 Subcategories
                              </a>
                           </div>

                           {/* Column 2 */}
                           <div className="d-flex col col-3 flex-column px-3">
                              <img src="images\pages-img-2.webp" alt="" />
                              <h5 className="mt-4 py-1 m-1 fw-bold">
                                 Order Process
                              </h5>
                              <a
                                 href="/"
                                 className="option option-color w-100 py-1 m-1"
                              >
                                 Shopping cart
                              </a>
                              <a
                                 href="/"
                                 className="option option-color w-100 d-flex justify-content-start align-items-center m-1"
                              >
                                 Checkout - Five steps
                                 <div className="new-btn">New</div>
                              </a>
                              <a
                                 href="/"
                                 className="option option-color w-100 d-flex justify-content-start align-items-center m-1"
                              >
                                 Checkout - Single page
                              </a>
                              <a
                                 href="/"
                                 className="option option-color w-100 d-flex justify-content-start align-items-center m-1"
                              >
                                 Checkout - confirm
                                 <div className="new-btn">New</div>
                              </a>
                              <h5 className="mt-4 py-1 m-1 fw-bold">Product</h5>
                              <a
                                 href="/"
                                 className="option option-color w-100 py-1 m-1"
                              >
                                 Product with sticky info
                              </a>
                              <a
                                 href="/"
                                 className="option option-color w-100 py-1 m-1"
                              >
                                 Product with sticky info
                              </a>
                              <a
                                 href="/"
                                 className="option option-color w-100 py-1 m-1"
                              >
                                 Product standard
                              </a>
                           </div>

                           {/* Column 3 */}
                           <div className="d-flex col col-3 flex-column px-3">
                              <img src="images\pages-img-3.webp" alt="" />
                              <h5 className="mt-4 py-1 m-1 fw-bold">Blog</h5>
                              <a
                                 href="/"
                                 className="option option-color w-100 py-1 m-1"
                              >
                                 Blog
                              </a>
                              <a
                                 href="/"
                                 className="option option-color w-100 py-1 m-1"
                              >
                                 Blog - Masonry
                              </a>
                              <a
                                 href="/"
                                 className="option option-color w-100 py-1 m-1"
                              >
                                 Post
                              </a>
                              <h5 className="mt-4 py-1 m-1 fw-bold">Page</h5>
                              <a
                                 href="/"
                                 className="option option-color w-100 d-flex justify-content-start align-items-center m-1"
                              >
                                 About - Company
                                 <div className="new-btn">New</div>
                              </a>
                              <a
                                 href="/"
                                 className="option option-color w-100 d-flex justify-content-start align-items-center m-1"
                              >
                                 About v2 - Person
                                 <div className="new-btn">New</div>
                              </a>
                              <a
                                 href="/"
                                 className="option option-color w-100 d-flex justify-content-start align-items-center m-1"
                              >
                                 F.A.Q.
                                 <div className="new-btn">New</div>
                              </a>
                              <a
                                 href="/"
                                 className="option option-color w-100 py-1 m-1"
                              >
                                 Contact
                              </a>
                              <a
                                 href="/"
                                 className="option option-color w-100 d-flex justify-content-start align-items-center m-1"
                              >
                                 Privacy policy
                                 <div className="new-btn">New</div>
                              </a>
                           </div>

                           {/* Column 4 */}
                           <div className="d-flex col col-3 flex-column px-3">
                              <img src="images\pages-img-4.webp" alt="" />
                              <h5 className="mt-4 py-1 m-1 fw-bold">
                                 Customer
                              </h5>
                              <a
                                 href="/"
                                 className="option option-color w-100 d-flex justify-content-start align-items-center m-1"
                              >
                                 Login/signup
                                 <div className="new-btn">New</div>
                              </a>
                              <a
                                 href="/"
                                 className="option option-color w-100 d-flex justify-content-start align-items-center m-1"
                              >
                                 Orders
                                 <div className="new-btn">New</div>
                              </a>
                              <a
                                 href="/"
                                 className="option option-color w-100 d-flex justify-content-start align-items-center m-1"
                              >
                                 Order detail
                                 <div className="new-btn">New</div>
                              </a>
                              <a
                                 href="/"
                                 className="option option-color w-100 d-flex justify-content-start align-items-center m-1"
                              >
                                 Order tracking
                                 <div className="new-btn">New</div>
                              </a>
                              <a
                                 href="/"
                                 className="option option-color w-100 d-flex justify-content-start align-items-center m-1"
                              >
                                 Addresses
                                 <div className="new-btn">New</div>
                              </a>
                              <a
                                 href="/"
                                 className="option option-color w-100 d-flex justify-content-start align-items-center m-1"
                              >
                                 Profile
                                 <div className="new-btn">New</div>
                              </a>
                              <a
                                 href="/"
                                 className="option option-color w-100 d-flex justify-content-start align-items-center m-1"
                              >
                                 Wishlist
                                 <div className="new-btn">New</div>
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* Docs */}
                  <div className="d-flex flex-column justify-content-center align-items-center collapse-menu">
                     <div
                        className="d-flex justify-content-center align-items-center collapse-menu-items"
                        onClick={() => {
                           toggleDropdown('docs');
                        }}
                     >
                        <button class="border-0 bg-transparent menu-option">
                           Docs
                        </button>
                        <MdExpandMore className="cursor-pointer" />
                     </div>
                     <div
                        className={`drop-docs bg-white shadow position-absolute top-5 ${
                           activeDropdown === 'docs' ? 'show' : ''
                        } ${closingDropdown === 'docs' ? 'hide' : ''}`}
                     >
                        <div className="d-flex flex-column">
                           <h5 className="mt-4 py-1 m-1 px-3 drop-down-title">
                              Documentation
                           </h5>
                           <a
                              href="/"
                              className="option option-color w-100 py-1 m-1 px-3"
                           >
                              Introduction
                           </a>
                           <a
                              href="/"
                              className="option option-color w-100 py-1 m-1 px-3"
                           >
                              Directory structure
                           </a>
                           <a
                              href="/"
                              className="option option-color w-100 py-1 m-1 px-3"
                           >
                              Next.js
                           </a>
                           <a
                              href="/"
                              className="option option-color w-100 py-1 m-1 px-3"
                           >
                              Customizing CSS
                           </a>
                           <a
                              href="/"
                              className="option option-color w-100 py-1 m-1 px-3"
                           >
                              Demo Data
                           </a>
                           <a
                              href="/"
                              className="option option-color w-100 py-1 m-1 px-3"
                           >
                              Credits
                           </a>
                           <a
                              href="/"
                              className="option option-color w-100 py-1 m-1 px-3"
                           >
                              Change log
                           </a>
                           <hr />
                           <h5 className="py-1 m-1 px-3 drop-down-title">
                              Components
                           </h5>
                           <a
                              href="/"
                              className="option option-color w-100 py-1 m-1 px-3"
                           >
                              Bootstrap
                           </a>
                           <a
                              href="/"
                              className="option option-color w-100 py-1 m-1 px-3 "
                           >
                              Theme
                           </a>
                        </div>
                     </div>
                  </div>
               </Nav>
               <Form className="d-flex me-5 collapse-search">
                  <Form.Control
                     type="search"
                     placeholder="Search"
                     className="me-auto menu-search-item"
                     aria-label="Search"
                  />
               </Form>
            </Navbar.Collapse>

            <Nav className="me-auto d-none d-md-flex w-auto d-flex justify-content-center flex-row">
               <NavLink className="px-2 collapse-icons">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     stroke-width="1"
                     width="25"
                     height="25"
                     viewBox="0 0 512 512"
                  >
                     <path
                        path
                        fill="currentColor"
                        d="m411.6 343.656l-72.823-47.334l27.455-50.334A80.23 80.23 0 0 0 376 207.681V128a112 112 0 0 0-224 0v79.681a80.236 80.236 0 0 0 9.768 38.308l27.455 50.333l-72.823 47.334A79.725 79.725 0 0 0 80 410.732V496h368v-85.268a79.727 79.727 0 0 0-36.4-67.076ZM416 464H112v-53.268a47.836 47.836 0 0 1 21.841-40.246l97.66-63.479l-41.64-76.341A48.146 48.146 0 0 1 184 207.681V128a80 80 0 0 1 160 0v79.681a48.146 48.146 0 0 1-5.861 22.985L296.5 307.007l97.662 63.479A47.836 47.836 0 0 1 416 410.732Z"
                     />
                  </svg>
               </NavLink>
               <NavLink className="px-2 collapse-icons">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="25"
                     height="25"
                     viewBox="0 0 40 35"
                  >
                     <path
                        path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M27 0a9.97 9.97 0 0 0-6.704 2.595A9.97 9.97 0 0 0 18.5 4.749a10 10 0 0 0-1.796-2.155A9.974 9.974 0 0 0 10 0C4.486 0 0 4.486 0 10c0 3.722 1.158 6.66 3.871 9.825c3.942 4.6 13.919 11.62 14.342 11.917a.496.496 0 0 0 .574 0c.423-.297 10.4-7.317 14.343-11.917C35.842 16.66 37 13.722 37 10c0-5.514-4.486-10-10-10zm5.371 19.175C28.876 23.251 20.191 29.516 18.5 30.72c-1.691-1.204-10.376-7.469-13.87-11.545C2.085 16.206 1 13.462 1 10c0-4.963 4.038-9 9-9c2.227 0 4.37.829 6.032 2.335a9 9 0 0 1 2.02 2.664c.17.34.726.34.896 0a8.984 8.984 0 0 1 2.02-2.663A8.968 8.968 0 0 1 27 1c4.962 0 9 4.037 9 9c0 3.462-1.085 6.206-3.629 9.175z"
                     />
                  </svg>
               </NavLink>
               <NavLink className="px-2 collapse-icons">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="25"
                     height="25"
                     viewBox="0 0 1024 1024"
                  >
                     <path
                        fill="currentColor"
                        d="M864 158.704H672.815V97.328c0-52.944-43.056-96-96-96H449.183c-52.944 0-96 43.056-96 96v61.376H159.999c-35.344 0-64 28.656-64 64v735.968c0 35.344 28.656 64 64 64h704c35.344 0 64-28.656 64-64V222.704c0-35.344-28.656-64-64-64H864zM417.184 97.328c0-17.664 14.336-32 32-32h127.632c17.664 0 32 14.336 32 32v61.376H417.184V97.328zM864 958.672H160V222.704h193.184v65.84s-.848 31.967 31.809 31.967c36 0 32.192-31.967 32.192-31.967v-65.84h191.632v65.84s-2.128 32.128 31.872 32.128c32 0 32.128-32.128 32.128-32.128v-65.84h191.184v735.968z"
                     />
                  </svg>
               </NavLink>
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                     />
                  </svg>
               </Button>
            </Nav>
            <Navbar.Toggle
               className="collapse-btn border-0"
               aria-controls="basic-navbar-nav"
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
                     stroke-linecap="round"
                     stroke-linejoin="round"
                     stroke-width="2"
                     d="M4 6h16M4 12h8m-8 6h16"
                  />
               </svg>
            </Navbar.Toggle>
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
                        <p
                           onClick={() => setOpen(!open)}
                           className="d-inline-block cursor-pointer"
                        >
                           Dropdown link{' '}
                           <span>
                              {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
                           </span>
                        </p>

                        <Collapse in={open}>
                           <div className="pb-3">
                              <p className="option option-color pb-3 pt-3">
                                 Action
                              </p>
                              <p className="option option-color pb-3">
                                 Another action
                              </p>
                              <p className="option option-color pb-3">
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
                                 stroke-linecap="round"
                                 stroke-linejoin="round"
                                 stroke-width="1"
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
