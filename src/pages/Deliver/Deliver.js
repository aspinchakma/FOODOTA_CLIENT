import React from 'react';
import { Link } from 'react-router-dom';
import './Delivery.css';

const Deliver = () => {
    return (
        <div>

            <div className="container row mx-auto main-deliver-container">
                <div className="col-lg-6">
                    <h3>Deliver with Foodota</h3>
                    <p>No boss. Flexible schedule. Quick pay.
                        Now you can make money by delivering food orders that people crave using the Foodota app while exploring your city.</p>
                    <p>Grab your car, bike, scooter, or even shoes and deliver whenever you want—for an hour, a weekend, or throughout the week</p>
                    <Link to="/add"><button className="deliver_register  mb-4">Register To Deliver </button></Link>

                </div>
                <div className="col-lg-6 register_image_container">
                    <img src="https://i.ibb.co/DCFbxqr/roman-melihhov-ZBCyn-NWUe-V8-unsplash-1.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Deliver;