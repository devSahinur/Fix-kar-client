import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AllOrdersList = () => {
    return (
        <div className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 col-sm-12 col-12">
                    {/* <AppointmentsByDate appointments={appointments}></AppointmentsByDate> */}
                    <h2>This is all order lists</h2>
                </div>
        </div>
    );
};

export default AllOrdersList;