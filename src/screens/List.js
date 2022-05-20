import React, { useState, useContext } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Fetch } from 'react-request';
import RenderItem from '../components/RenderItem';

import { useNavigation, useRoute } from '@react-navigation/native';

export default function List() {
  const navigation = useNavigation();

  const renderHeader = () => {
    return (
      <TouchableOpacity
        style={styles.header}
        onPress={() =>
          navigation.navigate('Favorites')
        }
      >
        <Text style={styles.text}>Go to favorites</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Fetch
      method='GET'
      url={`https://example-data.draftbit.com/restaurants?_limit=10`}
      headers={{
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }}
    >
      {({ loading, error, data }) => {
        if (loading) {
          return <ActivityIndicator />;
        }

        if (error) {
          return null;
        }

        if (!data) {
          return null;
        }

        return (
          <FlatList
            data={data}
            ListHeaderComponent={renderHeader}
            renderItem={({ item }) => {
              return (
                <RenderItem item={item} />
              );
            }}
          />
        );
      }}
    </Fetch>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#010101'
  },
  header: {
    alignItems: 'center',
    marginTop: 50,
  }
});