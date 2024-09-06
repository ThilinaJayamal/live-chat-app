import { View, Text } from 'react-native'
import React, { createContext, useContext } from 'react'

interface AuthProps {
    user?: any,
    initialized?: boolean
}

const AuthContext = createContext<AuthProps>({});

const AuthProvider = ({ children }) => {
    return (
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider

export const useAuth = () => useContext(AuthContext);