import React from 'react';
import useAuth from '../../hooks/useAuth';
import './Login.css';


const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div className="text-center row container mx-auto main_log_in_container">
            <div className="col-lg-4">

            </div>
            <div className="col-lg-4 mini_log_in_container">
                <img width="200px" src="https://i.ibb.co/9Tpc2WS/download.png" alt="" />
                <h1 className="log_in_header mb-4 mt-4">Log in</h1>
                <div onClick={signInUsingGoogle} className="d-flex log_in_method_container">
                    <img src="https://i.ibb.co/t2ZWFqK/icons8-google-48.png" alt="" />
                    <button>Sign in with Google</button>
                </div>

            </div>
            <div className="col-lg-4">

            </div>
        </div>
    );
};

export default Login;