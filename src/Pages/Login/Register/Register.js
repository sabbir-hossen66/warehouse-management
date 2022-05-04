import React from 'react';
import './Register.css'
import register from '../../../images/register (1).png'
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';



const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login')
    }

    if (user) {
        navigate('/home')
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);
    }
    return (

        <div className='register-form'>

            <div className='register-photo text-center align-items-center my-4 '>
                <img src={register} alt="" />
                <h2>Please Register</h2>
            </div>

            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='your name' />
                <input type="email" name="email" id="" placeholder='your email' required />
                <input type="password" name="password" id="" placeholder='your password' required />
                <input className='submit-button' style={{ backgroundColor: "#6c757d", color: "white", border: "none", fontWeight: "bold", padding: "2" }} type="submit" value="Register" />
            </form>
            <p className='paragraph mt-2'>Already have an account ? <Link to='/login' className='new-color pe-auto text-decoration-none' onClick={navigateLogin}>Please...Log In here...!</Link></p>
            <SocialLogin></SocialLogin>
        </div>

    );
};

export default Register;
