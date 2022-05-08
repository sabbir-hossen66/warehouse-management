import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useCategoryDetail from '../../hooks/useCategoryDetail';
import './CategoryDetail.css'

const CategoryDetail = () => {
    const [category, setCategory] = useState({});
    const { categoryId } = useParams();
    const [isReload, setIsReload] = useState(false);


    useEffect(() => {

        const url = `https://stormy-oasis-11527.herokuapp.com/category/${categoryId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [categoryId, isReload]);
    let { name, price, quantity, suppliername, img, } = category
    // 

    // const [category] = useCategoryDetail(categoryId)


    const handleForm = (event) => {
        event.preventDefault();

        let updatedQuantity = parseInt(event.target.name.value);
        quantity = quantity + updatedQuantity;

        const updatedCategory = { quantity };

        const url = `https://stormy-oasis-11527.herokuapp.com/category/${categoryId}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updatedCategory),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                event.target.reset();
                setIsReload(!isReload)
            });
    };

    const handleDeliver = () => {
        const quantity = parseInt(category.quantity) - 1;
        const updatedCategory = { quantity };

        const url = `https://stormy-oasis-11527.herokuapp.com/category/${categoryId}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updatedCategory),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                const proceed = window.confirm("Deliver book?");
                if (proceed) {
                    setIsReload(!isReload)
                }
            });
    };

    return (
        <div className='pb-5'>
            <h2 className='detail-header'>Features of the book</h2>
            <div className="card w-25 mx-auto my-5">
                <img src={img} class="card-img-top" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">name: {name}</h5>
                    <h6 className="card-title">price: {price}</h6>
                    <h6 className="card-title"> quantity: {quantity}</h6>
                    <h6 className="card-title">supplier: {suppliername}</h6>
                    <p className="card-text">{category.description}</p>
                    <a onClick={() => handleDeliver()} href="#" class="btn btn-info text-white">Deliver</a>
                </div>
            </div>

            <form className='text-center ' onSubmit={handleForm}>
                <input className="" name="name" type="number" />
                <input
                    className="restock my-2 mx-1 rounded"
                    type="submit"
                    value="Restock category"
                />
            </form>
            <div className='text-center mb-3'>
                <Link to="/manage">
                    <button className='checkout-button'>Manage Inventory</button>
                </Link>
            </div>
            <div>
                <div className='text-center mb-3'>
                    <Link to={`/checkout/${categoryId}`}>
                        <button className='checkout-button'>Order Items</button>
                    </Link>
                </div>
                <div className='text-center'>
                    <Link to="/addcategory">
                        <button className='checkout-button'>Add page</button>
                    </Link>
                </div><br /><br /><br /><br />
            </div>

        </div>
    );
};

export default CategoryDetail;