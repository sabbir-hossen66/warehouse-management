import React from 'react';
import '../Category/Category.css'

const Category = ({ category }) => {
    const { name, img, description, price, quantity, suppliername } = category;
    return (
        <div className='category-style'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>supplier: {suppliername}</p>
            <p>price: ${price}</p>
            <p>quantity: {quantity}</p>
            <p>description: <small>{description}</small></p>
            <button className='button-style p-2'>Update</button>
        </div>



    );
};

export default Category;