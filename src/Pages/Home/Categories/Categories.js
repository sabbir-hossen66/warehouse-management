import React, { useEffect, useState } from 'react';
import '../Categories/Categories.css'
import Category from '../Category/Category';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])
    return (
        <div className='container'>
            <marquee behavior="alternate" direction="up">
                <h2 className='categories-title my-4'> Different Books Type</h2></marquee>
            <div className="categories-container">
                {
                    categories.map(category => <Category key={category.id} category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;