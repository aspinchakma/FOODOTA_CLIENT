import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useCont from '../../../hooks/useCont';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useCont();

    console.log(isLoading, user.email)

    if (isLoading) {
        return <div className="spinner-mini py-5">
            <Spinner className=" my-5" animation="border" variant="info" />
        </div>
    }
    console.log(isLoading)
    return (
        <div>
            <Route
                {...rest}
                render={({ location }) =>
                    user.email ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
                }
            />
        </div>
    );
};

export default PrivateRoute;