import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import './RequireAuth.css'
import { ToastContainer, toast } from 'react-toastify';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div className='require-style'>
            <h3 className='text-danger'>Your Email is not verified..!!</h3>
            <h5 className='text-success'>Please Verify your email address</h5>
            <button className='verify-button-style' onClick={async () => {
                await sendEmailVerification();
                toast('Sent email')
            }}>Email Verification</button>
            <ToastContainer></ToastContainer>
        </div>
    }

    return children;
};

export default RequireAuth;