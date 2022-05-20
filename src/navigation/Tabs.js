import React, { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStack from './HomeStack';
import FavoriteStack from './FavoriteStack';

const Tab = createBottomTabNavigator();

export default function Tabs({navigation}) {

  return (
    <Tab.Navigator
      tabLabel={false}
      screenOptions={{
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: {
          height: 60,
          width: '90%',
          backgroundColor: '#b30000',
          borderBottomWidth: 0.5,
          borderRightWidth: 0.5,
          borderLeftWidth: 0.5,
          borderColor: 'white',
          position: 'absolute',
          borderRadius: 30,
          bottom: 5,
          left: 20,
          elevation: 0,
        }
      }} >
      <Tab.Screen name="Home" component={HomeStack}
       options={{
        title: 'Home',
        tabBarIcon: ({ focused, color }) => (
          <MaterialCommunityIcons name="home" color={focused ? 'white' : '#999999'} size={26} />)
      }} />
      {/* color={ focused ? 'red' : 'blue'} - this means that the colour of the icon is red when the tab icon is focused and blue when another tab icon is focused */}
      <Tab.Screen name='Favorites' component={FavoriteStack} options={{
        title: 'Favs',
        tabBarIcon: ({ focused, color }) => (
          <MaterialCommunityIcons name="heart" color={focused ? 'white' : '#999999'} size={26} />)
      }} />
   
    </Tab.Navigator>
  )
}