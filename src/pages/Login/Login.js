import React from 'react';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div>
            <h1>This is log in page</h1>
            <button onClick={signInUsingGoogle}>Log in with google</button>
        </div>
    );
};

export default Login;