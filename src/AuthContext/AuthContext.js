import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';
export const useContexts = createContext()
const AuthContext = ({children}) => {
    const allContext = useFirebase()
    return (
        <useContexts.Provider value={allContext}>
            {children}
        </useContexts.Provider>
    );
};

export default AuthContext;