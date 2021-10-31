import React from 'react';
import { useForm } from "react-hook-form";
import useCont from '../../hooks/useCont';

const AddPost = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useCont();
    const onSubmit = data => {
        // this is just demon not to send database to da


        alert('Successfully Registered...')
        reset();
    }
    return (
        <div>
            <h5 className="text-center">Register For Food Delivery </h5>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row mini_form_container">
                    <div className="col-lg-6 single_form_container p-4">
                        <p>Full Name</p>
                        <input value={user.displayName} className="common_input_field mb-1"  {...register("name")} placeholder="Full Name" required />
                        <p>About Yourself</p>

                        <textarea {...register("description")} className="mb-1" placeholder="About Yourself" required />
                        <p>Age</p>
                        <input className="common_input_field mb-3" type="number" {...register("age")} placeholder="Age" required />
                    </div>
                    <div className="col-lg-6 single_form_container p-4">

                        <p>Location</p>
                        <input className="common_input_field mb-3" {...register("location")} placeholder="Location" required />
                        <p>Your Email Address</p>
                        <input value={user.email} className="common_input_field mb-3" {...register("email")} placeholder="Open Time to close time" required />

                        <p>Your Profile Picture Link</p>
                        <input className="common_input_field" {...register("companyLogo")} placeholder="Your Profile Picture Link" required />
                    </div>
                </div>
                <div className="add_food_button_container">
                    <input className="add_restaurant_button" type="submit" value="Completed" required />
                </div>
            </form>
        </div>
    );
};

export default AddPost;