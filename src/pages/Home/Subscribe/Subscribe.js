import React from 'react';
import './Subscribe.css';

const Subscribe = () => {
    return (
        <div className="subscribe_container row mb-5">
            <div className="col-lg-3">

            </div>
            {/* change this title name  */}
            <div className="text-center  container subscribe_min_container col-lg-6">
                <h3>Hungry? You're in the right place</h3>
                <input type="text" placeholder="Enter Delivery Service" />
                <button className="mt-3 px-4">SEARCH</button>
            </div>
            <div className="col-lg-3">

            </div>
        </div>
    );
};

export default Subscribe;