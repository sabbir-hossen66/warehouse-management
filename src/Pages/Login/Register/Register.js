import React, { useState } from 'react';
import './Register.css'
import register from '../../../images/register (1).png'
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';
import PageTitle from '../../Shared/PageTitle/PageTitle';



const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login')
    }

    if (loading || updating) {
        return <Loading></Loading>
    }

    if (user) {
        console.log('user', user);
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        if (agree) {

            await createUserWithEmailAndPassword(email, password);
            await updateProfile({ displayName: name });
            console.log('Updated profile');
            navigate('/home')
        }

    }
    return (
        <div className='register-form'>
            <PageTitle title="Register"></PageTitle>
            <div className='register-photo text-center align-items-center my-4'>
                <img src={register} alt="" />
                <h2>Please Register</h2>
            </div>

            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='your name' />
                <input type="email" name="email" id="" placeholder='your email' required />
                <input type="password" name="password" id="" placeholder='your password' required />

                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={agree ? 'text-primary' : 'text-danger'} htmlFor="terms"><span className='ms-2  fw-normal'>accept terms and condition</span></label>
                <input
                    className='submit-button my-2 w-25 mx-auto' style={{ backgroundColor: "#6c757d", color: "white", border: "none", fontWeight: "bold", padding: "2" }} type="submit" value="Register" />

            </form>
            <p className='paragraph mt-2'>Already have an account ? <Link to='/login' className='new-color pe-auto text-decoration-none' onClick={navigateLogin}>Please...Log In here...!</Link></p>
            <SocialLogin></SocialLogin>
        </div>


    );
};

export default Register;
