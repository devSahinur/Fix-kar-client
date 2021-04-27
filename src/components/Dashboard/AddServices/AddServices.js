import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';

const AddServices = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [imageURL, setImageURL] = useState(null);
    // const [post, setPost] = useState(false);

      const onSubmit = data => {
          const eventData = {
              name: data.servicesName,
              description: data.description,
              price: data.price,
              imageURL: imageURL
          };
          const url =`https://peaceful-coast-06734.herokuapp.com/addServices`;
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

    // This Code image link generator Start
    const handleImageUpload = event => {
        // console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '701a71fc100ddc2599c9438b268fee30')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
      }

    return (
        <div className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 col-sm-12 col-12">
                    <form   onSubmit={handleSubmit(onSubmit)} >
                    <h1 className="addTitle mx-auto"><strong>Add</strong> Services</h1>
                    <div className="form-group">
                        <label for="title"> Services Name </label>
                        <br/>
                        <input type="text" placeholder="Enter Services Name" {...register("servicesName")} name="servicesName" id="title" className="form-controll"/>
                    </div>
                    <div className="form-group">
                        <label for="caption">Description </label>
                        <br/>
                        <input type="text" placeholder="Enter Description" {...register("description")} name="description" id="caption" className="form-controll"/>
                    </div>
                    <div className="form-group">
                        <label for="caption">Price</label>
                        <br/>
                        <input type="number" placeholder="Enter Price" {...register("price")} name="price" id="caption" className="form-controll"/>
                    </div>
                    <div className="form-group">
                        <label for="images">Services <span>Icon Image</span></label>
                        <br/>
                        <input className="form-controll" name="img" type="file" onChange={handleImageUpload} />
                    </div>
                    <div className="post-btn form-group">
                    <br/>
                        <button type="submit">Post</button>
                    </div>
                    
                </form>
                </div>
        </div>
    );
};

export default AddServices;