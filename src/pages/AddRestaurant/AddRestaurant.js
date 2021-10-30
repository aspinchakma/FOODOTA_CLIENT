import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddRestaurant.css';

const AddRestaurant = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://calm-sea-46897.herokuapp.com/add/sellMeal', data)
            .then(res => {
                // const { data } = res;
                // console.log(res.data.insertedId)
                if (res.data.insertedId) {
                    alert('Your food items added successfully with your restaurants.');
                    reset()
                }
            }).catch(error => {
                console.log(error)
            })

    };
    return (
        <div>
            <h5 className="text-center">Add Food item with your Restaurant</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row mini_form_container">
                    <div className="col-lg-6 single_form_container p-4">
                        <p>Title</p>
                        <input className="common_input_field"  {...register("name")} placeholder="Title" required />
                        <p>Description</p>

                        <textarea {...register("description")} placeholder="Description" required />
                        <p>Price</p>
                        <input className="common_input_field" type="number" {...register("price")} placeholder="Price" required />
                        <p>Banner Image Link</p>
                        <input className="common_input_field" {...register("img")} placeholder="banner image link" required />
                    </div>
                    <div className="col-lg-6 single_form_container p-4">
                        <p>Rating</p>
                        <input className="common_input_field mb-2" type="number" {...register("rating")} placeholder="Rating" required />
                        <p>Location</p>
                        <input className="common_input_field mb-2" {...register("location")} placeholder="Location" required />
                        <p>Available Time</p>
                        <input className="common_input_field mb-2" {...register("time")} placeholder="Open Time to close time" required />

                        <p>Company Logo Link</p>
                        <input className="common_input_field" {...register("companyLogo")} placeholder="Company Logo link" required />
                    </div>
                </div>
                <div className="add_food_button_container">
                    <input className="add_restaurant_button" type="submit" value="Sell Food" required />
                </div>
            </form>
        </div>
    );
};

export default AddRestaurant;