import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderMain.css'

const HeaderMain = () => {
    return (
        <main style={{height:'400px'}} className="row d-flex align-items-center">
            <div className="col-md-4 header-text offset-md-1">
                <h5>Deliver professional construction</h5>
                <h1>Renovating Homes <br/>and Offices</h1>
                <p>Consectetur Lorem ipsum dolor sit amet adipisicing elit. Id eligendi doloremque <br/> consequatur, aperiam blanditiis ea!</p>
                <Link className='find-btn' >FIND OUT MORE</Link>
            </div>
            <div className="col-md-6">
                {/* <img src={chair} alt="" className="img-fluid"/> */}
            </div>
        </main>
    );
};

export default HeaderMain;