import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Selectedcars from '../Selectedcars/Selectedcars';
import './Cart.css'

const Cart = () => {

    const[products, setproducts] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setproducts(data))
    },[])

    return (
        <div className='cart-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
            <div className='container-cart'>
            <h1>Selected Cars</h1>
            <Selectedcars></Selectedcars>

            </div>
        </div>
    );
};

export default Cart;