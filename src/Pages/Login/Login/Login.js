import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import './Login.css'
import login from '../../../images/login-photo.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.pathname || "/"

    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (error) {

        errorElement =
            <p className='text-danger'>Error: {error?.message}</p>


    }

    if (user) {
        navigate(from, { replace: true });
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);

    }
    const navigateRegister = event => {
        navigate('/register')
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast(<span className='text-success'>please enter your email address please...</span>)
        }
    }

    return (
        <div className='container w-50 mx-auto'>
            <PageTitle title="Login"></PageTitle>
            <div className="d-flex align-items-center my-4">
                <div>
                    <img className='w-25' src={login} alt="" />
                </div>
                <h2 className='header'>Please Login</h2>

            </div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button className='d-block mx-auto w-25 mb-2' variant="secondary" type="submit">
                    Login
                </Button>
            </Form>
            {errorElement}
            <p className='paragraph mt-2'>Are You New Member to Book WereHouse ? <Link to='/register' className='new-color pe-auto text-decoration-none' onClick={navigateRegister}>Please...Register here...!</Link></p>
            <p className='paragraph mt-2'>Forget Your password ? <button className='new-color pe-auto text-decoration-none text-info btn btn-link' onClick={resetPassword}>Reset your password</button></p>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;