import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const SingleOrderData = ({order}) => {
    console.log(order.products.name)
    const deleteSinglePost =(id) => {
        fetch(`https://vast-ridge-55791.herokuapp.com/post/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            alert('deleted successfully')
        })

    }
    return (
        <tr>
            <td>{order.name}</td>
            <td>{order.email}</td>
            <td>{order.shipment.city}</td>
            <td>{order.shipment.country}</td>
            <td>{order.products.name}</td>
            <td>{order.paymentId}</td>
            <td>${order.products.price}</td>
            <td><EditIcon /><button onClick={() =>deleteSinglePost(order._id)}>< DeleteIcon /></button></td>
        </tr>
    );
};

export default SingleOrderData;