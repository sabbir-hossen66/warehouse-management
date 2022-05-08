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
        <div className='container  '>
            <div className='mx-auto'>
                <h2 className='about-header'>Contact Us</h2>

                <div className='row justify-content-center'>
                    <div className='left-side'>
                        <div className='me-5 social-style'>
                            <h3 className='font-style'> <FaAddressBook></FaAddressBook> Address</h3>
                            112/B - Road 1200 building<br />
                            /new kocukhet, Bangladesh
                        </div><br />

                        <div className=' social-style'>
                            <h3 className='font-style'><BsTelephoneFill></BsTelephoneFill>  phone No</h3>
                            +007894145478 <br />
                            4587789413635
                        </div>

                    </div>
                    <div className="right-side">
                        <div className=' social-style'>
                            <h3 className='font-style'><GrMail></GrMail>  Mail</h3>
                            yourmail.dhaka@domain.com <br />
                            houserent.rajbari@domain.com
                        </div><br />

                        <div className='social-style'>
                            <h3 className='font-style'><FaUserCircle></FaUserCircle> Social Account </h3>
                            <h2><span className='social-icon-style'><BsFacebook></BsFacebook></span> <span className='social-icon-style'><AiFillTwitterCircle></AiFillTwitterCircle></span>  <span className='social-icon-style'><ImLinkedin></ImLinkedin></span></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;