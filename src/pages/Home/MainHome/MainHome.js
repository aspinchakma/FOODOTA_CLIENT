import React from 'react';
import Banner from '../Banner/Banner';
import GetStarted from '../GetStarted/GetStarted';
import MidBAnner from '../MidBanner/MidBAnner';
import PopularRestaurant from '../PopularRestaurant/PopularRestaurant';
import Process from '../Process/Process';
import Subscribe from '../Subscribe/Subscribe';

const MainHome = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularRestaurant></PopularRestaurant>
            <Process></Process>
            <MidBAnner></MidBAnner>
            <GetStarted></GetStarted>
            <Subscribe></Subscribe>
        </div>
    );
};

export default MainHome;