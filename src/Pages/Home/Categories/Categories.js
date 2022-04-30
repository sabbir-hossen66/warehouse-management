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
        <div>
            <marquee behavior="alternate" direction="up">
                <h2 className='categories-title'> Different Books Type</h2></marquee>
            <div className="categories-container">
                {
                    categories.map(category => <Category key={category.id} category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;