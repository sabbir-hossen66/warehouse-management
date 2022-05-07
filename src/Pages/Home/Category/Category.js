import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import '../Category/Category.css'

const Category = ({ category }) => {
    const { _id, name, img, description, price, quantity, suppliername } = category;
    const navigate = useNavigate();

    const navigateToCategoryDetail = id => {
        navigate(`/category/${id}`);
    }
    return (

        <div className='category-style'>
            <PageTitle title="categories"></PageTitle>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>supplier: {suppliername}</p>
            <p>price: ${price}</p>
            <p>quantity: {quantity}</p>
            <p>description: <small>{description}</small></p>
            <button className='button-style p-2' onClick={() => navigateToCategoryDetail(_id)}>Update</button>
        </div>



    );
};

export default Category;