import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import useCont from '../../hooks/useCont';
import './Login.css';


const Login = () => {
    const { signInUsingGoogle, setUser, setError, setIsLoading } = useCont();

    const location = useLocation();
    const history = useHistory();
    const uri = location.state?.from || '/home';

    const handleSignInWithGoogle = () => {
        setIsLoading(false)
        signInUsingGoogle()
            .then(result => {
                const user = result.user;
                setUser(user);
                history.push(uri);
                setIsLoading(true)
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage)
                setIsLoading(true)
            })
    }
    return (
        <div className="text-center row container mx-auto main_log_in_container">
            <div className="col-lg-4">

            </div>
            <div className="col-lg-4 mini_log_in_container">
                <img width="200px" src="https://i.ibb.co/9Tpc2WS/download.png" alt="" />
                <h1 className="log_in_header mb-4 mt-4">Log in</h1>
                <div onClick={handleSignInWithGoogle} className="d-flex log_in_method_container">
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