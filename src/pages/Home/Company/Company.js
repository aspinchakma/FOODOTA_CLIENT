import React from 'react';
import './Company.css';


const Company = () => {
    return (
        <div className="company_container pb-5 pt-3">
            <h3>Popular Restaurant</h3>
            <div className="container row mx-auto">
                <div className="col-lg-2 col-4">
                    <img src="https://i.ibb.co/5nNWqBM/06.png" alt="" />
                </div>
                <div className="col-lg-2 col-4">
                    <img src="https://i.ibb.co/D1Qyd6Q/05.png" alt="" />
                </div>
                <div className="col-lg-2 col-4">
                    <img src="https://i.ibb.co/SPpvKTf/04.png" alt="" />
                </div>
                <div className="col-lg-2 col-4">
                    <img src="https://i.ibb.co/bFZP6HX/03.png" alt="" />
                </div>
                <div className="col-lg-2 col-4">
                    <img src="https://i.ibb.co/vkjPXqf/02.png" alt="" />
                </div>
                <div className="col-lg-2 col-4">
                    <img src="https://i.ibb.co/pfCBb7J/01.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Company;