import React, { useEffect, useState } from 'react';
import SingleServices from '../SingleServices/SingleServices';

const Services = () => {
    const [services, setServices] = useState([])
    // console.log(services)
    useEffect(() => {
        fetch('https://peaceful-coast-06734.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])


    return (
        <section className="services-container mt-5">
            <div className="pt-5 text-center">
                <h2>Welcome to Fixkar Quick Repair <br/> Provide Serivces</h2>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 mb-5 pt-5">
                {
                    services.map(service => <SingleServices service={service} key={service._id}></SingleServices>)
                }
            </div>
        </div>
        </section>
    );
};

export default Services;