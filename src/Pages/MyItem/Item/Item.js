import React from 'react';

const Item = ({ item }) => {
    const { address, category, email, phone, categoryId } = item;
    console.log(item);
    return (
        <div>

            <div className="card w-75 mx-auto my-5">

                <div className="card-body text-center">
                    <h5 className="card-title">name: {address}</h5>
                    <h6 className="card-title">price: {category}</h6>
                    <h6 className="card-title"> quantity: {email}</h6>
                    <h6 className="card-title">supplier: {categoryId}</h6>
                    <p className="card-text">{phone}</p>
                    <a href="#" className="btn btn-info text-white">Deliver</a>
                </div>
            </div>

        </div>
    );
};

export default Item;