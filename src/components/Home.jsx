import React from 'react';
import { MdExpandMore } from 'react-icons/md';

export default function Home({ menu, toggleDropdown, activeDropdown, closingDropdown }) {
   return (
      <div className="d-flex flex-column justify-content-center align-items-center collapse-menu">
         <div
            data-testid="header-area"
            className="d-flex justify-content-between align-items-center collapse-menu-items"
            onClick={() => {
               toggleDropdown('home');
            }}
         >
            <button data-testid="menu-button" className="border-0 bg-transparent menu-option text-black">
               {menu[0].name}
            </button>
            <MdExpandMore data-testid="expand-icon" className="cursor-pointer me-lg-0 me-3" />
         </div>
         <div
            data-testid="dropdown-home"
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
   );
}
