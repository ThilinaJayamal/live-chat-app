import { View, Text } from 'react-native'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from '../config/firebaseConfig';

interface AuthProps {
    user?: any,
    initialized?: boolean
}

const AuthContext = createContext<AuthProps>({});

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(undefined);

    useEffect(() => {
        onAuthStateChanged(FIREBASE_AUTH, (user) => {
            setUser(user);
        })
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider

export const useAuth = () => useContext(AuthContext);