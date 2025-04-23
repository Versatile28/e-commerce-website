import React from 'react';
import { MdExpandMore } from 'react-icons/md';

export default function ProductCards({ menu, toggleDropdown, activeDropdown, closingDropdown }) {
   return (
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
            data-testid="product-dropdown"
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
                     href={menu[2].subcategories[0].subcategorylist[0].link}
                     className="mb-3 option option-color"
                  >
                     {menu[2].subcategories[0].subcategorylist[0].name}
                  </a>
                  <a
                     href={menu[2].subcategories[0].subcategorylist[1].link}
                     className="mb-3 option option-color"
                  >
                     {menu[2].subcategories[0].subcategorylist[1].name}
                  </a>
                  <a
                     href={menu[2].subcategories[0].subcategorylist[2].link}
                     className="mb-3 option option-color"
                  >
                     {menu[2].subcategories[0].subcategorylist[2].name}
                  </a>
                  <a
                     href={menu[2].subcategories[0].subcategorylist[3].link}
                     className="mb-3 option option-color"
                  >
                     {menu[2].subcategories[0].subcategorylist[3].name}
                  </a>
               </div>

               <div className="col d-flex flex-column my-5">
                  <h5 className="mb-4 p-1"> </h5>
                  <a
                     href={menu[2].subcategories[1].subcategorylist[0].link}
                     className="mb-3 option option-color"
                  >
                     {menu[2].subcategories[1].subcategorylist[0].name}
                  </a>
                  <a
                     href={menu[2].subcategories[1].subcategorylist[1].link}
                     className="mb-3 option option-color"
                  >
                     {menu[2].subcategories[1].subcategorylist[1].name}
                  </a>
                  <a
                     href={menu[2].subcategories[1].subcategorylist[2].link}
                     className="mb-3 option option-color"
                  >
                     {menu[2].subcategories[1].subcategorylist[2].name}
                  </a>
                  <a
                     href={menu[2].subcategories[1].subcategorylist[3].link}
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
   );
}
