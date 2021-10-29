import React from 'react';
import './MidBanner.css';

const MidBAnner = () => {
    return (
        <div className="mid_banner my-5">
            <div className="container">
                <p className="mid_banner_p">TASTY BURGER</p>
                <h2 className="midBanner_main_header">Explox The Best Burger</h2>
                <h2 className="midBanner_main_header">Place Near You</h2>
                <h3>Largest Business Restaurant Food</h3>
                <p className="mid_banner_p_main">you call in or order food from a restaurant or a fast food restaurant,<br /> the restaurant would then prepare your order and have a driver or a rider<br /> to travel all the way to your given address to deliver you your food.</p>
                <div className="mt-4">
                    <button className="read_more">Read More</button>
                    <button className="search_button ms-3">Search Now</button>
                </div>
            </div>
        </div>
    );
};

export default MidBAnner;