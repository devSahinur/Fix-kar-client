import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import { Controller, useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';

const AddTestimonial = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit,formState: { errors } } = useForm();

  const onSubmit = data => {
    const eventData = {
        name: data.name,
        post: data.post,
        email: loggedInUser.email,
        img: loggedInUser.img
    };
    const url =`https://peaceful-coast-06734.herokuapp.com/addTestimonial`;
          console.log(eventData);
          fetch(url,{
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(eventData)
          })
          .then(res => console.log('Server side response', res))
    
    };

    return (
        <div className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 col-sm-12 col-12">
                <h5 className="text-brand">Add Review</h5>
                <img src={loggedInUser.img} width="200px" alt=""/>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="Enter Name"  defaultValue={loggedInUser.name} {...register("name")} />
                    <br/>
                    <br/>
                    <input placeholder="Enter Review"  {...register("post")} />
                    <br/>
                    <input type="submit" />
                </form>
                </div>
        </div>
    );
};

export default AddTestimonial;