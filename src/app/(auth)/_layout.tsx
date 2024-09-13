import { View, Text } from 'react-native'
import React from 'react'
import { Redirect, Stack } from 'expo-router'
import { useAuth } from '../../provider/AuthContext'

const AuthLayout = () => {
  const { user } = useAuth();
  if (user) {
    return (
      <Redirect href={"/(tabs)/"} />
    )

  }
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='login' />
      <Stack.Screen name='register' />
    </Stack>
  )
}

export default AuthLayout