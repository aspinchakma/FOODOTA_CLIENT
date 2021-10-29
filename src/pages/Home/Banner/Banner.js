import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner_container mt-4 mb-5">
            <div className="container mx-auto">
                <p className="discount_title">Mega Discounts On</p>
                <h1 className="banner_main_header">Tasty Bites</h1>
                <h1 className="banner_main_header">Healthy Foods</h1>
                <h3 className="discount">10 - 50% OFF</h3>
                <button className="view_dishes_button mt-3">VIEW DISHES</button>
            </div>
        </div>
    );
};

export default Banner;