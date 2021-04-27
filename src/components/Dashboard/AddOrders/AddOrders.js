import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import ProcessPayment from '../ProcessPayment/ProcessPayment';

const AddOrders = () => {
    const {id} = useParams();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [order, setOrder] = useState([])
    const [shippingData, setSippingData] = useState(null)
    console.log(shippingData);

    useEffect(() => {
        fetch('https://peaceful-coast-06734.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setOrder(data))
    },[])

    const orders = order.find(pd=> pd._id === id);

    const onSubmit = data => {
        setSippingData(data);
    };

    const handlePaymentSuccess = (paymentId) => {
        // const savedCart = getDatabaseCart();
        const orderDetails ={
          ...loggedInUser,
          products: orders,
          shipment: shippingData,
          paymentId,
          orderTime: new Date()
        };
        console.log(orderDetails)
        fetch('https://peaceful-coast-06734.herokuapp.com/addOrder',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(orderDetails)
        })
        .then(res => res.json())
        .then(data =>{
          if(data){
            // processOrder();
            alert('Order added successfully');
          }
        })
      }

    


    return (
        <div className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 col-sm-12 col-12">
                    <div className="row">
                        <div style={{display: shippingData ? 'none' : 'block'}} className=" p-5 col-md-6">
                        <form   onSubmit={handleSubmit(onSubmit)} >
                            <h1 className="addTitle mx-auto"><strong>Add</strong> Order Page</h1>
                            <div className="form-group">
                                <label for="title"> Name </label>
                                <br/>
                                <input type="text"  defaultValue={loggedInUser.name} placeholder="Enter Your Name" required {...register("name")} name="name" id="title" className="form-controll"/>
                            </div>
                            <div className="form-group">
                                <label for="title"> Email </label>
                                <br/>
                                <input type="email" defaultValue={loggedInUser.email} placeholder="Enter Your Email" required {...register("email")} name="email" id="title" className="form-controll"/>
                            </div>
                            <div className="form-group">
                                <label for="title"> City </label>
                                <br/>
                                <input type="text" placeholder="Enter Your City" {...register("city")} name="city" required id="title" className="form-controll"/>
                            </div>
                            <div className="form-group">
                                <label for="caption">Country </label>
                                <br/>
                                <input type="text" defaultValue='Bangladesh' placeholder="Enter Your Country" required {...register("country")} name="country" id="caption" className="form-controll"/>
                            </div>
                            <div className="form-group">
                                <label for="caption">Service Name </label>
                                <br/>
                                <input type="text" defaultValue={orders?.name} placeholder="Enter Your Service" required {...register("service")} name="service" id="caption" className="form-controll"/>
                            </div>
                            <div className="form-group">
                                <label for="caption">Price</label>
                                <br/>
                                <input type="number" defaultValue={orders?.price} placeholder="Enter Price" required {...register("price")} name="price" id="caption" className="form-controll"/>
                            </div>
                            <div className="post-btn form-group">
                            <br/>
                                <button type="submit">Next</button>
                            </div>
                        </form>
                        </div>
                        <div style={{display: shippingData ? 'block' : 'none'}} className="p-5 payme col-md-6">
                            <h1>Please Pay for me</h1>
                            <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default AddOrders;