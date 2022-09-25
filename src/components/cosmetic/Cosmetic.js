import React from 'react';
import { addToDb, removeFromDb } from '../../utilities/fakedb';
import './Cosmetic.css'
const Cosmetic = (props) => {
    const { name, price, id } = props.cosmetic;

    const addToCart = (id) => {
        addToDb(id)
    }

    const removeFromCart = id => {
        removeFromDb(id)
        // console.log('removing', id);
    }


    // const addToCartWithPara = () => addToCart(id); //ata holo akta niom

    return (
        <div className='product'>
            <h2>Name : {name}</h2>
            <p>Only for: $ {price} </p>
            <p><small>it has id: {id}</small></p>
            {/* <button onClick={addToCartWithPara}>add to cart</button> <br /> */}
            <button onClick={() => addToCart(id)}>add to cart </button> <br />
            <button onClick={() => removeFromCart(id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;