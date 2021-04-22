import React from 'react';
import AboutPic from '../../../images/about.jpg'
import './AboutUs.css'

const AboutUs = () => {
    return (
        <section className='about-container'>
            <div className="row">
                <div className="col-md-6">
                    <img className="about-img img-fluid m-5" src={AboutPic} alt=""/>
                </div>
                <div className=" about-text mt-5 col-md-6">
                    <h1>About Us</h1>
                    <h4>Save time, Save money, With Quality Service, Purchase</h4>
                    <p>We do fast phone repair. In most cases, technicians will be able to repair your device in just minutes, we’ll nor mally get your phone in and out in 45 minutes or less il We do fast phone repair.</p>
                    <button>CONTACT US</button>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;