import React from 'react';
import '../Footer/Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='footer-style text-info  col-sm-12 col-md-6 col-lg-4 fs-4 mt-5'>


            <p className='text-center'>Copyright © {year}</p>


        </footer>
    );
};

export default Footer;