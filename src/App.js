import React, { useState } from 'react';
import {
  NavigationContainer,
} from '@react-navigation/native';
import { FavoritesContextProvider } from './contexts/FavoritesContext';

import Tabs from './navigation/Tabs';

export default function App() {
  return (
    <FavoritesContextProvider>
      <NavigationContainer >
        <Tabs />
      </NavigationContainer>
    </FavoritesContextProvider>
  )
}