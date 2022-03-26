import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Selectedcars from '../Selectedcars/Selectedcars';
import { addToDb, getStoredcart } from '../utilities/database';
import './Cart.css'

const Cart = () => {

    const[products, setproducts] = useState([]);
    const [selectedCars, setSelectedCars] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setproducts(data))
    },[])

    useEffect(()=>{
        // const storedCart = getStoredcart();
        const storedCart = getStoredcart();
        const saveCart = [];

        for (const id in storedCart) {
            const addedProduct = products.find(product=>product.id === id)
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct)
            }
        }
        setSelectedCars(saveCart);

    },[products])


    const handleAddToCart = (selectedCars) =>{
        console.log(selectedCars);
        let newCart = [];
        const isExist = selectedCars.find(car => car.id === selectedCars.id);
        if(!isExist){
            selectedCars.quantity =1;
            newCart = [...selectedCars, selectedCars]
        }
        else{
            const rest = selectedCars.filter(car => car.id !== selectedCars.id)
            isExist.quantity = isExist.quantity + 1;
            newCart = [...rest, isExist];
        }
        setSelectedCars(newCart);
        addToDb(selectedCars.id)

    }

    return (
        <div className='cart-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product key={product.id} product={product}
                    handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className='container-cart'>
            <Selectedcars selectedCars={selectedCars}>

            </Selectedcars>

            </div>
        </div>
    );
};

export default Cart;