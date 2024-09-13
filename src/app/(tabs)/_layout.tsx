import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Redirect, Tabs } from 'expo-router'
import { useAuth } from '../../provider/AuthContext'
import { signOut } from 'firebase/auth'
import { FIREBASE_AUTH } from '../../config/firebaseConfig'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

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
    <Tabs screenOptions={{
      headerTitleAlign: 'center',
      headerRight: () => {
        return (
          <Pressable onPress={() => handleLogout()}>
            <View style={{
              marginRight:10,
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
      },
    }}>

      <Tabs.Screen name='(groups)' options={{
        tabBarLabel: "Chats",
        headerShown:false,
        tabBarIcon: ({ color, size }) => <Ionicons name="chatbubbles" size={size} color={color} />
      }} />

      <Tabs.Screen name='profile' options={{
        title: "My Profile",
        tabBarLabel: "My Profile",
        headerShown:true,
        tabBarIcon: ({ color, size }) => <Ionicons name="person" size={size} color={color} />
      }} />

    </Tabs>
  )
}

export default TabLayout