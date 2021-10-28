import React, { createContext } from 'react';
import UseFirebase from "../Hooks/useFirebase";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const allcontext = UseFirebase();
    return (
        <AuthContext.Provider value={allcontext}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;