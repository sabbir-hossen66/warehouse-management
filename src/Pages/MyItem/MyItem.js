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
            const url = `http://localhost:5000/myitem?email=${email}`;
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
            {/*   */}


            {/* <div className="card w-25 mx-auto my-5">
                <img src={myItem.img} class="card-img-top" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">name: {myItem.name}</h5>
                    <h6 className="card-title">price: {myItem.price}</h6>
                    <h6 className="card-title"> quantity: {myItem.quantity}</h6>
                    <h6 className="card-title">supplier: {myItem.suppliername}</h6>
                    <p className="card-text">{myItem.description}</p>
                    <a href="#" class="btn btn-info text-white">Deliver</a>
                </div>
            </div> */}

        </div>
    );
};

export default MyItem;