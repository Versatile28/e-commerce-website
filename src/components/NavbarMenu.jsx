import React from 'react';
import { useState } from 'react';
import { Nav, Form } from 'react-bootstrap';
import { IoIosSearch } from 'react-icons/io';
import Home from './Home';
import Shop from './Shop';
import ProductCards from './ProductCards';
import Icons from './Icons';
import Pages from './Pages';
import Docs from './Docs';

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
            <Home menu={menu} toggleDropdown={toggleDropdown} activeDropdown={activeDropdown} closingDropdown={closingDropdown}/>
            <Shop menu={menu} toggleDropdown={toggleDropdown} activeDropdown={activeDropdown} closingDropdown={closingDropdown}/>
            <ProductCards menu={menu} toggleDropdown={toggleDropdown} activeDropdown={activeDropdown} closingDropdown={closingDropdown}/>
            <Icons menu={menu} toggleDropdown={toggleDropdown} activeDropdown={activeDropdown} closingDropdown={closingDropdown}/>
            <Pages menu={menu} toggleDropdown={toggleDropdown} activeDropdown={activeDropdown} closingDropdown={closingDropdown}/>
            <Docs menu={menu} toggleDropdown={toggleDropdown} activeDropdown={activeDropdown} closingDropdown={closingDropdown}/>
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
