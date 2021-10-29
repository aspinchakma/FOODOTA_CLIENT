import React from 'react';
import './Subscribe.css';

const Subscribe = () => {
    return (
        <div className="subscribe_container row mb-5">
            <div className="col-lg-3">

            </div>

            <div className="text-center  container subscribe_min_container col-lg-6">
                <input type="text" placeholder="Your email address" />
                <button className="mt-3">SUBSCRIBE</button>
            </div>
            <div className="col-lg-3">

            </div>
        </div>
    );
};

export default Subscribe;