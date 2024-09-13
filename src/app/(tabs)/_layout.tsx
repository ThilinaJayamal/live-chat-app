import { View, Text } from 'react-native'
import React from 'react'
import { Redirect, Tabs } from 'expo-router'
import { useAuth } from '../../provider/AuthContext'

const TabLayout = () => {
  const {user} = useAuth();

  if(!user){
    return(
      <Redirect href={"/(auth)/login"}/>
    )
  }
  return (
    <Tabs>
        <Tabs.Screen name='index' options={{title:"Profile"}}/>
        <Tabs.Screen name='groups' options={{title:"Groups"}}/>
    </Tabs>
  )
}

export default TabLayout