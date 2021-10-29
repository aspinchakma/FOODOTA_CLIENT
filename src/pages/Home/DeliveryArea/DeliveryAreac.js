import React from 'react';
import './DeliveryArea.css';

const DeliveryArea = () => {

    return (
        <div className="my-5">
            <div className="container row mx-auto text-center">
                <h3 className="available_cities mb-2">Find us in these cities and many more!</h3>
                <div className="col-lg-4 mt-4">
                    <div className="mini_city_container py-3">
                        <img src="https://i.ibb.co/gjf62zY/250px-View-of-IUT-at-Gazipur-Bangladesh-at-2014.jpg" alt="" />
                        <h4 className="city_name">Comilla </h4>
                        <p className="available_restaurant_number">34 Restaurants</p>
                    </div>

                </div>
                <div className="col-lg-4 mt-4">
                    <div className="mini_city_container py-3">
                        <img src="https://i.ibb.co/RDmFyLk/Sajek-Valley-01.jpg" alt="" />
                        <h4 className="city_name">Rangamati</h4>
                        <p className="available_restaurant_number">24 Restaurants</p>
                    </div>
                </div>

                <div className="col-lg-4 mt-4">
                    <div className="mini_city_container py-3">
                        <img src="https://i.ibb.co/NnYbyQr/12.jpg" alt="" />
                        <h4 className="city_name">Bandarban</h4>
                        <p className="available_restaurant_number">28 Restaurants</p>
                    </div>
                </div>

                <div className="col-lg-4 mt-4">
                    <div className="mini_city_container py-3">
                        <img src="https://i.ibb.co/jhcsWG9/DCIM-100-GOPRO-GOPR0930.jpg" alt="" />
                        <h4 className="city_name">Khagrachari </h4>
                        <p className="available_restaurant_number">32 Restaurants</p>
                    </div>
                </div>

                <div className="col-lg-4 mt-4">
                    <div className="mini_city_container py-3">
                        <img src="https://i.ibb.co/4K5Xdwg/Lengurbill-beach-12.jpg" alt="" />
                        <h4 className="city_name">Cox's Bazar</h4>
                        <p className="available_restaurant_number">29 Restaurants</p>
                    </div>
                </div>

                <div className="col-lg-4 mt-4">
                    <div className="mini_city_container py-3">
                        <img src="https://i.ibb.co/vhrH0pq/250px-201-Dome-Mosque-Tangail-18.jpg" alt="" />
                        <h4 className="city_name">Tangail</h4>
                        <p className="available_restaurant_number">31 Restaurants</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default DeliveryArea;