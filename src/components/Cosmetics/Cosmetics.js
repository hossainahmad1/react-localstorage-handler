import React, { useEffect, useState } from 'react';
import Cosmetic from '../cosmetic/Cosmetic';

const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCosmetics(data))
    }, [])
    // const cosmetics = [
    // {
    //     "id": "632ee4d4909f0c2dc94ec8c0",
    //     "price": 228,
    //     "name": "Scott Ball"
    // },
    // {
    //     "id": "632ee4d47910204ec2632a0f",
    //     "price": 260,
    //     "name": "Mullen Deleon"
    // },
    // {
    //     "id": "632ee4d409e5d42ef69cbbcb",
    //     "price": 396,
    //     "name": "Farrell Russell"
    // },
    // {
    //     "id": "632ee4d472f2fc256a183522",
    //     "price": 49,
    //     "name": "Hester Jefferson"
    // },
    // {
    //     "id": "632ee4d4ca0ef3cd9df281b8",
    //     "price": 163,
    //     "name": "Zelma Evans"
    // },
    // {
    //     "id": "632ee4d42eaeca85f34bc6d9",
    //     "price": 295,
    //     "name": "Hoover Goff"
    // },
    // {
    //     "id": "632ee4d47eccc0ca48acd547",
    //     "price": 244,
    //     "name": "Randall Guerra"
    // }
    // ]
    return (
        <div style={{ backgroundColor: 'salmon', margin: '20px' }}>
            <h2>Welcome to my Cosmetics store</h2>
            {
                cosmetics.map(cosmetic => <Cosmetic
                    cosmetic={cosmetic}
                    key={cosmetic.id}
                ></Cosmetic>)
            }

        </div>
    );
};

export default Cosmetics;