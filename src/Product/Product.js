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
                <h2>Name: {name} </h2>
                <p>Price: ${price} </p>
                <p>Max Power: {maxpower} </p>
                <p>Top Speed: {topspeed} </p>
            </div>
            <div className='add-to-cart'>
        <button onClick={() => props.handleAddToCart(props.gun)}>
          <BsFillCartFill className='icon' />
        </button>
        <h1>Add to Cart</h1>
      </div>
        </div>
    );
};

export default Product;