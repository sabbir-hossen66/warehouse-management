import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import '../Home/Home.css'
import Writers from './Writers/Writers';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Writers></Writers>
        </div>
    );
};

export default Home;