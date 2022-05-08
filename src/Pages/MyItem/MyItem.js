import { async } from '@firebase/util';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import PageTitle from '../Shared/PageTitle/PageTitle';
import Item from './Item/Item';
import './MyItem.css'

const MyItem = () => {
    const [user] = useAuthState(auth);

    const [myItem, setMyItem] = useState([]);

    useEffect(() => {
        const getMyItem = async () => {
            const email = user.email;
            const url = `https://stormy-oasis-11527.herokuapp.com/myitem?email=${email}`;
            const { data } = await axios.get(url);
            setMyItem(data);
        }
        getMyItem();

    }, [user])



    return (
        <div className='myitem-style w-50 mx-auto text-center '>
            <PageTitle title="myitem"></PageTitle>
            <h2>My Items: {myItem.length}</h2>

            {
                myItem.map(item => <Item key={item._id} item={item}></Item>)
            }

        </div>
    );
};

export default MyItem;