import React from 'react'
import {
   Offcanvas,
} from 'react-bootstrap';

export default function Cart({ showCart, setShowCart, handleCartClose }) {
  return (
    <div>
      <Offcanvas
               className="overflow-auto d-none d-md-flex d-flex justify-content-start align-items-center w-40"
               show={showCart}
               onHide={handleCartClose}
               placement="end"
               name="end"
            >
               <div className="w-100 px-5">
                  <Offcanvas.Header closeButton></Offcanvas.Header>
                  {/* <Offcanvas.Title className="fw-bold pb-5">
                     Varkala
                  </Offcanvas.Title> */}
                  <Offcanvas.Title className="pb-3">Home</Offcanvas.Title>
                  <Offcanvas.Title className="pb-3">Link</Offcanvas.Title>
                  <Offcanvas.Title className="pb-3">Disabled</Offcanvas.Title>
                  <Offcanvas.Title>
                  </Offcanvas.Title>
                  <Offcanvas.Title className="text-secondary fw-normal fs-6">
                     Samsa was a travelling salesman - and above it there hung a
                     picture that he had recently cut out of an illustrated
                     magazine and housed in a nice, gilded frame.
                  </Offcanvas.Title>
               </div>
            </Offcanvas>
    </div>
  )
}
