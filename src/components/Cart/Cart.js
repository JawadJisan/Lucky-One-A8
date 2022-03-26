import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart, name} = props;
    console.log('this is the name',name)

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = (total * 0.1).toFixed(2);
    // const taxs = tax.toFixed(2);
    const grandTotal = total + shipping +parseFloat(tax);

    return (
        <div className='cart'>
               <h3>Selected Cars</h3>
                <p>Name:{quantity}</p>


                <p>Selected Items:{quantity}</p>


                {/* <p>Total Price: ${total} </p>
                <p>Total Shipping: ${shipping} </p>
                <p>Tax: ${tax}</p>
                <p>Grand Total: ${grandTotal.toFixed(2)}</p> */}

                <button>Choose Your Car</button><br></br>
                <button>Choose Again</button>

        </div>
    );
};

export default Cart;