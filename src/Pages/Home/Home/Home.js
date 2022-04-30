import React from 'react';
import Categories from '../Categories/Categories';
import '../Home/Home.css'
import Writers from './Writers/Writers';

const Home = () => {
    return (
        <div>
            <Categories></Categories>
            <Writers></Writers>
        </div>
    );
};

export default Home;