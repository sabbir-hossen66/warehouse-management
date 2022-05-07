import React from 'react';
import './About.css'

import { FaAddressBook } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr'
import { FaUserCircle } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { ImLinkedin } from 'react-icons/im';
import { BsTelephoneFill } from 'react-icons/bs';


const About = () => {
    return (
        <div className='pb-5'>
            <h2 className='about-header'>About us</h2>

            <div className='flex justify-content-center'>
                <div className='left-side me-5'>
                    <div className=' social-style'>
                        <h4> <FaAddressBook></FaAddressBook>Address</h4>
                        112/B - Road 121,east<br />
                        /Kafrul Bangladesh
                    </div><br />

                    <div className=' social-style'>
                        <h4><BsTelephoneFill></BsTelephoneFill>  phone No</h4>
                        +007894145 <br />
                        4587789413
                    </div>

                </div>
                <div className="right-side">
                    <div className=' social-style'>
                        <h4><GrMail></GrMail>  Mail</h4>
                        yourmail@domain.com <br />
                        houserent@domain.com
                    </div><br />

                    <div className='social-style'>
                        <h4><FaUserCircle></FaUserCircle>  Social Account</h4>
                        <h4><BsFacebook></BsFacebook> <AiFillTwitterCircle></AiFillTwitterCircle>  <ImLinkedin></ImLinkedin></h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;