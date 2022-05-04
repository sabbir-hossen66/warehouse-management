import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './CategoryDetail.css'

const CategoryDetail = () => {
    const { categoryId } = useParams();
    const [category, setCategory] = useState({});
    console.log(category);
    const url = `http://localhost:3000/category/${categoryId}`

    fetch(url)
        .then(res => res.json())
        .then(data => setCategory(data))


    return (
        <div>
            <h2>welcome to detail: {categoryId}</h2>
            <div className='text-center'>
                <Link to="/checkout">
                    <button className='checkout-button'>Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default CategoryDetail;