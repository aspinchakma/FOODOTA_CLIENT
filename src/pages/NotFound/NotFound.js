import React from 'react';
import { useHistory } from 'react-router';
import './NotFound.css';

const NotFound = () => {
    const history = useHistory();
    const handleErrorButton = () => {
        history.push('/home')
    }
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
                    <button onClick={handleErrorButton}>VISIT HOME<i className="arrow_sign ms-3 fas fa-arrow-right"></i></button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;