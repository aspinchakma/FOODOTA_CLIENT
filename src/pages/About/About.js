import React from 'react';
import './About.css';

const AboutUs = () => {
    return (
        <div>
            <div className="container row mx-auto about_us_main_container">
                <div className="col-lg-6">
                    <h3 className=" mb-1 restaurant_header">Foodota</h3>
                    <h5 className=" mini_restaurant_header">Online food ordering company</h5>
                    <h5>About Us</h5>
                    <p>Foodota is an online food ordering and delivery platform launched by Uber in 2014. Users can read menus, reviews and ratings, order, and pay for food from participating restaurants using an application on the iOS or Android platforms, or through a web browser. Users are also able to tip for delivery.</p>

                </div>
                <div className="col-lg-6 mt-3">
                    <img src="https://i.ibb.co/X8MmK2t/Online-delivery-1.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default AboutUs;