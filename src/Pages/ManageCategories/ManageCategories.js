import React from 'react';
import './ManageCategories.css'
import useCategories from '../../hooks/useCategories'
import PageTitle from '../Shared/PageTitle/PageTitle';

const ManageCategories = () => {
    const [categories, setCategories] = useCategories();

    const handleDelete = id => {

        const proceed = window.confirm("Are you sure want to delete?");


        if (proceed) {
            const url = `http://localhost:5000/category/${id}`;

            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = categories.filter(category => category._id !== id)
                    setCategories(remaining)
                })
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <PageTitle title="manage"></PageTitle>
            <marquee behavior="alternative" direction="up"> <h2 className='manage-headline'>Mange Book type Category</h2></marquee>
            <div className="row">
                {
                    categories.map(category => <div className='container' key={category._id}>

                        <div className="card w-25 mx-auto my-5 g-5 col-sm-12 col-md-6 col-lg-4">
                            <img src={category.img} class="card-img-top" alt="..." />
                            <div className="card-body text-center">
                                <h5 className="card-title">name: {category.name}</h5>
                                <h6 className="card-title">price: {category.price}</h6>
                                <h6 className="card-title"> quantity: {category.quantity}</h6>
                                <h6 className="card-title">supplier: {category.suppliername}</h6>
                                <p className="card-text">{category.description}</p>

                                <button className='delete-button' onClick={() => handleDelete(category._id)}>Delete</button>

                            </div>
                        </div>

                    </div>)
                }
            </div>
        </div>

    );
};

export default ManageCategories;