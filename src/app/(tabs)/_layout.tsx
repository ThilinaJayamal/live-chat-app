import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Redirect, Tabs } from 'expo-router'
import { useAuth } from '../../provider/AuthContext'
import { signOut } from 'firebase/auth'
import { FIREBASE_AUTH } from '../../config/firebaseConfig'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const TabLayout = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <Redirect href={"/(auth)/login"} />
    )
  }

  const handleLogout = () => {
    signOut(FIREBASE_AUTH);
  }

  return (
    <Tabs screenOptions={{ headerTitleAlign: 'center' }}>
      <Tabs.Screen name='index' options={{
        title: "Chat Groups",
        headerRight: () => {
          return (
            <Pressable onPress={() => handleLogout()}>
              <View style={{
                paddingHorizontal: 15,
                flexDirection: 'row',
                gap: 4,
                alignItems: 'center',
              }}>
                <Text style={{
                  color: "#0ea5e9",
                  fontWeight: '400',
                  fontSize: 14
                }}>Logout</Text>
                <MaterialIcons name="logout" size={20} color="#0ea5e9" />
              </View>
            </Pressable>
          )
        }
      }} />
      <Tabs.Screen name='groups' options={{ title: "Groups" }} />
    </Tabs>
  )
}

export default TabLayout