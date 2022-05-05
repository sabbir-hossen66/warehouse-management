import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import '../Home/Home.css'
import Writers from './Writers/Writers';

const Home = () => {
    return (
        <>
            <PageTitle title="Home"></PageTitle>
            <Banner></Banner>
            <Categories></Categories>
            <Writers></Writers>
            <Footer></Footer>
        </>
    );
};

export default Home;