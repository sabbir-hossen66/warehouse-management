import React from 'react';
import Footer from '../../Shared/Footer/Footer';
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
            <Footer></Footer>
        </div>
    );
};

export default Home;