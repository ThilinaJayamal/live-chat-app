import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const TabLayout = () => {
  return (
    <Tabs>
        <Tabs.Screen name='index' options={{title:"Profile"}}/>
        <Tabs.Screen name='groups' options={{title:"Groups"}}/>
    </Tabs>
  )
}

export default TabLayout