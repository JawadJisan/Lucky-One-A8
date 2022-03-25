import React from 'react';
import './Product.css'
import { BsFillCartFill } from "react-icons/bs";


const Product = (props) => {
    console.log(props.product);
    const{img, name, price, maxpower, topspeed} = props.product;

    return (
        <div className='product'>
            <img src={img} ></img>
            <div className='product-info'>
                <h2 className='product-name'>Name: {name} </h2>
                <p>Price: ${price} </p>
                <p>Max Power: {maxpower} </p>
                <p>Top Speed: {topspeed} </p>
            </div>
            
            <button  onClick={()=> props.handleAddToCart(props.product)} className='btn-cart'>

                <p className='btn-text'>Add to Cart</p>
                <BsFillCartFill className='icon' />
            </button>
        </div>
    );
};

export default Product;