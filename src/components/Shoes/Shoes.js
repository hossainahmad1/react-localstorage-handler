import React from 'react';
import { add, multiply } from '../../utilities/caculate';

const shoes = () => {

    const first = 11;
    const second = 4;
    const result = multiply(first, second)
    const sum = add(first, second)
    return (
        <div style={{ backgroundColor: 'green', margin: '15px' }}>
            <h2>This is shoes company</h2>
            <p>Result: {result} and total: {sum} </p>
        </div>

    );
};


export default shoes;