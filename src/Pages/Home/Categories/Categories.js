import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Categories/Categories.css'
import Category from '../Category/Category';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, []);
    // slice method
    const sliceCategories = categories.slice(0, 6);
    return (
        <div id='categories' className='container'>
            <marquee behavior="alternate" direction="up">
                <h2 className='categories-title my-4'> Different Books Type</h2></marquee>
            <div className="categories-container">
                {
                    sliceCategories.map(category => <Category key={category._id} category={category}></Category>)
                }
            </div>

            <div>

                <button className='show-button'><Link to="/manage">Manage Inventory </Link></button>
            </div>

        </div>
    );
};

export default Categories;