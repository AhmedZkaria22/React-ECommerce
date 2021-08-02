import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/FireConfig';

export const AuthContext = createContext();
export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unSubscribe = auth.onAuthStateChanged(user => {
            setUser(user);
            setLoading(false);
            console.log(user);
        }) 

        return unSubscribe;
    }, [])   

    if(loading){ return <p>Loading ....</p> } 

    return(
        <AuthContext.Provider value={ {user} }>
            {children}
        </AuthContext.Provider>
    )
}
