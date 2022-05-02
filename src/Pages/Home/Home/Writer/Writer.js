import React from 'react';
import './Writer.css'

const Writer = ({ writer }) => {
    const { name, img, country } = writer;
    return (
        <div className=' g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className="card" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <h5 className="card-title"><small>From: {country}</small></h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-danger">Go somewhere</a>
                </div>
            </div>
        </div>
    );
};

export default Writer;