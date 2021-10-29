import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer_container mt-4 pb-2 pt-3">
            <div className="row container mx-auto">
                <div className="col-lg-6 footer_min_container mb-3">
                    <img src="https://i.ibb.co/9Tpc2WS/download.png" alt="" />
                    <p>One is to focus on the quality of your meat. If you can call out organic beef, sustainable farming</p>
                    <p><span>phone: </span>01571218443</p>
                    <p><span>Email: </span>foodota.rangamti@gmail.com</p>
                </div>
                <div className="col-lg-2 mt-5 useful_link_container">
                    <h4>Useful Links</h4>
                    <p>Main Home</p>
                    <p>Blog</p>
                    <p>Log in</p>
                    <p></p>
                </div>
                <div className="col-lg-2 mt-5 useful_link_container">
                    <h4>Available</h4>
                    <p>Chicken sandwich</p>
                    <p>Pad thai</p>
                    <p>Iced coffee</p>
                    <p>Milk tea</p>
                </div>
                <div className="col-lg-2 mt-5 useful_link_container">
                    <h4>Restaurant</h4>
                    <p>FOODCHEF</p>
                    <p>WINGFOOD</p>
                    <p>ORGANIC FOOD</p>
                    <p>TASTY FOOD</p>
                </div>
            </div>
            <p className="footer_border"></p>
            <p className="copyright">Copyright 2021 © Foodota </p>
        </div>
    );
};

export default Footer;