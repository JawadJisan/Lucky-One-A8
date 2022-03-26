import React from 'react';

const Showname = (cart) => {
    const {car} = cart;
    console.log('From ITEMS:',cart)
    return (
        <div>
            <h5>{car}</h5>
        </div>
    );
};

export default Showname;