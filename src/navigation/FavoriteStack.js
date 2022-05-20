import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Favorites from '../screens/Favorites'

const Stack = createNativeStackNavigator();

export default function FavoriteStack() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Favourites" component={Favorites} options={{ headerShown: false }}  />
    </Stack.Navigator>
  )
}