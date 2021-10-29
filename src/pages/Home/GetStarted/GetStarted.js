import React from 'react';
import './GetStarted.css';

const GetStarted = () => {
    return (
        <div className="mb-5">
            <div className="row container mx-auto getstarted_container">
                <div className="col-lg-6">
                    <p className="get_started_p">PIZZA DELIVERY</p>
                    <h3 className="get_started_header">Get Started Today!</h3>
                    <p>Get any Large Pizza with 3 of your favorite toppings & save! Pick from Detroit-Style, Hand Tossed Round, NY-Style, or Thin Crust. & don't forget to Flavorize Your Crust for Free</p>
                    <p>Positioned as a New York-style pizzeria, the Ox refers to mozzarella cheese while Tomato is a standard base for all pizzas.</p>
                    <p>Hence the name Ox and Tomato. While their pizzas are their bestsellers - try the Super Five and Bee Sting, the menu also includes a wide array of pasta, salads and gourmet sandwiches. </p>
                </div>
                <div className="col-lg-6 text-center img_container_get">
                    <img width="70%" src="https://i.ibb.co/YfjM6sM/ggfg-min.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default GetStarted;