import React from 'react';
import '../Footer/Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='footer-style text-center text-danger fw-bold fs-5 mt-4 col-sm-12 col-md-6 col-lg-4'>
            <p><small>Copyright © {year}</small></p>
        </footer>
    );
};

export default Footer;