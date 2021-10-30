import React, { useEffect, useState } from 'react';
import RestaurantFood from '../../RestaurantFood/RestaurantFood';
import { Spinner } from 'react-bootstrap';
import './PopularRestaurant.css';

const PopularRestaurant = () => {
    const [restaurantFood, setRestaurantFood] = useState([]);
    useEffect(() => {
        fetch('https://calm-sea-46897.herokuapp.com/foods')
            .then(res => res.json())
            .then(data => setRestaurantFood(data))
    }, [])
    return (
        <div className="container mx-auto">
            <h5 className="text-center mini_restaurant_header">TOP RESTAURANTS</h5>
            <h3 className="text-center mb-4 restaurant_header">Papular Restaurant</h3>
            {
                restaurantFood.length === 0 && <div className="spinner-mini py-5">
                    <Spinner className="spinner my-5" animation="border" variant="info" />
                </div>
            }
            <div className="row row-cols-1 row-cols-md-3 g-4">

                {
                    restaurantFood.length !== 0 && restaurantFood.map(food => <RestaurantFood
                        key={food._id}
                        food={food}

                    ></RestaurantFood>)
                }
            </div>
        </div>
    );
};

export default PopularRestaurant;