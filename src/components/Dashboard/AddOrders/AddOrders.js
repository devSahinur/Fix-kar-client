import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddOrders = () => {
    return (
        <div className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 col-sm-12 col-12">
                    <h1>add order page</h1>
                </div>
        </div>
    );
};

export default AddOrders;