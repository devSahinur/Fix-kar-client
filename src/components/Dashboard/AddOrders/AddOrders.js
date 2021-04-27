import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const AddOrders = () => {
    const {id} = useParams();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [order, setOrder] = useState([])
    console.log(id);

    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setOrder(data))
    },[])

    const onSubmit = data => {
        console.log(data);
        // const eventData = {
        //     name: data.servicesName,
        //     description: data.description,
        //     price: data.price,
        //     imageURL: imageURL
        // };
        // const url =`http://localhost:5000/addServices`;
        // console.log(eventData);
        // fetch(url,{
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(eventData)
        // })
        // .then(res => console.log('Server side response', res))
    };

    const orders = order.find(pd=> pd._id === id);
    console.log(orders);



    return (
        <div className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 col-sm-12 col-12">
                    <form   onSubmit={handleSubmit(onSubmit)} >
                    <h1 className="addTitle mx-auto"><strong>Add</strong> Order Page</h1>
                    <div className="form-group">
                        <label for="title"> Name </label>
                        <br/>
                        <input type="text" placeholder="Enter Your Name" {...register("name")} name="name" id="title" className="form-controll"/>
                    </div>
                    <div className="form-group">
                        <label for="title"> Email </label>
                        <br/>
                        <input type="email" placeholder="Enter Your Email" {...register("email")} name="email" id="title" className="form-controll"/>
                    </div>
                    <div className="form-group">
                        <label for="title"> City </label>
                        <br/>
                        <input type="text" placeholder="Enter Your City" {...register("city")} name="city" id="title" className="form-controll"/>
                    </div>
                    <div className="form-group">
                        <label for="caption">Country </label>
                        <br/>
                        <input type="text" placeholder="Enter Your Country" {...register("country")} name="country" id="caption" className="form-controll"/>
                    </div>
                    <div className="form-group">
                        <label for="caption">Service Name </label>
                        <br/>
                        <input type="text" placeholder="Enter Your Service" {...register("service")} name="service" id="caption" className="form-controll"/>
                    </div>
                    <div className="form-group">
                        <label for="caption">Price</label>
                        <br/>
                        <input type="number" placeholder="Enter Price" {...register("price")} name="price" id="caption" className="form-controll"/>
                    </div>
                    <div className="post-btn form-group">
                    <br/>
                        <button type="submit">Next</button>
                    </div>
                    
                </form>
                </div>
        </div>
    );
};

export default AddOrders;