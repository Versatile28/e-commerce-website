import React from 'react';
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

export default function Icons({ menu, toggleDropdown, activeDropdown, closingDropdown }) {
   return (
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
                        alt={menu[3].subcategories[0].subcategorylist[0].name}
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
                        alt={menu[3].subcategories[1].subcategorylist[0].name}
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
                        alt={menu[3].subcategories[2].subcategorylist[0].name}
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
                        alt={menu[3].subcategories[3].subcategorylist[0].name}
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
                        alt={menu[3].subcategories[4].subcategorylist[0].name}
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
                        alt={menu[3].subcategories[5].subcategorylist[0].name}
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
                        alt={menu[3].subcategories[0].subcategorylist[1].name}
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
                        alt={menu[3].subcategories[1].subcategorylist[1].name}
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
                        alt={menu[3].subcategories[2].subcategorylist[1].name}
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
                        alt={menu[3].subcategories[3].subcategorylist[1].name}
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
                        alt={menu[3].subcategories[4].subcategorylist[1].name}
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
                        alt={menu[3].subcategories[5].subcategorylist[1].name}
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
   );
}
