import React, { useState } from 'react';
import { useEffect } from 'react';
import Testimonial from '../Testimonial/Testimonial';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([])
    // console.log(testimonials)
    useEffect(() => {
        fetch('https://peaceful-coast-06734.herokuapp.com/testimonial')
        .then(res => res.json())
        .then(data => setTestimonials(data))
    },[])
    return (
        <section className="testimonials my-5 py-5">
           <div className="container">
               <div className="section-header">
                   <h5 className="text-primary text-uppercase">Testimonial</h5>
                   <h1>What Our Patients <br/> Says </h1>
               </div>
               <div className="row mt-5 d-flex justify-content-around">
                    {
                        testimonials.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial._id}/>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Testimonials;