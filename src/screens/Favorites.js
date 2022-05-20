import React, { useState, useContext } from 'react';
import {
  FlatList,
  StyleSheet
} from 'react-native';
import { FavoritesContext } from '../contexts/FavoritesContext';
import RenderItem from '../components/RenderItem';

export default function Favorites() {
  const { favoriteList } = useContext(FavoritesContext)

  return (
    <FlatList
      data={favoriteList}
      renderItem={({ item }) => {
        return (
          <RenderItem item={item} />
        );
      }}
    />
  );
};
