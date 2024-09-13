import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { signOut } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../../config/firebaseConfig';

const groupLayout = () => {
    const handleLogout = () => {
        signOut(FIREBASE_AUTH);
    }

    return (
        <Stack screenOptions={{headerTitleAlign: 'center'}}>
            <Stack.Screen name="index" options={{
                headerShown: true, 
                title:"Chat Groups",
                headerRight: () => {
                    return (
                      <Pressable onPress={() => handleLogout()}>
                        <View style={{
                          marginRight:5,
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
                }} />
            <Stack.Screen name="[id]" options={{ headerShown: true, title: 'Chat' }} />
        </Stack>
    )
}

export default groupLayout