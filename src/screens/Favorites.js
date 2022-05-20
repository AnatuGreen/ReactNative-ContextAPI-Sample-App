import React, { useState, useContext } from 'react';
import {
  FlatList,
  Image,
  Text,
  View,
  StyleSheet
} from 'react-native';
import {  MaterialIcons } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native';
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

const styles = StyleSheet.create({
  listContainer: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 30,
    borderRadius: 8,
    backgroundColor: '#edf2fb'
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    opacity: 0.7
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    fontColor: '#010101'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8
  },
  icon: {
    position: 'absolute',
    top: 10,
    right: 10
  },
  header: {
    alignItems: 'center',
    marginTop: 50,
  }
});