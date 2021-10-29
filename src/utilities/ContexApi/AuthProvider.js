import React, { createContext } from 'react';
import useAuth from '../../hooks/useAuth';

export const AuthenticationContext = createContext();

const AuthProvider = ({ children }) => {
    const allData = useAuth();
    return (
        <AuthenticationContext.Provider value={allData}>
            {children}
        </AuthenticationContext.Provider>
    );
};

export default AuthProvider;
