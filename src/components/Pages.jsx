import React from 'react';
import { MdExpandMore } from 'react-icons/md';

export default function Pages({ menu, toggleDropdown, activeDropdown, closingDropdown }) {
   return (
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
            data-testid="pages-dropdown"
            className={`drop-pages shadow bg-white position-absolute top-5 p-2 ${
               activeDropdown === 'pages' ? 'show' : ''
            } ${closingDropdown === 'pages' ? 'hide' : ''}`}
         >
            {/* Four columns in a row */}
            <div className="row m-0 mb-5 mt-4">
               {/* Column 1 */}
               <div className="d-flex col col-3 flex-column px-3">
                  <img
                     data-testid="pages-img"
                     src={menu[4].subcategories[0].image}
                     className="menu-img"
                     alt=""
                  />
                  <h5 className="mt-4 py-1 m-1 fw-bold">
                     {menu[4].subcategories[0].name}
                  </h5>
                  <a
                     data-testid="pages-link"
                     href={menu[4].subcategories[0].subcategorylist[0].link}
                     className="option option-color w-100 py-1 m-1"
                  >
                     {menu[4].subcategories[0].subcategorylist[0].name}
                  </a>
                  <a
                     data-testid="pages-link"
                     href={menu[4].subcategories[0].subcategorylist[1].link}
                     className="option option-color w-100 py-1 m-1"
                  >
                     {menu[4].subcategories[0].subcategorylist[1].name}
                  </a>
                  <a
                     data-testid="pages-link"
                     href={menu[4].subcategories[0].subcategorylist[2].link}
                     className="option option-color w-100 d-flex justify-content-start align-items-center m-1"
                  >
                     {menu[4].subcategories[0].subcategorylist[2].name}
                     <div className="new-btn">New</div>
                  </a>
                  <a
                     data-testid="pages-link"
                     href={menu[4].subcategories[0].subcategorylist[3].link}
                     className="option option-color w-100 d-flex justify-content-start align-items-center m-1"
                  >
                     {menu[4].subcategories[0].subcategorylist[3].name}
                     <div className="new-btn">New</div>
                  </a>
                  <h5 className="mt-4 py-1 m-1 fw-bold">
                     {menu[4].subcategories[4].name}
                  </h5>
                  <a
                     data-testid="pages-link"
                     href={menu[4].subcategories[4].subcategorylist[0].link}
                     className="option option-color w-100 py-1 m-1"
                  >
                     {menu[4].subcategories[4].subcategorylist[0].name}
                  </a>
                  <a
                     data-testid="pages-link"
                     href={menu[4].subcategories[4].subcategorylist[1].link}
                     className="option option-color w-100 py-1 m-1"
                  >
                     {menu[4].subcategories[4].subcategorylist[1].name}
                  </a>
                  <a
                     data-testid="pages-link"
                     href={menu[4].subcategories[4].subcategorylist[2].link}
                     className="option option-color w-100 py-1 m-1"
                  >
                     {menu[4].subcategories[4].subcategorylist[2].name}
                  </a>
                  <a
                     data-testid="pages-link"
                     href={menu[4].subcategories[4].subcategorylist[3].link}
                     className="option option-color w-100 py-1 m-1"
                  >
                     {menu[4].subcategories[4].subcategorylist[3].name}
                  </a>
                  <a
                     data-testid="pages-link"
                     href={menu[4].subcategories[4].subcategorylist[4].link}
                     className="option option-color w-100 py-1 m-1"
                  >
                     {menu[4].subcategories[4].subcategorylist[4].name}
                  </a>
                  <a
                     data-testid="pages-link"
                     href={menu[4].subcategories[4].subcategorylist[5].link}
                     className="option option-color w-100 d-flex justify-content-start align-items-center m-1"
                  >
                     {menu[4].subcategories[4].subcategorylist[5].name}
                     <div className="new-btn">New</div>
                  </a>
                  <a
                     data-testid="pages-link"
                     href={menu[4].subcategories[4].subcategorylist[6].link}
                     className="option option-color w-100 py-1 m-1"
                  >
                     {menu[4].subcategories[4].subcategorylist[6].name}
                  </a>
               </div>

               {/* Column 2 */}
               <div className="d-flex col col-3 flex-column px-3">
                  <img
                     data-testid="pages-img"
                     src={menu[4].subcategories[1].image}
                     className="menu-img"
                     alt=""
                  />
                  <h5 className="mt-4 py-1 m-1 fw-bold">
                     {menu[4].subcategories[1].name}
                  </h5>
                  <a
                     data-testid="pages-link"
                     href={menu[4].subcategories[1].subcategorylist[0].link}
                     className="option option-color w-100 py-1 m-1"
                  >
                     {menu[4].subcategories[1].subcategorylist[0].name}
                  </a>
                  <a
                     data-testid="pages-link"
                     href={menu[4].subcategories[1].subcategorylist[1].link}
                     className="option option-color w-100 d-flex justify-content-start align-items-center m-1"
                  >
                     {menu[4].subcategories[1].subcategorylist[1].name}
                     <div className="new-btn">New</div>
                  </a>
                  <a
                     data-testid="pages-link"
                     href={menu[4].subcategories[1].subcategorylist[2].link}
                     className="option option-color w-100 d-flex justify-content-start align-items-center m-1"
                  >
                     {menu[4].subcategories[1].subcategorylist[2].name}
                  </a>
                  <a
                     data-testid="pages-link"
                     href={menu[4].subcategories[1].subcategorylist[3].link}
                     className="option option-color w-100 d-flex justify-content-start align-items-center m-1"
                  >
                     {menu[4].subcategories[1].subcategorylist[3].name}
                     <div className="new-btn">New</div>
                  </a>
                  <h5 className="mt-4 py-1 m-1 fw-bold">
                     {menu[4].subcategories[5].name}
                  </h5>
                  <a
                     data-testid="pages-link"
                     href={menu[4].subcategories[5].subcategorylist[0].link}
                     className="option option-color w-100 py-1 m-1"
                  >
                     {menu[4].subcategories[5].subcategorylist[0].name}
                  </a>
                  <a
                     data-testid="pages-link"
                     href={menu[4].subcategories[5].subcategorylist[1].link}
                     className="option option-color w-100 py-1 m-1"
                  >
                     {menu[4].subcategories[5].subcategorylist[1].name}
                  </a>
                  <a
                     data-testid="pages-link"
                     href={menu[4].subcategories[5].subcategorylist[2].link}
                     className="option option-color w-100 py-1 m-1"
                  >
                     {menu[4].subcategories[5].subcategorylist[2].name}
                  </a>
               </div>

               {/* Column 3 */}
               <div className="d-flex col col-3 flex-column px-3">
                  <img
                     data-testid="pages-img"
                     src={menu[4].subcategories[2].image}
                     className="menu-img"
                     alt=""
                  />
                  <h5 className="mt-4 py-1 m-1 fw-bold">
                     {menu[4].subcategories[2].name}
                  </h5>
                  <a 
                     data-testid="pages-link"
                     href={menu[4].subcategories[2].subcategorylist[0].link}
                     className="option option-color w-100 py-1 m-1"
                  >
                     {menu[4].subcategories[2].subcategorylist[0].name}
                  </a>
                  <a
                     data-testid="pages-link"
                     href={menu[4].subcategories[2].subcategorylist[1].link}
                     className="option option-color w-100 py-1 m-1"
                  >
                     {menu[4].subcategories[2].subcategorylist[1].name}
                  </a>
                  <a 
                     data-testid="pages-link"
                     href={menu[4].subcategories[2].subcategorylist[2].link}
                     className="option option-color w-100 py-1 m-1"
                  >
                     {menu[4].subcategories[2].subcategorylist[2].name}
                  </a>
                  <h5 className="mt-4 py-1 m-1 fw-bold">
                     {menu[4].subcategories[6].name}
                  </h5>
                  <a
                     data-testid="pages-link"
                     href={menu[4].subcategories[6].subcategorylist[0].link}
                     className="option option-color w-100 d-flex justify-content-start align-items-center m-1"
                  >
                     {menu[4].subcategories[6].subcategorylist[0].name}
                     <div className="new-btn">New</div>
                  </a>
                  <a
                     data-testid="pages-link"
                     href={menu[4].subcategories[6].subcategorylist[1].link}
                     className="option option-color w-100 d-flex justify-content-start align-items-center m-1"
                  >
                     {menu[4].subcategories[6].subcategorylist[1].name}
                     <div className="new-btn">New</div>
                  </a>
                  <a
                     data-testid="pages-link"
                     href={menu[4].subcategories[6].subcategorylist[2].link}
                     className="option option-color w-100 d-flex justify-content-start align-items-center m-1"
                  >
                     {menu[4].subcategories[6].subcategorylist[2].name}
                     <div className="new-btn">New</div>
                  </a>
                  <a
                     data-testid="pages-link"
                     href={menu[4].subcategories[6].subcategorylist[3].link}
                     className="option option-color w-100 py-1 m-1"
                  >
                     {menu[4].subcategories[6].subcategorylist[3].name}
                  </a>
                  <a
                     data-testid="pages-link"
                     href={menu[4].subcategories[6].subcategorylist[4].link}
                     className="option option-color w-100 d-flex justify-content-start align-items-center m-1"
                  >
                     {menu[4].subcategories[6].subcategorylist[4].name}
                     <div className="new-btn">New</div>
                  </a>
               </div>

               {/* Column 4 */}
               <div className="d-flex col col-3 flex-column px-3">
                  <img
                     data-testid="pages-img"
                     src={menu[4].subcategories[3].image}
                     className="menu-img"
                     alt=""
                  />
                  <h5 className="mt-4 py-1 m-1 fw-bold">
                     {menu[4].subcategories[3].name}
                  </h5>
                  <a
                     data-testid="pages-link"
                     href={menu[4].subcategories[3].subcategorylist[0].link}
                     className="option option-color w-100 d-flex justify-content-start align-items-center m-1"
                  >
                     {menu[4].subcategories[3].subcategorylist[0].name}
                     <div className="new-btn">New</div>
                  </a>
                  <a
                     data-testid="pages-link"
                     href={menu[4].subcategories[3].subcategorylist[1].link}
                     className="option option-color w-100 d-flex justify-content-start align-items-center m-1"
                  >
                     {menu[4].subcategories[3].subcategorylist[1].name}
                     <div className="new-btn">New</div>
                  </a>
                  <a
                     data-testid="pages-link"
                     href={menu[4].subcategories[3].subcategorylist[2].link}
                     className="option option-color w-100 d-flex justify-content-start align-items-center m-1"
                  >
                     {menu[4].subcategories[3].subcategorylist[2].name}
                     <div className="new-btn">New</div>
                  </a>
                  <a
                     data-testid="pages-link"
                     href={menu[4].subcategories[3].subcategorylist[3].link}
                     className="option option-color w-100 d-flex justify-content-start align-items-center m-1"
                  >
                     {menu[4].subcategories[3].subcategorylist[3].name}
                     <div className="new-btn">New</div>
                  </a>
                  <a
                     data-testid="pages-link"
                     href={menu[4].subcategories[3].subcategorylist[4].link}
                     className="option option-color w-100 d-flex justify-content-start align-items-center m-1"
                  >
                     {menu[4].subcategories[3].subcategorylist[4].name}
                     <div className="new-btn">New</div>
                  </a>
                  <a
                     data-testid="pages-link"
                     href={menu[4].subcategories[3].subcategorylist[5].link}
                     className="option option-color w-100 d-flex justify-content-start align-items-center m-1"
                  >
                     {menu[4].subcategories[3].subcategorylist[5].name}
                     <div className="new-btn">New</div>
                  </a>
                  <a
                     data-testid="pages-link"
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
   );
}
