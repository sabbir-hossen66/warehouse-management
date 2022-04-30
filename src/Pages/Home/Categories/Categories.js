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
            <h2> Different Books Type :{categories.length}</h2>
            {
                categories.map(category => <Category key={category.id} category={category}></Category>)
            }
        </div>
    );
};

export default Categories;