import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import Rating from '@mui/material/Rating';
import './Details.css';
import useCont from '../../hooks/useCont';
import axios from 'axios';


const Details = () => {
    const { foodId } = useParams();

    const [food, setFood] = useState({});
    const [quantity, setQuantity] = useState(1);

    const { user } = useCont();

    const { name, img, description, price, location, time, rating, companyLogo } = food;


    useEffect(() => {
        fetch(`http://localhost:5000/food/details/${foodId}`)
            .then(res => res.json())
            .then(data => setFood(data))
    }, []);
    // function for increase button 
    const handleIncrease = () => setQuantity(quantity + 1)

    // function for decrease button
    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }

    }

    const handlePlaceOrder = (food, email) => {
        food.quantity = quantity;

        const order = {
            email,
            food,
        }

        // post using by axios 
        axios.post('http://localhost:5000/food/order', order)
            .then(function (response) {

                if (response.data.acknowledged) {
                    alert(`Your order ${name} successfully added.`);
                    setQuantity(1)
                }
            })
            .catch(function (error) {
            });
    }
    return (
        <>
            {
                food._id ? <div className="container mx-auto row main_details_container">
                    <div className="col-lg-6 img_container_details mb-3">
                        <img className="img-fluid" src={img} alt="" />
                    </div>
                    <div className="col-lg-6">
                        <h3>{name}</h3>
                        <Rating name="read-only" value={parseInt(rating)} readOnly />
                        <div className="d-flex align-items-center mini-card-details pt-2">

                            <div><img width="60px" src={companyLogo} alt="" /></div>

                            <div className=" ms-3 restaurant_details">
                                <p className="mt-2 open_time"><i className=" watch fas fa-clock"></i> <span>{time}</span> </p>
                                <p className="mt-1"> <i className="map fas fa-map-marked-alt"></i> <span>{location}</span> </p>
                            </div>
                        </div>

                        <p>{description}</p>
                        <h5 className="product_price">${price}</h5>
                        <div className=" d-flex">
                            <div className="quantity_container d-flex  me-3">
                                <button onClick={handleDecrease}>
                                    -
                                </button>
                                <div className="quantity_number pt-1">
                                    {
                                        quantity < 10 ? `0${quantity}` : quantity
                                    }
                                </div>
                                <button onClick={handleIncrease}>
                                    +
                                </button></div>
                            <button onClick={() => handlePlaceOrder(food, user.email)} className="place_order_button">Place Order</button>
                        </div>
                    </div>
                </div>

                    :
                    <div className="spinner-mini py-5">
                        <Spinner className="spinner my-5" animation="border" variant="info" />
                    </div>
            }
        </>

    );
};

export default Details;