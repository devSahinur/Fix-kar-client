import React from 'react';
import { Link } from 'react-router-dom';
import './SingleServices.css'

const SingleServices = ({service}) => {
    return (
        <div className="service-card mb-5 col-md-4 text-center">
            <img style={{height: '80px'}} src={service.img} alt="" />
            <h5 className="mt-3 mb-3">{service.name}</h5>
            <h5 className="mt-3 mb-3">${service.price}</h5>
            <p className="text-secondary">{service.description}</p>
            <Link className='order-btn' to='/login'>Order Now</Link>
        </div>
    );
};

export default SingleServices;