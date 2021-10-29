import React from 'react';
import './Process.css';

const Process = () => {
    return (
        <div className="container mx-auto mt-5">
            <h5 className="text-center mini_restaurant_header">HOW IT WORKS</h5>
            <h3 className="text-center mb-4 restaurant_header">Simple Process</h3>
            <div className="row">
                <div className="col-lg-4 mini_process_container">
                    <div className="py-5 px-2">
                        <img className="mb-3" src="https://i.ibb.co/RTYt3wg/002-checklist.png" alt="" />
                        <h4>Your Order</h4>
                        <p>Thank you for being valued customer. We are so grateful to serving for the honored be clients pleasure of serving hope we meets.</p>
                    </div>
                </div>
                <div className="col-lg-4 mini_process_container">
                    <div className="py-5 px-2">
                        <img className="mb-3" src="https://i.ibb.co/TWpSqbW/003-box.png" alt="" />
                        <h4>Cash On Delivery</h4>
                        <p>Online food Delivery for hiring Food Foodota We appreciate your business, and we'll best to continue to give you the new kind</p>
                    </div>
                </div>
                <div className="col-lg-4 mini_process_container">
                    <div className="py-5 px-2">
                        <img className="mb-3" src="https://i.ibb.co/p2FVHG2/001-salary.png" alt="" />
                        <h4>Receive Order</h4>
                        <p>We at truly appreciate your business and we're grateful for the trust you've placed in us. We sincerely hope you are satisfied.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Process;