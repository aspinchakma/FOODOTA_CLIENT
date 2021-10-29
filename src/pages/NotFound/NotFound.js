import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            <div className="container row mx-auto main_error_container">
                <div className="col-lg-6 text-center">
                    <p className="error_status">404</p>
                </div>
                <div className="error_message_container col-lg-6">
                    <h4>Foodota</h4>
                    <p>Sorry sir, this page</p>
                    <p>isn't available!</p>
                    <Link path="/home"><button>VISIT HOME<i className="arrow_sign ms-3 fas fa-arrow-right"></i></button></Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;