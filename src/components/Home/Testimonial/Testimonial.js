import React from 'react';

const Testimonial = (props) => {
    const {quote,name,img} = props.testimonial;
    return (
        <div className=" col-md-3 card shadow-sm">
            <div className="card-body">
                <p className="card-text text-center">{quote}</p>
            </div>
            <div className="card-footer d-flex  align-items-center">
                <img className="rounded-circle mx-3" src={img} alt="" width="60"/>
                <div>
                    <h6 className="text-primary">{name}</h6>
                </div>
            </div>
       </div>
    );
};

export default Testimonial;