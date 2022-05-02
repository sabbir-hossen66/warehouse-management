import React from 'react';
import { useParams } from 'react-router-dom';
import './CategoryDetail.css'

const CategoryDetail = () => {
    const { categoryId } = useParams();
    return (
        <div>
            <h2>welcome to detail: {categoryId}</h2>
        </div>
    );
};

export default CategoryDetail;