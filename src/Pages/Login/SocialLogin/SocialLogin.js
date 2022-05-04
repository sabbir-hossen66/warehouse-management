import React from 'react';
import './SocialLogin.css'
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();

    let errorElement;

    if (loading || loading1) {
        return <Loading></Loading>
    }

    if (error || error1) {

        errorElement =
            <p className='text-danger'>Error: {error?.message} {error1?.message}</p>


    }

    if (user || user1) {
        navigate('/home');
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: "1px" }} className='paragraph-or w-50'></div>
                <p className='text-style mt-2 px-2'>or</p>
                <div style={{ height: "1px" }} className='paragraph-or w-50'></div>
            </div>
            {errorElement}
            <button
                onClick={() => signInWithGoogle()}
                className='google-button w-50 d-block mx-auto my-2' ><span style={{ fontSize: "25px" }}><FcGoogle></FcGoogle> Google Sign IN</span></button>
            <button
                onClick={() => signInWithGithub()}
                className='google-button w-50 d-block mx-auto my-2' ><span style={{ fontSize: "25px" }}><FaGithubSquare></FaGithubSquare> Github Sign In</span></button>
            <button className='google-button w-50 d-block mx-auto' ><span style={{ fontSize: "25px" }}><BsFacebook></BsFacebook> Facebook Sign In</span></button>
        </div>
    );
};

export default SocialLogin;