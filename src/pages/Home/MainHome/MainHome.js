import React from 'react';
import Banner from '../Banner/Banner';
import Company from '../Company/Company';
import DeliveryArea from '../DeliveryArea/DeliveryAreac';
import GetStarted from '../GetStarted/GetStarted';
import MidBAnner from '../MidBanner/MidBAnner';
import PopularRestaurant from '../PopularRestaurant/PopularRestaurant';
import Process from '../Process/Process';
import Subscribe from '../Subscribe/Subscribe';

const MainHome = () => {
    return (
        <div>
            <Banner></Banner>
            <DeliveryArea></DeliveryArea>
            <PopularRestaurant></PopularRestaurant>
            <Process></Process>
            <MidBAnner></MidBAnner>
            <GetStarted></GetStarted>
            <Subscribe></Subscribe>
            <Company></Company>
        </div>
    );
};

export default MainHome;