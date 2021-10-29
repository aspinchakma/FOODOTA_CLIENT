import React from 'react';
import './RestaurantFood.css';

const RestaurantFood = ({ food }) => {
    const { img, name, companyLogo, location, time, price } = food;
    return (
        <div>
            <div className="col">
                <div className="card h-100 single_card">
                    <div className="mini_card_img">
                        <img src={img} className="card-img-top single_card_img" alt="..." />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="food_price"> ${price}</p>
                        <div className="d-flex align-items-center mini-card-details pt-2">

                            <div><img width="60px" src={companyLogo} alt="" /></div>

                            <div className=" ms-3 restaurant_details">
                                <p className="mt-2 open_time"><i className=" watch fas fa-clock"></i> <span>{time}</span> </p>
                                <p className="mt-1"> <i className="map fas fa-map-marked-alt"></i> <span>{location}</span> </p>
                            </div>
                        </div>
                        <button className="details_button">Details</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default RestaurantFood;