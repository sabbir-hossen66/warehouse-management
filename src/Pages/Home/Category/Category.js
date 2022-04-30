import React from 'react';
import '../Category/Category.css'

const Category = ({ category }) => {
    const { name, img, description, price, quantity, suppliername } = category;
    return (
        <div>
            <img src={img} alt="" />
            <h3>category{name}</h3>
            <p>supplier: {suppliername}</p>
            <p>price: ${price}</p>
            <p>quantity: {quantity}</p>
            <p>description: <small>{description}</small></p>
            <button>Update</button>
        </div>
    );
};

export default Category;