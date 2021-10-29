import React from 'react';
import { Redirect, Route } from 'react-router';
import useCont from '../../../hooks/useCont';

const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useCont()
    console.log(user)
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