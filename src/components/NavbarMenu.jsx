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

export default function NavbarMenu({ menu }) {
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
            className="me-auto navbar-menu-container"
            style={{
               maxWidth: '100%',
               boxSizing: 'border-box',
               minWidth: '470px',
            }}
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
                     {menu[0].name}
                  </button>
                  <MdExpandMore className="cursor-pointer me-lg-0 me-3" />
               </div>
               <div
                  className={`drop-home bg-white shadow position-absolute top-5 ${
                     activeDropdown === 'home' ? 'show' : ''
                  } ${closingDropdown === 'home' ? 'hide' : ''}`}
               >
                  <div className="d-flex flex-column justify-content-center align-items-center py-2 px-4">
                     <a
                        href={menu[0].subcategories[0].subcategorylist[0].link}
                        className="option option-color w-100 py-1 m-1"
                     >
                        {menu[0].subcategories[0].subcategorylist[0].name}
                     </a>
                     <a
                        href={menu[0].subcategories[0].subcategorylist[1].link}
                        className="option option-color w-100 py-1 m-1"
                     >
                        {menu[0].subcategories[0].subcategorylist[1].name}
                     </a>
                     <a
                        href={menu[0].subcategories[0].subcategorylist[2].link}
                        className="option option-color w-100 d-flex justify-content-start align-items-center py-1 m-1"
                     >
                        {menu[0].subcategories[0].subcategorylist[2].name}
                        <div className="new-btn">New</div>
                     </a>
                     <a
                        href={menu[0].subcategories[0].subcategorylist[3].link}
                        className="option option-color w-100 d-flex justify-content-start align-items-center py-1 m-1"
                     >
                        {menu[0].subcategories[0].subcategorylist[3].name}
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
                     {menu[1].name}
                  </button>
                  <MdExpandMore className="cursor-pointer me-lg-0 me-3" />
               </div>

               <div
                  className={`drop-shop bg-white shadow position-absolute top-5 ${
                     activeDropdown === 'shopPages' ? 'show' : ''
                  } ${closingDropdown === 'shopPages' ? 'hide' : ''}`}
               >
                  <div className="row m-0">
                     <div className="col d-flex flex-column my-5 ms-4">
                        <h5 className="mb-4 drop-down-title">Shop pages</h5>
                        <a
                           href={
                              menu[1].subcategories[0].subcategorylist[0].link
                           }
                           className="mb-4 option option-color"
                        >
                           {menu[1].subcategories[0].subcategorylist[0].name}
                        </a>
                        <a
                           href={
                              menu[1].subcategories[0].subcategorylist[1].link
                           }
                           className="mb-4 option option-color"
                        >
                           {menu[1].subcategories[0].subcategorylist[1].name}
                        </a>
                        <a
                           href={
                              menu[1].subcategories[0].subcategorylist[2].link
                           }
                           className="mb-4 option option-color"
                        >
                           {menu[1].subcategories[0].subcategorylist[2].name}
                        </a>
                        <a
                           href={
                              menu[1].subcategories[0].subcategorylist[3].link
                           }
                           className="mb-4 option option-color"
                        >
                           {menu[1].subcategories[0].subcategorylist[3].name}
                        </a>
                        <a
                           href={
                              menu[1].subcategories[0].subcategorylist[4].link
                           }
                           className="mb-4 option option-color"
                        >
                           {menu[1].subcategories[0].subcategorylist[4].name}
                        </a>
                        <a
                           href={
                              menu[1].subcategories[0].subcategorylist[5].link
                           }
                           className="mb-4 d-flex align-items-center option option-color"
                        >
                           {menu[1].subcategories[0].subcategorylist[5].name}
                           <span className="new-btn">New</span>
                        </a>
                        <a
                           href={
                              menu[1].subcategories[0].subcategorylist[6].link
                           }
                           className="mb-4 option option-color"
                        >
                           {menu[1].subcategories[0].subcategorylist[6].name}
                        </a>
                     </div>

                     <div className="col d-flex flex-column my-5">
                        <h5 className="mb-4 drop-down-title">Product pages</h5>
                        <a
                           href={
                              menu[1].subcategories[1].subcategorylist[0].link
                           }
                           className="mb-4 option option-color"
                        >
                           {menu[1].subcategories[1].subcategorylist[0].name}
                        </a>
                        <a
                           href={
                              menu[1].subcategories[1].subcategorylist[1].link
                           }
                           className="mb-4 option option-color"
                        >
                           {menu[1].subcategories[1].subcategorylist[1].name}
                        </a>
                        <a
                           href={
                              menu[1].subcategories[1].subcategorylist[2].link
                           }
                           className="mb-4 option option-color"
                        >
                           {menu[1].subcategories[1].subcategorylist[2].name}
                        </a>
                     </div>
                     <div className="col padd-0">
                        <img
                           src={menu[1].subcategories[2].image}
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
                     {menu[2].name}
                  </button>
                  <MdExpandMore className="cursor-pointer me-lg-0 me-3" />
               </div>

               <div
                  className={`drop-product bg-white shadow position-absolute top-5 ${
                     activeDropdown === 'product' ? 'show' : ''
                  } ${closingDropdown === 'product' ? 'hide' : ''}`}
               >
                  <div className="row m-0">
                     <div className="col d-flex flex-column my-5 ms-4">
                        <h5 className="mb-3 drop-down-title">
                           {menu[2].subcategories[0].name}
                        </h5>
                        <a
                           href={
                              menu[2].subcategories[0].subcategorylist[0].link
                           }
                           className="mb-3 option option-color"
                        >
                           {menu[2].subcategories[0].subcategorylist[0].name}
                        </a>
                        <a
                           href={
                              menu[2].subcategories[0].subcategorylist[1].link
                           }
                           className="mb-3 option option-color"
                        >
                           {menu[2].subcategories[0].subcategorylist[1].name}
                        </a>
                        <a
                           href={
                              menu[2].subcategories[0].subcategorylist[2].link
                           }
                           className="mb-3 option option-color"
                        >
                           {menu[2].subcategories[0].subcategorylist[2].name}
                        </a>
                        <a
                           href={
                              menu[2].subcategories[0].subcategorylist[3].link
                           }
                           className="mb-3 option option-color"
                        >
                           {menu[2].subcategories[0].subcategorylist[3].name}
                        </a>
                     </div>

                     <div className="col d-flex flex-column my-5">
                        <h5 className="mb-4 p-1"> </h5>
                        <a
                           href={
                              menu[2].subcategories[1].subcategorylist[0].link
                           }
                           className="mb-3 option option-color"
                        >
                           {menu[2].subcategories[1].subcategorylist[0].name}
                        </a>
                        <a
                           href={
                              menu[2].subcategories[1].subcategorylist[1].link
                           }
                           className="mb-3 option option-color"
                        >
                           {menu[2].subcategories[1].subcategorylist[1].name}
                        </a>
                        <a
                           href={
                              menu[2].subcategories[1].subcategorylist[2].link
                           }
                           className="mb-3 option option-color"
                        >
                           {menu[2].subcategories[1].subcategorylist[2].name}
                        </a>
                        <a
                           href={
                              menu[2].subcategories[1].subcategorylist[3].link
                           }
                           className="mb-3 option option-color"
                        >
                           {menu[2].subcategories[1].subcategorylist[3].name}
                        </a>
                     </div>

                     <div className="col padd-0">
                        <img
                           src={menu[2].subcategories[2].image}
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
                     {menu[3].name}
                  </button>
                  <MdExpandMore className="cursor-pointer me-lg-0 me-3" />
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
                           href={menu[3].subcategories[0].subcategorylist[0].link}
                        >
                           <GiTrousers
                              alt={
                                 menu[3].subcategories[0].subcategorylist[0]
                                    .name
                              }
                              className="icon-style"
                           />
                           <span className="mb-3">
                              {menu[3].subcategories[0].subcategorylist[0].name}
                           </span>
                        </a>

                        {/* 2) Jackets */}
                        <a
                           className="col-2 d-flex flex-column align-items-center icon-select"
                           href={menu[3].subcategories[1].subcategorylist[0].link}
                        >
                           <TbJacket
                              alt={
                                 menu[3].subcategories[1].subcategorylist[0]
                                    .name
                              }
                              className="icon-style"
                           />
                           <span className="mb-3">
                              {menu[3].subcategories[1].subcategorylist[0].name}
                           </span>
                        </a>

                        {/* 3) T-Shirts */}
                        <a
                           className="col-2 d-flex flex-column align-items-center icon-select"
                           href={menu[3].subcategories[2].subcategorylist[0].link}
                        >
                           <PiTShirtLight
                              alt={
                                 menu[3].subcategories[2].subcategorylist[0]
                                    .name
                              }
                              className="icon-style"
                           />
                           <span className="mb-3">
                              {menu[3].subcategories[2].subcategorylist[0].name}
                           </span>
                        </a>

                        {/* 4) Shirts */}
                        <a
                           className="col-2 d-flex flex-column align-items-center icon-select"
                           href={menu[3].subcategories[3].subcategorylist[0].link}
                        >
                           <PiShirtFolded
                              alt={
                                 menu[3].subcategories[3].subcategorylist[0]
                                    .name
                              }
                              className="icon-style"
                           />
                           <span className="mb-3">
                              {menu[3].subcategories[3].subcategorylist[0].name}
                           </span>
                        </a>

                        {/* 5) Pullovers */}
                        <a
                           className="col-2 d-flex flex-column align-items-center icon-select"
                           href={menu[3].subcategories[4].subcategorylist[0].link}
                        >
                           <PiHoodieLight
                              alt={
                                 menu[3].subcategories[4].subcategorylist[0]
                                    .name
                              }
                              className="icon-style"
                           />
                           <span className="mb-3">
                              {menu[3].subcategories[4].subcategorylist[0].name}
                           </span>
                        </a>

                        {/* 6) Scarfs */}
                        <a
                           className="col-2 d-flex flex-column align-items-center icon-select"
                           href={menu[3].subcategories[5].subcategorylist[0].link}
                        >
                           <GiTrousers
                              alt={
                                 menu[3].subcategories[5].subcategorylist[0]
                                    .name
                              }
                              className="icon-style"
                           />
                           <span className="mb-3">
                              {menu[3].subcategories[5].subcategorylist[0].name}
                           </span>
                        </a>
                     </div>

                     <div className="row m-0 mb-5">
                        {/* 7) Shorts */}
                        <a
                           className="col-2 d-flex flex-column align-items-center icon-select"
                           href={menu[3].subcategories[0].subcategorylist[1].link}
                        >
                           <GiShorts
                              alt={
                                 menu[3].subcategories[0].subcategorylist[1]
                                    .name
                              }
                              className="icon-style"
                           />
                           <span className="mb-3">
                              {menu[3].subcategories[0].subcategorylist[1].name}
                           </span>
                        </a>

                        {/* 8) Underwear */}
                        <a
                           className="col-2 d-flex flex-column align-items-center icon-select"
                           href={menu[3].subcategories[1].subcategorylist[1].link}
                        >
                           <GiUnderwearShorts
                              alt={
                                 menu[3].subcategories[1].subcategorylist[1]
                                    .name
                              }
                              className="icon-style"
                           />
                           <span className="mb-3">
                              {menu[3].subcategories[1].subcategorylist[1].name}
                           </span>
                        </a>

                        {/* 9) Watches */}
                        <a
                           className="col-2 d-flex flex-column align-items-center icon-select"
                           href={menu[3].subcategories[2].subcategorylist[1].link}
                        >
                           <GiWatch
                              alt={
                                 menu[3].subcategories[2].subcategorylist[1]
                                    .name
                              }
                              className="icon-style"
                           />
                           <span className="mb-3">
                              {menu[3].subcategories[2].subcategorylist[1].name}
                           </span>
                        </a>

                        {/* 10) Bags */}
                        <a
                           className="col-2 d-flex flex-column align-items-center icon-select"
                           href={menu[3].subcategories[3].subcategorylist[1].link}
                        >
                           <PiSuitcaseSimple
                              alt={
                                 menu[3].subcategories[3].subcategorylist[1]
                                    .name
                              }
                              className="icon-style"
                           />
                           <span className="mb-3">
                              {menu[3].subcategories[3].subcategorylist[1].name}
                           </span>
                        </a>

                        {/* 11) Caps */}
                        <a
                           className="col-2 d-flex flex-column align-items-center icon-select"
                           href={menu[3].subcategories[4].subcategorylist[1].link}
                        >
                           <PiBaseballCap
                              alt={
                                 menu[3].subcategories[4].subcategorylist[1]
                                    .name
                              }
                              className="icon-style"
                           />
                           <span className="mb-3">
                              {menu[3].subcategories[4].subcategorylist[1].name}
                           </span>
                        </a>

                        {/* 12) Accessories */}
                        <a
                           className="col-2 d-flex flex-column align-items-center icon-select"
                           href={menu[3].subcategories[5].subcategorylist[1].link}
                        >
                           <GiBowTie
                              alt={
                                 menu[3].subcategories[5].subcategorylist[1]
                                    .name
                              }
                              className="icon-style"
                           />
                           <span className="mb-3">
                              {menu[3].subcategories[5].subcategorylist[1].name}
                           </span>
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
                  {menu[4].name}
                  </button>
                  <MdExpandMore className="cursor-pointer me-lg-0 me-3" />
               </div>

               {/* Dropdown container */}
               <div
                  className={`drop-pages shadow bg-white position-absolute top-5 p-2 ${
                     activeDropdown === 'pages' ? 'show' : ''
                  } ${closingDropdown === 'pages' ? 'hide' : ''}`}
               >
                  {/* Four columns in a row */}
                  <div className="row m-0 mb-5 mt-4">
                     {/* Column 1 */}
                     <div className="d-flex col col-3 flex-column px-3">
                        <img src={menu[4].subcategories[0].image} className='menu-img' alt="" />
                        <h5 className="mt-4 py-1 m-1 fw-bold">{menu[4].subcategories[0].name}</h5>
                        <a
                           href={menu[4].subcategories[0].subcategorylist[0].link}
                           className="option option-color w-100 py-1 m-1"
                        >
                           {menu[4].subcategories[0].subcategorylist[0].name}
                        </a>
                        <a
                           href={menu[4].subcategories[0].subcategorylist[1].link}
                           className="option option-color w-100 py-1 m-1"
                        >
                           {menu[4].subcategories[0].subcategorylist[1].name}
                        </a>
                        <a
                           href={menu[4].subcategories[0].subcategorylist[2].link}
                           className="option option-color w-100 d-flex justify-content-start align-items-center m-1"
                        >
                           {menu[4].subcategories[0].subcategorylist[2].name}
                           <div className="new-btn">New</div>
                        </a>
                        <a
                           href={menu[4].subcategories[0].subcategorylist[3].link}
                           className="option option-color w-100 d-flex justify-content-start align-items-center m-1"
                        >
                           {menu[4].subcategories[0].subcategorylist[3].name}
                           <div className="new-btn">New</div>
                        </a>
                        <h5 className="mt-4 py-1 m-1 fw-bold">{menu[4].subcategories[4].name}</h5>
                        <a
                           href={menu[4].subcategories[4].subcategorylist[0].link}
                           className="option option-color w-100 py-1 m-1"
                        >
                           {menu[4].subcategories[4].subcategorylist[0].name}
                        </a>
                        <a
                           href={menu[4].subcategories[4].subcategorylist[1].link}
                           className="option option-color w-100 py-1 m-1"
                        >
                           {menu[4].subcategories[4].subcategorylist[1].name}
                        </a>
                        <a
                           href={menu[4].subcategories[4].subcategorylist[2].link}
                           className="option option-color w-100 py-1 m-1"
                        >
                           {menu[4].subcategories[4].subcategorylist[2].name}
                        </a>
                        <a
                           href={menu[4].subcategories[4].subcategorylist[3].link}
                           className="option option-color w-100 py-1 m-1"
                        >
                           {menu[4].subcategories[4].subcategorylist[3].name}
                        </a>
                        <a
                           href={menu[4].subcategories[4].subcategorylist[4].link}
                           className="option option-color w-100 py-1 m-1"
                        >
                           {menu[4].subcategories[4].subcategorylist[4].name}
                        </a>
                        <a
                           href={menu[4].subcategories[4].subcategorylist[5].link}
                           className="option option-color w-100 d-flex justify-content-start align-items-center m-1"
                        >
                           {menu[4].subcategories[4].subcategorylist[5].name}
                           <div className="new-btn">New</div>
                        </a>
                        <a
                           href={menu[4].subcategories[4].subcategorylist[6].link}
                           className="option option-color w-100 py-1 m-1"
                        >
                           {menu[4].subcategories[4].subcategorylist[6].name}
                        </a>
                     </div>

                     {/* Column 2 */}
                     <div className="d-flex col col-3 flex-column px-3">
                        <img src={menu[4].subcategories[1].image} className='menu-img' alt="" />
                        <h5 className="mt-4 py-1 m-1 fw-bold">{menu[4].subcategories[1].name}</h5>
                        <a
                           href={menu[4].subcategories[1].subcategorylist[0].link}
                           className="option option-color w-100 py-1 m-1"
                        >
                           {menu[4].subcategories[1].subcategorylist[0].name}
                        </a>
                        <a
                           href={menu[4].subcategories[1].subcategorylist[1].link}
                           className="option option-color w-100 d-flex justify-content-start align-items-center m-1"
                        >
                           {menu[4].subcategories[1].subcategorylist[1].name}
                           <div className="new-btn">New</div>
                        </a>
                        <a
                           href={menu[4].subcategories[1].subcategorylist[2].link}
                           className="option option-color w-100 d-flex justify-content-start align-items-center m-1"
                        >
                           {menu[4].subcategories[1].subcategorylist[2].name}
                        </a>
                        <a
                           href={menu[4].subcategories[1].subcategorylist[3].link}
                           className="option option-color w-100 d-flex justify-content-start align-items-center m-1"
                        >
                           {menu[4].subcategories[1].subcategorylist[3].name}
                           <div className="new-btn">New</div>
                        </a>
                        <h5 className="mt-4 py-1 m-1 fw-bold">{menu[4].subcategories[5].name}</h5>
                        <a
                           href={menu[4].subcategories[5].subcategorylist[0].link}
                           className="option option-color w-100 py-1 m-1"
                        >
                           {menu[4].subcategories[5].subcategorylist[0].name}
                        </a>
                        <a
                           href={menu[4].subcategories[5].subcategorylist[1].link}
                           className="option option-color w-100 py-1 m-1"
                        >
                           {menu[4].subcategories[5].subcategorylist[1].name}
                        </a>
                        <a
                           href={menu[4].subcategories[5].subcategorylist[2].link}
                           className="option option-color w-100 py-1 m-1"
                        >
                           {menu[4].subcategories[5].subcategorylist[2].name}
                        </a>
                     </div>

                     {/* Column 3 */}
                     <div className="d-flex col col-3 flex-column px-3">
                        <img src={menu[4].subcategories[2].image} className='menu-img' alt="" />
                        <h5 className="mt-4 py-1 m-1 fw-bold">{menu[4].subcategories[2].name}</h5>
                        <a
                           href={menu[4].subcategories[2].subcategorylist[0].link}
                           className="option option-color w-100 py-1 m-1"
                        >
                           {menu[4].subcategories[2].subcategorylist[0].name}
                        </a>
                        <a
                           href={menu[4].subcategories[2].subcategorylist[1].link}
                           className="option option-color w-100 py-1 m-1"
                        >
                           {menu[4].subcategories[2].subcategorylist[1].name}
                        </a>
                        <a
                           href={menu[4].subcategories[2].subcategorylist[2].link}
                           className="option option-color w-100 py-1 m-1"
                        >
                           {menu[4].subcategories[2].subcategorylist[2].name}
                        </a>
                        <h5 className="mt-4 py-1 m-1 fw-bold">{menu[4].subcategories[6].name}</h5>
                        <a
                           href={menu[4].subcategories[6].subcategorylist[0].link}
                           className="option option-color w-100 d-flex justify-content-start align-items-center m-1"
                        >
                           {menu[4].subcategories[6].subcategorylist[0].name}
                           <div className="new-btn">New</div>
                        </a>
                        <a
                           href={menu[4].subcategories[6].subcategorylist[1].link}
                           className="option option-color w-100 d-flex justify-content-start align-items-center m-1"
                        >
                           {menu[4].subcategories[6].subcategorylist[1].name}
                           <div className="new-btn">New</div>
                        </a>
                        <a
                           href={menu[4].subcategories[6].subcategorylist[2].link}
                           className="option option-color w-100 d-flex justify-content-start align-items-center m-1"
                        >
                           {menu[4].subcategories[6].subcategorylist[2].name}
                           <div className="new-btn">New</div>
                        </a>
                        <a
                           href={menu[4].subcategories[6].subcategorylist[3].link}
                           className="option option-color w-100 py-1 m-1"
                        >
                           {menu[4].subcategories[6].subcategorylist[3].name}
                        </a>
                        <a
                           href={menu[4].subcategories[6].subcategorylist[4].link}
                           className="option option-color w-100 d-flex justify-content-start align-items-center m-1"
                        >
                           {menu[4].subcategories[6].subcategorylist[4].name}
                           <div className="new-btn">New</div>
                        </a>
                     </div>

                     {/* Column 4 */}
                     <div className="d-flex col col-3 flex-column px-3">
                        <img src={menu[4].subcategories[3].image} className='menu-img' alt="" />
                        <h5 className="mt-4 py-1 m-1 fw-bold">{menu[4].subcategories[3].name}</h5>
                        <a
                           href={menu[4].subcategories[3].subcategorylist[0].link}
                           className="option option-color w-100 d-flex justify-content-start align-items-center m-1"
                        >
                           {menu[4].subcategories[3].subcategorylist[0].name}
                           <div className="new-btn">New</div>
                        </a>
                        <a
                           href={menu[4].subcategories[3].subcategorylist[1].link}
                           className="option option-color w-100 d-flex justify-content-start align-items-center m-1"
                        >
                           {menu[4].subcategories[3].subcategorylist[1].name}
                           <div className="new-btn">New</div>
                        </a>
                        <a
                           href={menu[4].subcategories[3].subcategorylist[2].link}
                           className="option option-color w-100 d-flex justify-content-start align-items-center m-1"
                        >
                           {menu[4].subcategories[3].subcategorylist[2].name}
                           <div className="new-btn">New</div>
                        </a>
                        <a
                           href={menu[4].subcategories[3].subcategorylist[3].link}
                           className="option option-color w-100 d-flex justify-content-start align-items-center m-1"
                        >
                           {menu[4].subcategories[3].subcategorylist[3].name}
                           <div className="new-btn">New</div>
                        </a>
                        <a
                           href={menu[4].subcategories[3].subcategorylist[4].link}
                           className="option option-color w-100 d-flex justify-content-start align-items-center m-1"
                        >
                           {menu[4].subcategories[3].subcategorylist[4].name}
                           <div className="new-btn">New</div>
                        </a>
                        <a
                           href={menu[4].subcategories[3].subcategorylist[5].link}
                           className="option option-color w-100 d-flex justify-content-start align-items-center m-1"
                        >
                           {menu[4].subcategories[3].subcategorylist[5].name}
                           <div className="new-btn">New</div>
                        </a>
                        <a
                           href={menu[4].subcategories[3].subcategorylist[6].link}
                           className="option option-color w-100 d-flex justify-content-start align-items-center m-1"
                        >
                           {menu[4].subcategories[3].subcategorylist[6].name}
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
                  {menu[5].name}
                  </button>
                  <MdExpandMore className="cursor-pointer me-lg-0 me-3" />
               </div>
               <div
                  className={`drop-docs bg-white shadow position-absolute top-5 ${
                     activeDropdown === 'docs' ? 'show' : ''
                  } ${closingDropdown === 'docs' ? 'hide' : ''}`}
               >
                  <div className="d-flex flex-column">
                     <h5 className="mt-4 py-1 m-1 px-3 drop-down-title">
                     {menu[5].subcategories[0].name}
                     </h5>
                     <a
                        href={menu[5].subcategories[0].subcategorylist[0].link}
                        className="option option-color w-100 py-1 m-1 px-3"
                     >
                     {menu[5].subcategories[0].subcategorylist[0].name}
                     </a>
                     <a
                        href={menu[5].subcategories[0].subcategorylist[1].link}
                        className="option option-color w-100 py-1 m-1 px-3"
                     >
                     {menu[5].subcategories[0].subcategorylist[1].name}
                     </a>
                     <a
                        href={menu[5].subcategories[0].subcategorylist[2].link}
                        className="option option-color w-100 py-1 m-1 px-3"
                     >
                     {menu[5].subcategories[0].subcategorylist[2].name}
                     </a>
                     <a
                        href={menu[5].subcategories[0].subcategorylist[3].link}
                        className="option option-color w-100 py-1 m-1 px-3"
                     >
                     {menu[5].subcategories[0].subcategorylist[3].name}
                     </a>
                     <a
                        href={menu[5].subcategories[0].subcategorylist[4].link}
                        className="option option-color w-100 py-1 m-1 px-3"
                     >
                     {menu[5].subcategories[0].subcategorylist[4].name}
                     </a>
                     <a
                        href={menu[5].subcategories[0].subcategorylist[5].link}
                        className="option option-color w-100 py-1 m-1 px-3"
                     >
                     {menu[5].subcategories[0].subcategorylist[5].name}
                     </a>
                     <a
                        href={menu[5].subcategories[0].subcategorylist[6].link}
                        className="option option-color w-100 py-1 m-1 px-3"
                     >
                     {menu[5].subcategories[0].subcategorylist[6].name}
                     </a>
                     <hr />
                     <h5 className="py-1 m-1 px-3 drop-down-title">
                     {menu[5].subcategories[1].name}
                     </h5>
                     <a
                        href={menu[5].subcategories[1].subcategorylist[0].link}
                        className="option option-color w-100 py-1 m-1 px-3"
                     >
                     {menu[5].subcategories[1].subcategorylist[0].name}
                     </a>
                     <a
                        href={menu[5].subcategories[1].subcategorylist[1].link}
                        className="option option-color w-100 py-1 m-1 px-3 "
                     >
                     {menu[5].subcategories[1].subcategorylist[1].name}
                     </a>
                  </div>
               </div>
            </div>
         </Nav>
         <Form className="d-flex collapse-search menu-search-container">
            <div className="d-flex">
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
