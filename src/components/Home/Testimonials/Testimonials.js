import React from 'react';
import Testimonial from '../Testimonial/Testimonial';
import user1 from '../../../images/team1.jpg'
import user2 from '../../../images/team2.jpg'
import user3 from '../../../images/team3.jpg'

const testimonialData = [
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Wilson Harry',
        img : user1
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Ema Gomez',
        img : user2
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Aliza Farari',
        img : user3
    }
]

const Testimonials = () => {
    return (
        <section className="testimonials my-5 py-5">
           <div className="container">
               <div className="section-header">
                   <h5 className="text-primary text-uppercase">Testimonial</h5>
                   <h1>What Our Patients <br/> Says </h1>
               </div>
               <div className="row mt-5 d-flex justify-content-around">
                    {
                        testimonialData.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name}/>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Testimonials;