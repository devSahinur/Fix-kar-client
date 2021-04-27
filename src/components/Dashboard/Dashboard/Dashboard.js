import React from 'react';
import Services from '../../Home/Services/Services';
import Sidebar from '../Sidebar/Sidebar';


const Dashboard = () => {
    return (
        <div className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 col-sm-12 col-12">
                    <Services></Services>
                </div>
        </div>
    );
};

export default Dashboard;