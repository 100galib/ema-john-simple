import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    let total = 0;
    let shipping = 0;
    for( const product of cart){
        total = total + product.price
        shipping = shipping + product.shipping
    }
    const tax = (total * 0.1).toFixed(2);
    const grandTotal = total + shipping + parseFloat(tax);
    return (
        <div className='cart'>
            <h2 className='header'>Order Product</h2>
            <h4>Product Added: {cart.length}</h4>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax}</p>

            <p className='grand'>Grand Total: ${grandTotal}</p>
        </div>
    );
};

export default Cart;