import React from 'react';
import { Spinner } from 'react-bootstrap';
import './Loading.css'

const Loading = () => {
    return (
        <div style={{ height: "300px" }} className='w-100 d-flex justify-content-center align-items-center'>
            <Spinner animation="grow" variant="info" />
        </div>
    );
};

export default Loading;