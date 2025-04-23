import React from 'react';
import { MdExpandMore } from 'react-icons/md';

export default function Shop({ menu, toggleDropdown, activeDropdown, closingDropdown }) {
   return (
      <div className="d-flex flex-column justify-content-center align-items-center collapse-menu">
         <div
            data-testid="header-shop"
            className="d-flex justify-content-between align-items-center collapse-menu-items"
            onClick={() => toggleDropdown('shopPages')}
         >
            <button data-testid="btn-shop" className="border-0 bg-transparent menu-option">
               {menu[1].name}
            </button>
            <MdExpandMore data-testid="icon-shop" className="cursor-pointer me-lg-0 me-3" />
         </div>

         <div
            data-testid="dropdown-shop"
            className={`drop-shop bg-white shadow position-absolute top-5 ${
               activeDropdown === 'shopPages' ? 'show' : ''
            } ${closingDropdown === 'shopPages' ? 'hide' : ''}`}
         >
            <div className="row m-0">
               <div className="col d-flex flex-column my-5 ms-4">
                  <h5 className="mb-4 drop-down-title">Shop pages</h5>
                  <a
                     href={menu[1].subcategories[0].subcategorylist[0].link}
                     className="mb-4 option option-color"
                  >
                     {menu[1].subcategories[0].subcategorylist[0].name}
                  </a>
                  <a
                     href={menu[1].subcategories[0].subcategorylist[1].link}
                     className="mb-4 option option-color"
                  >
                     {menu[1].subcategories[0].subcategorylist[1].name}
                  </a>
                  <a
                     href={menu[1].subcategories[0].subcategorylist[2].link}
                     className="mb-4 option option-color"
                  >
                     {menu[1].subcategories[0].subcategorylist[2].name}
                  </a>
                  <a
                     href={menu[1].subcategories[0].subcategorylist[3].link}
                     className="mb-4 option option-color"
                  >
                     {menu[1].subcategories[0].subcategorylist[3].name}
                  </a>
                  <a
                     href={menu[1].subcategories[0].subcategorylist[4].link}
                     className="mb-4 option option-color"
                  >
                     {menu[1].subcategories[0].subcategorylist[4].name}
                  </a>
                  <a
                     href={menu[1].subcategories[0].subcategorylist[5].link}
                     className="mb-4 d-flex align-items-center option option-color"
                  >
                     {menu[1].subcategories[0].subcategorylist[5].name}
                     <span className="new-btn">New</span>
                  </a>
                  <a
                     href={menu[1].subcategories[0].subcategorylist[6].link}
                     className="mb-4 option option-color"
                  >
                     {menu[1].subcategories[0].subcategorylist[6].name}
                  </a>
               </div>

               <div className="col d-flex flex-column my-5">
                  <h5 className="mb-4 drop-down-title">Product pages</h5>
                  <a
                     href={menu[1].subcategories[1].subcategorylist[0].link}
                     className="mb-4 option option-color"
                  >
                     {menu[1].subcategories[1].subcategorylist[0].name}
                  </a>
                  <a
                     href={menu[1].subcategories[1].subcategorylist[1].link}
                     className="mb-4 option option-color"
                  >
                     {menu[1].subcategories[1].subcategorylist[1].name}
                  </a>
                  <a
                     href={menu[1].subcategories[1].subcategorylist[2].link}
                     className="mb-4 option option-color"
                  >
                     {menu[1].subcategories[1].subcategorylist[2].name}
                  </a>
               </div>
               <div className="col padd-0">
                  <img
                     data-testid="img-shop"
                     src={menu[1].subcategories[2].image}
                     alt="Model"
                     className="img-fluid h-100"
                  />
               </div>
            </div>
         </div>
      </div>
   );
}
