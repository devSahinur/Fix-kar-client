import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import SingleOrderData from '../SingleOrderData/SingleOrderData';

const AllOrdersList = () => {
    const [allOrder, setAllOrder] =useState([])
    useEffect(() => {
        fetch('https://peaceful-coast-06734.herokuapp.com/orders')
        .then(res => res.json()) 
        .then(data => setAllOrder(data))
    },[])
    return (
        <div className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 col-sm-12 col-12">
                    <div>
                        <table className="table costom-tablee table-borderless">
                            <thead>
                                <tr className="table-title">
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>City Name</th>
                                    <th>Country Name</th>
                                    <th>Service Name</th>
                                    <th>Transaction ID</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allOrder.map(order => <SingleOrderData key={order._id} order={order}></SingleOrderData>)
                                }
                                
                            </tbody>
                        </table>
                    </div>
                </div>
        </div>
    );
};

export default AllOrdersList;