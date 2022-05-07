import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useCategoryDetail from '../../hooks/useCategoryDetail';
import './CategoryDetail.css'

const CategoryDetail = () => {
    const { categoryId } = useParams();
    const [category] = useCategoryDetail(categoryId)
    return (
        <div>
            <div className="card w-25 mx-auto my-5">
                <img src={category.img} class="card-img-top" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">name: {category.name}</h5>
                    <h6 className="card-title">price: {category.price}</h6>
                    <h6 className="card-title"> quantity: {category.quantity}</h6>
                    <h6 className="card-title">supplier: {category.suppliername}</h6>
                    <p className="card-text">{category.description}</p>
                    <a href="#" class="btn btn-info text-white">Deliver</a>
                </div>
            </div>
            <div className='text-center mb-5'>
                <Link to={`/checkout/${categoryId}`}>
                    <button className='checkout-button'>Order Items</button>
                </Link>
            </div>
        </div>
    );
};

export default CategoryDetail;