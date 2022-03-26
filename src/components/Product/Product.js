import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'


const Product = (props) => {
    // console.log(props)
    // const {product ,handleAddToCart} = props;
    const {name, img, price, maxpower, topspeed } = props.product;

    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className='product-info'>
            <p className='product-name'>{name} </p>
            <p>Price:{price} </p>
            <p>Max Power: {maxpower} </p>
            <p>Top Speed: {topspeed} </p>
            </div>
            


            <button  onClick={()=> props.handleAddToCart(props.product)} className='btn-cart'>
            
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;