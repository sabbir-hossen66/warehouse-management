import React from 'react';
import './Register.css'
import register from '../../../images/register (1).png'


const Register = () => {
    return (

        <div className='register-form'>

            <div className='register-photo text-center align-items-center my-4 '>
                <img src={register} alt="" />
                <h2>Please Register</h2>
            </div>

            <form>
                <input type="text" name="name" id="" placeholder='your name' />
                <input type="email" name="email" id="" placeholder='your email' required />

                <input type="password" name="password" id="" placeholder='your password' required />
                <input type="submit" value="Register" />
            </form>

        </div>

    );
};

export default Register;
