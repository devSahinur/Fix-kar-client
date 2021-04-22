import React from 'react';
import { faCogs, faHammer } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './WhyChoose.css'


const WhyChoose = () => {
    return (
        <section className="why-choose">
            <div className='card-why row'>
                <div class="col-md-7 d-flex flex-column">
                    <div class="why-title p-2">
                        <h1 className='title-why'>Why Choose Us?</h1>
                        <p>We do fast phone repair. In most cases, technicians will be able to repair your device in just minutes, we’ll normally get your</p>
                    </div>
                    <div class="d-flex pt-5 p-2">
                        <div className='col-md-2 why-icon'><FontAwesomeIcon className="info-icon" icon={faCogs}></FontAwesomeIcon></div>
                        <div className='col-md-10'>
                            <h3 className='title-' >Free Diagnostics</h3>
                            <p>When your phone breaks, you don’t want it fixed tomorrow—you need it fixed today.</p>
                        </div>
                    </div>
                    <div class="d-flex pt-5 p-2">
                        <div className='col-md-2 why-icon'><FontAwesomeIcon className="info-icon" icon={faHammer}></FontAwesomeIcon></div>
                        <div className='col-md-10'>
                            <h3>Quick Repair Process</h3>
                            <p>When your phone breaks, you don’t want it fixed tomorrow—you need it fixed today.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                </div>
               
            </div>
        </section>
    );
};

export default WhyChoose;