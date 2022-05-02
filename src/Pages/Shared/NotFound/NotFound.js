import React from 'react';
import './NotFound.css'
import error from '../../../images/error.jpg'

const NotFound = () => {
    return (
        <div className='col-sm-12 col-md-6 col-lg-4 mx-auto'>
            <marquee behavior="" direction="up"><h2 className='error-style text-center text-bold p-5'>Sorry The Page Doesn't Match...</h2></marquee>

            <div>
                <img className='w-100' src={error} alt="" />
            </div>


        </div>
    );
};

export default NotFound;