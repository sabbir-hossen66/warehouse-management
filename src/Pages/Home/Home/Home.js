import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import '../Home/Home.css'
import Writers from './Writers/Writers';

const Home = () => {
    return (
        <div>
            <PageTitle title="home"></PageTitle>
            <Banner></Banner>
            <Categories></Categories>
            <Writers></Writers>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default Home;