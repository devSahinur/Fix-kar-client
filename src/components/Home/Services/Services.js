import React from 'react';
import sink from '../../../images/basin.png'
import ac from '../../../images/air-conditioner.png'
import home from '../../../images/engineer.png'
import SingleServices from '../SingleServices/SingleServices';

const serviceData = [
    {
        name: 'Sink Repair',
        description: 'Garage Door Repair. Carpentry. Termite Damage Repairs. Tub and shower caulki. Doors. Fences',
        price: 150,
        img: sink
    },
    {
        name: 'AC Repair',
        description: 'Garage Door Repair. Carpentry. Termite Damage Repairs. Tub and shower caulki. Doors. Fences',
        price: 250,
        img: ac
    },
    {
        name: 'Home Repair',
        description: 'Garage Door Repair. Carpentry. Termite Damage Repairs. Tub and shower caulki. Doors. Fences',
        price: 300,
        img: home
    }
]
const Services = () => {
    return (
        <section className="services-container mt-5">
            <div className="pt-5 text-center">
                <h2>Welcome to Fixkar Quick Repair <br/> Provide Serivces</h2>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 mb-5 pt-5">
                {
                    serviceData.map(service => <SingleServices service={service} key={service.name}></SingleServices>)
                }
            </div>
        </div>
        </section>
    );
};

export default Services;