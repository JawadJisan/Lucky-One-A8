import React from 'react';
import Showname from '../Showname/Showname';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    console.log(cart)

    let name = [];
    let id = [];
    for(const product of cart){
        name = name + product.name;
        id = [...id, product.id]
        
    }

    const chooseAgain = (remove) =>{
        console.log(remove)
        let newCart = []
        let cart = ['']
        
    }

    return (
        <div className='cart'>
               <h3>Selected Cars</h3>
                <p>{name}</p>
                
                <Showname keys={id} name={name} id={id}></Showname>


                <button className='btn'>Choose Your Car</button>
                <br></br>
                <button onClick={() => {chooseAgain(cart)}} className='btn'>Choose Again</button>

        </div>
    );
};

export default Cart;