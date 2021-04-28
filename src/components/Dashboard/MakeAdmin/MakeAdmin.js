import axios from 'axios';
import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        axios.post('https://peaceful-coast-06734.herokuapp.com/addAdmin', data)
            .then(res => res.data && alert("Successfully Added"))
            .catch(error => console.log(error));
    }
    return (
        <div className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 col-sm-12 col-12">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <div className="p-5 mx-md-5 mt-5 bg-white" style={{ borderRadius: "15px", maxWidth: '85rem' }}>
                        <Form.Label style={{ fontWeight: "bold" }}>Email</Form.Label>
                        <Form.Row>
                            <Form.Group as={Col} xs="auto" style={{ width: '25rem' }} >
                                <Form.Control
                                    className="shadow-none"
                                    type="text"
                                    {...register("email", { required: true })}
                                    placeholder="Email Address" />
                            </Form.Group>
                            <Form.Group as={Col} xs="auto">
                                <Button type="submit" className="shadow-none">
                                    Submit
                            </Button>
                            </Form.Group>
                        </Form.Row>
                    </div>
                </Form>
                </div>
            </div>
    );
};

export default MakeAdmin;