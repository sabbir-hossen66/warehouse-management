import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import './Login.css'
import login from '../../../images/login-photo.png'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
    }
    const navigateRegister = event => {
        navigate('/register')
    }

    return (
        <div className='container w-50 mx-auto'>
            <div className="d-flex align-items-center my-4">
                <div>
                    <img className='w-25' src={login} alt="" />
                </div>
                <h2 className='header'>Please Login</h2>

            </div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="secondary" type="submit">
                    Submit
                </Button>
            </Form>
            <p className='paragraph mt-2'>Are You New Member to Book WereHouse ? <span className='new-color' onClick={navigateRegister}>Please...Register here...!</span></p>
        </div>
    );
};

export default Login;