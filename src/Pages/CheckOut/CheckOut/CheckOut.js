import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import useCategoryDetail from '../../../hooks/useCategoryDetail';
import './CheckOut.css'

const CheckOut = () => {
    const { categoryId } = useParams();
    const [category] = useCategoryDetail(categoryId);
    const [user] = useAuthState(auth)

    const handleMyItems = event => {
        event.preventDefault();
        const item = {
            email: user.email,
            category: category.name,
            categoryId: categoryId,
            address: event.target.address.value,
            phone: event.target.phone.value

        }
        axios.post('https://stormy-oasis-11527.herokuapp.com/item', item)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Your Item is booked');
                    event.target.reset();
                }
            })
    }

    return (
        <div className='w-50 mx-auto '>
            <h1 className='header-style'>Orders</h1>
            <form onSubmit={handleMyItems}>
                <div className='input-style '>
                    <input className='w-100 mb-2' type="text" value={user.displayName} name="name" id="" placeholder='name' required readOnly /><br />
                    <input className='w-100 mb-2' type="text" value={user.email} name="email" id="" placeholder='email' required readOnly /><br />
                    <input className='w-100 mb-2' type="text" value={category.name} name="category" id="" placeholder='category' required readOnly /><br />
                    <input className='w-100 mb-2' type="text" name="address" id="" placeholder='address' required /><br />
                    <input className='w-100 mb-2' type="text" name="phone" id="" placeholder='phone.no' required /><br />
                </div>
                <input className='item-color ' type="submit" value="My Items" />
            </form>
        </div>
    );
};

export default CheckOut;