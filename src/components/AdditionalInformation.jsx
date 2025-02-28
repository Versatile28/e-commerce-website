import React from 'react';
import { Container } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function AdditionalInformation() {
   return (
      <Container>
         <Tabs
            defaultActiveKey="home"
            transition={false}
            id="noanim-tab-example"
            className="mb-3"
         >
            <Tab
               eventKey="desc"
               title="Description"
               className="d-flex row py-4 px-3"
            >
               <div className="col-7">
                  <h5 className="fw-bold">About</h5>
                  <p className="text-mute">
                     Samsa was a travelling salesman - and above it there hung a
                     picture that he had recently cut out of an illustrated
                     magazine and housed in a nice, gilded frame.
                     <br />
                     <br />
                     He must have tried it a hundred times, shut his eyes so
                     that he wouldn't have to look at the floundering legs, and
                     only stopped when he began to feel a mild, dull pain there
                     that he had never felt before.
                  </p>
                  <h5 className="fw-bold">You will love</h5>
                  <ul className="description text-mute">
                     <li>He must have tried it a hundred times</li>
                     <li>shut his eyes so that he wouldn't have to look</li>
                     <li>at the floundering legs, and only stopped</li>
                  </ul>
               </div>
               <img className="col-5" src="images/detail-1-gray.jpg" alt="" />
            </Tab>
            <Tab
               eventKey="info"
               title="Additional Information"
               className="d-flex row py-4"
            >
               <div className='col-2 d-flex flex-column'>
                  <span className='p-2 fs-8'>Product #</span>
                  <span className='p-2 fs-8'>Available packaging</span>
                  <span className='p-2 fs-8'>Weight</span>
                  <span className='p-2 fs-8'>I am at fault.</span>
               </div>
               <div className='col-4 d-flex flex-column'>
                  <span className='text-mute p-2 fs-8'>Hello, it's a lot of pain.</span>
                  <span className='text-mute p-2 fs-8'>LOL But now I feel pain in reproaching.</span>
                  <span className='text-mute p-2 fs-8'>It's painful.</span>
                  <span className='text-mute p-2 fs-8'>Hello, it's a lot of pain.</span>
               </div>
               <div className='col-2 d-flex flex-column'>
                  <span className='p-2 fs-8'>Weight</span>
                  <span className='p-2 fs-8'>I am at fault.</span>
                  <span className='p-2 fs-8'>Product #</span>
                  <span className='p-2 fs-8'>Available packaging</span>
               </div>
               <div className='col-4 d-flex flex-column'>
                  <span className='text-mute p-2 fs-8'>It's painful.</span>
                  <span className='text-mute p-2 fs-8'>Hello, it's a lot of pain.</span>
                  <span className='text-mute p-2 fs-8'>Hello, it's a lot of pain.</span>
                  <span className='text-mute p-2 fs-8'>LOL But now I feel pain in reproaching.</span>
               </div>
            </Tab>
            <Tab eventKey="reviews" title="Reviews">
               Reviews
            </Tab>
         </Tabs>
      </Container>
   );
}
