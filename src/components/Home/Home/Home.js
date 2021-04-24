import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import AboutUs from '../AboutUs/AboutUs';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Team from '../Team/Team';
import Testimonials from '../Testimonials/Testimonials';
import WhyChoose from '../WhyChoose/WhyChoose';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <AboutUs></AboutUs>
            <Testimonials></Testimonials>
            <WhyChoose></WhyChoose>
            <Team></Team>
            <Footer></Footer>
        </div>
    );
};

export default Home;
