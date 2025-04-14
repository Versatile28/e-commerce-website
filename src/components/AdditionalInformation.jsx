import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { FaStar } from 'react-icons/fa';

export default function AdditionalInformation({ product }) {
   const [formData, setFormData] = useState({
      name: '',
      rating: '5',
      email: '',
      review: '',
   });

   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form Submitted:', formData);
   };
   return (
      <Container>
         <Tabs
            defaultActiveKey="desc"
            transition={false}
            id="noanim-tab-example"
            className="mb-3 info-container"
         >
            <Tab eventKey="desc" title="Description">
               <div className="d-flex flex-md-row flex-column row py-4 px-3">
                  <div className="col-md-7 col-12">
                     <h5 className="fw-bold">About</h5>
                     <p className="text-mute">
                        Samsa was a travelling salesman - and above it there
                        hung a picture that he had recently cut out of an
                        illustrated magazine and housed in a nice, gilded frame.
                        <br />
                        <br />
                        He must have tried it a hundred times, shut his eyes so
                        that he wouldn't have to look at the floundering legs,
                        and only stopped when he began to feel a mild, dull pain
                        there that he had never felt before.
                     </p>
                     <h5 className="fw-bold">You will love</h5>
                     <ul className="description text-mute">
                        <li>He must have tried it a hundred times</li>
                        <li>shut his eyes so that he wouldn't have to look</li>
                        <li>at the floundering legs, and only stopped</li>
                     </ul>
                  </div>
                  <img
                     className="col-5 image-styles"
                     src={product.image}
                     alt={product.name}
                  />
               </div>
            </Tab>
            <Tab eventKey="info" title="Additional Information">
               <div className="d-flex row py-4">
                  <div className="col-lg-2 col-6 d-flex flex-column">
                     <span className="p-2 fs-8">Product #</span>
                     <span className="p-2 fs-8">Available packaging</span>
                     <span className="p-2 fs-8">Weight</span>
                     <span className="p-2 fs-8">I am at fault.</span>
                  </div>
                  <div className="col-lg-4 col-6 d-flex flex-column">
                     <span className="text-mute p-2 fs-8">
                        Hello, it's a lot of pain.
                     </span>
                     <span className="text-mute p-2 fs-8">
                        LOL But now I feel pain in reproaching.
                     </span>
                     <span className="text-mute p-2 fs-8">It's painful.</span>
                     <span className="text-mute p-2 fs-8">
                        Hello, it's a lot of pain.
                     </span>
                  </div>
                  <div className="col-lg-2 col-6 d-flex flex-column">
                     <span className="p-2 fs-8">Weight</span>
                     <span className="p-2 fs-8">I am at fault.</span>
                     <span className="p-2 fs-8">Product #</span>
                     <span className="p-2 fs-8">Available packaging</span>
                  </div>
                  <div className="col-lg-4 col-6 d-flex flex-column">
                     <span className="text-mute p-2 fs-8">It's painful.</span>
                     <span className="text-mute p-2 fs-8">
                        Hello, it's a lot of pain.
                     </span>
                     <span className="text-mute p-2 fs-8">
                        Hello, it's a lot of pain.
                     </span>
                     <span className="text-mute p-2 fs-8">
                        LOL But now I feel pain in reproaching.
                     </span>
                  </div>
               </div>
            </Tab>
            <Tab eventKey="reviews" title="Reviews">
               <div className="d-flex row py-4 px-3">
                  <div className="d-flex p-3">
                     <div className="review d-flex">
                        <div className="text-center me-4 me-xl-5 d-flex flex-column">
                           <div className="avatar avatar-xl p-2 mb-2">
                              <div className="position-relative overflow-hidden rounded-circle h-100 d-flex align-items-center justify-content-center">
                                 <img
                                    alt="Han Solo"
                                    src="/images/person-1.webp"
                                    width={96}
                                    height={96}
                                    className="rounded-circle"
                                 />
                              </div>
                           </div>
                           <span className="text-uppercase text-mute ls-3">
                              Dec 2018
                           </span>
                        </div>
                        <div className="w-60 w">
                           <h5 className="mt-2 mb-1 fw-bold fs-5">Han Solo</h5>
                           <div className="my-2">
                              {[...Array(5)].map((_, index) => (
                                 <FaStar
                                    key={index}
                                    className={
                                       index < 5
                                          ? 'text-warning fa-xs'
                                          : 'star-bg-color fa-xs'
                                    }
                                 />
                              ))}
                           </div>
                           <p className="text-mute">
                              One morning, when Gregor Samsa woke from troubled
                              dreams, he found himself transformed in his bed
                              into a horrible vermin. He lay on his armour-like
                              back, and if he lifted his head a little he could
                              see his brown belly, slightly domed and divided by
                              arches into stiff sections.
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="d-flex p-3">
                     <div className="review d-flex">
                        <div className="text-center me-4 me-xl-5 d-flex flex-column">
                           <div className="avatar avatar-xl p-2 mb-2">
                              <div className="position-relative overflow-hidden rounded-circle h-100 d-flex align-items-center justify-content-center">
                                 <img
                                    alt="Luke Skywalker"
                                    src="/images/person-2.webp"
                                    width={96}
                                    height={96}
                                    className="rounded-circle"
                                 />
                              </div>
                           </div>
                           <span className="text-uppercase text-mute ls-3">
                              Dec 2018
                           </span>
                        </div>
                        <div className="w-60">
                           <h5 className="mt-2 mb-1 fw-bold fs-5">
                              Luke Skywalker
                           </h5>
                           <div className="my-2">
                              {[...Array(5)].map((_, index) => (
                                 <FaStar
                                    key={index}
                                    className={
                                       index < 4
                                          ? 'text-warning fa-xs'
                                          : 'star-bg-color fa-xs'
                                    }
                                 />
                              ))}
                           </div>
                           <p className="text-mute">
                              The bedding was hardly able to cover it and seemed
                              ready to slide off any moment. His many legs,
                              pitifully thin compared with the size of the rest
                              of him, waved about helplessly as he looked.
                              &quot;What's happened to me?&quot; he thought. It
                              wasn't a dream.
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="d-flex p-3">
                     <div className="review d-flex">
                        <div className="text-center me-4 me-xl-5 d-flex flex-column">
                           <div className="avatar avatar-xl p-2 mb-2">
                              <div className="position-relative overflow-hidden rounded-circle h-100 d-flex align-items-center justify-content-center">
                                 <img
                                    alt="Princess Leiar"
                                    src="/images/person-3.webp"
                                    width={96}
                                    height={96}
                                    className="rounded-circle"
                                 />
                              </div>
                           </div>
                           <span className="text-uppercase text-mute ls-3">
                              Dec 2018
                           </span>
                        </div>
                        <div className="w-60 w">
                           <h5 className="mt-2 mb-1 fw-bold fs-5">
                              Princess Leia
                           </h5>
                           <div className="my-2">
                              {[...Array(5)].map((_, index) => (
                                 <FaStar
                                    key={index}
                                    className={
                                       index < 3
                                          ? 'text-warning fa-xs'
                                          : 'star-bg-color fa-xs'
                                    }
                                 />
                              ))}
                           </div>
                           <p className="text-mute">
                              His room, a proper human room although a little
                              too small, lay peacefully between its four
                              familiar walls. A collection of textile samples
                              lay spread out on the table.
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="d-flex p-3">
                     <div className="review d-flex">
                        <div className="text-center me-4 me-xl-5 d-flex flex-column">
                           <div className="avatar avatar-xl p-2 mb-2">
                              <div className="position-relative overflow-hidden rounded-circle h-100 d-flex align-items-center justify-content-center">
                                 <img
                                    alt="Jabba Hut"
                                    src="/images/person-4.webp"
                                    width={96}
                                    height={96}
                                    className="rounded-circle"
                                 />
                              </div>
                           </div>
                           <span className="text-uppercase text-mute ls-3">
                              Dec 2018
                           </span>
                        </div>
                        <div className="w-60 w">
                           <h5 className="mt-2 mb-1 fw-bold fs-5">Jabba Hut</h5>
                           <div className="my-2">
                              {[...Array(5)].map((_, index) => (
                                 <FaStar
                                    key={index}
                                    className={
                                       index < 5
                                          ? 'text-warning fa-xs'
                                          : 'star-bg-color fa-xs'
                                    }
                                 />
                              ))}
                           </div>
                           <p className="text-mute">
                              Samsa was a travelling salesman - and above it
                              there hung a picture that he had recently cut out
                              of an illustrated magazine and housed in a nice,
                              gilded frame.
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="py-5 px-3 w-5">
                     <h5 className="mb-4 fw-bold ls-half">Leave a review</h5>
                     <form className="mb-4 form" onSubmit={handleSubmit}>
                        <div className="row">
                           <div className="col-sm-6">
                              <div className="mb-4">
                                 <label
                                    className="form-label review-form-label ls-1"
                                    htmlFor="name"
                                 >
                                    Your name *
                                 </label>
                                 <input
                                    name="name"
                                    placeholder="Enter your name"
                                    required
                                    type="text"
                                    id="name"
                                    autoComplete='name'
                                    className="form-control review-form-items"
                                    value={formData.name}
                                    onChange={handleChange}
                                 />
                              </div>
                           </div>

                           <div className="col-sm-6">
                              <div className="mb-4">
                                 <label
                                    className="form-label review-form-label ls-1"
                                    htmlFor="rating"
                                 >
                                    Your rating *
                                 </label>
                                 <select
                                    name="rating"
                                    className="focus-shadow-0 form-select review-form-items"
                                    id="rating"
                                    value={formData.rating}
                                    onChange={handleChange}
                                 >
                                    <option value="5">★★★★★ (5/5)</option>
                                    <option value="4">★★★★☆ (4/5)</option>
                                    <option value="3">★★★☆☆ (3/5)</option>
                                    <option value="2">★★☆☆☆ (2/5)</option>
                                    <option value="1">★☆☆☆☆ (1/5)</option>
                                 </select>
                              </div>
                           </div>
                        </div>

                        <div className="mb-4">
                           <label
                              className="form-label review-form-label ls-1"
                              htmlFor="email"
                           >
                              Your email *
                           </label>
                           <input
                              name="email"
                              placeholder="Enter your email"
                              required
                              type="email"
                              id="email"
                              autoComplete='email'
                              className="form-control review-form-items"
                              value={formData.email}
                              onChange={handleChange}
                           />
                        </div>

                        <div className="mb-4">
                           <label
                              className="form-label review-form-label ls-1"
                              htmlFor="review"
                           >
                              Review text *
                           </label>
                           <input
                              rows="4"
                              name="review"
                              placeholder="Enter your review"
                              required
                              id="review"
                              className="form-control review-form-items"
                              value={formData.review}
                              onChange={handleChange}
                           />
                        </div>

                        <button
                           type="submit"
                           className="form-submit btn btn-outline-dark"
                        >
                           POST REVIEW
                        </button>
                     </form>

                     <p className="text-muted text-sm">
                        <span className="badge text-info bg-info-light">
                           Note
                        </span>{' '}
                        This form shows usage of the classic Bootstrap form
                        controls, not their underlined variants. You can choose
                        whichever variant you want.
                     </p>
                  </div>
               </div>
            </Tab>
         </Tabs>
      </Container>
   );
}
