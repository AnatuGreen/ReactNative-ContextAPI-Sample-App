import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import List from '../screens/List'
import Favorites from '../screens/Favorites'

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="List" component={List} options={{ headerShown: false }} />
      <Stack.Screen name="Favorites" component={Favorites} options={{ headerShown: false }}  />
    </Stack.Navigator>
  )
}