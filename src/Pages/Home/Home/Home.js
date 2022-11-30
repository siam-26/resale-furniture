import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import AboutHmas from '../AboutHmas/AboutHmas';
import AdvertiseProducts from '../AdvertiseProducts/AdvertiseProducts';
import Carousel from '../Carousel/Carousel';
import Categories from '../Categories/Categories';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Carousel></Carousel>
            <Categories></Categories>

            <AboutHmas></AboutHmas>
            <AdvertiseProducts></AdvertiseProducts>
        </div>
    );
};

export default Home;