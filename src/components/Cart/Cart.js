import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    console.log(cart)

    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
    }

    return (
        <div className='cart'>
               <h3>Selected Cars</h3>
                <p>Name:{quantity}</p>


                <p>Selected Items:{quantity}</p>



                <button className='btn'>Choose Your Car</button>
                <br></br>
                <button className='btn'>Choose Again</button>

        </div>
    );
};

export default Cart;