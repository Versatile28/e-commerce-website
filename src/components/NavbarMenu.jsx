import React from 'react';
import { useState } from 'react';
import { Nav, Form } from 'react-bootstrap';
import { MdExpandMore } from 'react-icons/md';
import {
   GiTrousers,
   GiShorts,
   GiUnderwearShorts,
   GiWatch,
   GiBowTie,
} from 'react-icons/gi';
import { TbJacket } from 'react-icons/tb';
import {
   PiTShirtLight,
   PiShirtFolded,
   PiHoodieLight,
   PiSuitcaseSimple,
   PiBaseballCap,
} from 'react-icons/pi';
import { IoIosSearch } from 'react-icons/io';

export default function NavbarMenu() {
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
      <>
         <Nav
            className="me-auto"
            style={{ maxWidth: '100%', boxSizing: 'border-box', minWidth: '470px'}}
         >
            {/* Home */}
            <div className="d-flex flex-column justify-content-center align-items-center collapse-menu">
               <div
                  className="d-flex justify-content-between align-items-center collapse-menu-items"
                  onClick={() => {
                     toggleDropdown('home');
                  }}
               >
                  <button className="border-0 bg-transparent menu-option text-black">
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
                     <a href="/" className="option option-color w-100 py-1 m-1">
                        Home 1 - Fashion
                     </a>
                     <a href="/" className="option option-color w-100 py-1 m-1">
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
                  className="d-flex justify-content-between align-items-center collapse-menu-items"
                  onClick={() => toggleDropdown('shopPages')}
               >
                  <button className="border-0 bg-transparent menu-option">
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
                        <h5 className="mb-4 drop-down-title">Shop pages</h5>
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
                        <h5 className="mb-4 drop-down-title">Product pages</h5>
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
                           className="img-fluid h-100"
                        />
                     </div>
                  </div>
               </div>
            </div>
            {/* Product Cards */}
            <div className="d-flex flex-column justify-content-center align-items-center collapse-menu">
               <div
                  className="d-flex justify-content-between align-items-center collapse-menu-items"
                  onClick={() => toggleDropdown('product')}
               >
                  <button className="border-0 bg-transparent menu-option">
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
                        <h5 className="mb-3 drop-down-title">Shop Card</h5>
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
                           className="img-fluid h-100"
                        />
                     </div>
                  </div>
               </div>
            </div>
            {/* Icons */}
            <div className="d-flex flex-column justify-content-center align-items-center collapse-menu">
               {/* Trigger button */}
               <div
                  className="d-flex justify-content-between align-items-center collapse-menu-items"
                  onClick={() => toggleDropdown('icons')}
               >
                  <button className="border-0 bg-transparent menu-option">
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
                           <GiTrousers alt="Trousers" className="icon-style" />
                           <span className="mb-3">Trousers</span>
                        </a>

                        {/* 2) Jackets */}
                        <a
                           className="col-2 d-flex flex-column align-items-center icon-select"
                           href="/"
                        >
                           <TbJacket alt="Jackets" className="icon-style" />
                           <span className="mb-3">Jackets</span>
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
                           <PiShirtFolded alt="Shirts" className="icon-style" />
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
                           <GiTrousers alt="Scarfs" className="icon-style" />
                           <span className="mb-3">Scarfs</span>
                        </a>
                     </div>

                     <div className="row m-0 mb-5">
                        {/* 7) Shorts */}
                        <a
                           className="col-2 d-flex flex-column align-items-center icon-select"
                           href="/"
                        >
                           <GiShorts alt="Shorts" className="icon-style" />
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
                           <GiWatch alt="Watches" className="icon-style" />
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
                           <PiBaseballCap alt="Caps" className="icon-style" />
                           <span className="mb-3">Caps</span>
                        </a>

                        {/* 12) Accessories */}
                        <a
                           className="col-2 d-flex flex-column align-items-center icon-select"
                           href="/"
                        >
                           <GiBowTie alt="Accessories" className="icon-style" />
                           <span className="mb-3">Accessories</span>
                        </a>
                     </div>
                  </div>
                  <div className="icons-bottom d-flex justify-content-center align-items-center pt-4 pb-1 px-5">
                     <p>
                        Don't miss our biggest sales this year. Use the code
                        'SUMMER35' at checkout until Jun. 15!
                     </p>
                  </div>
               </div>
            </div>
            {/* Pages */}
            <div className="d-flex flex-column justify-content-center align-items-center collapse-menu">
               {/* Trigger button*/}
               <div
                  className="d-flex justify-content-between align-items-center collapse-menu-items"
                  onClick={() => toggleDropdown('pages')}
               >
                  <button className="border-0 bg-transparent menu-option">
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
                        <h5 className="mt-4 py-1 m-1 fw-bold">Homepage</h5>
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
                        <h5 className="mt-4 py-1 m-1 fw-bold">Category</h5>
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
                        <h5 className="mt-4 py-1 m-1 fw-bold">Order Process</h5>
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
                        <h5 className="mt-4 py-1 m-1 fw-bold">Customer</h5>
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
                  className="d-flex justify-content-between align-items-center collapse-menu-items"
                  onClick={() => {
                     toggleDropdown('docs');
                  }}
               >
                  <button className="border-0 bg-transparent menu-option">
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
         <Form className="d-flex collapse-search menu-search-container">
            <div className='d-flex'>
               <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-auto menu-search-item"
                  aria-label="Search"
               />
               <IoIosSearch className="search-icon" />
            </div>
         </Form>
      </>
   );
}
