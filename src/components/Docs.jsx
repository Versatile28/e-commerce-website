import React from 'react';
import { MdExpandMore } from 'react-icons/md';

export default function Docs({ menu, toggleDropdown, activeDropdown, closingDropdown }) {
   return (
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
            data-testid="docs-dropdown"
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
   );
}
