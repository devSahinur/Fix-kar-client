import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';
// import SimpleCardForm from './SimpleCardForm';
// import SplitCardForm from './SplitCardForm';

const stripePromise = loadStripe('pk_test_51IgBwYDoq8MUJpFpnvUvT418eBoYVzW8h7eCHIWqxwMe6KqZWMQbJAO9HYHLIPuS0XAhezWpsobEGAYxCxj1imju00gTfbkx7r');


const ProcessPayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
             <SimpleCardForm handlePayment={handlePayment}></SimpleCardForm>
        </Elements>
    );
};

export default ProcessPayment;