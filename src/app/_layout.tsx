import { View, Text } from 'react-native'
import React from 'react'
import { Redirect, Stack } from 'expo-router'
import AuthProvider, { useAuth } from '../provider/AuthContext'

const RootLayout = () => {
  return (
    <AuthProvider>
      <Stack screenOptions={{headerShown:false}}>
        <Stack.Screen name='index'/>
      </Stack>
    </AuthProvider>
  )
}

export default RootLayout