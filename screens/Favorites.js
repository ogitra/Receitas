import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useSelector } from 'react-redux';
import ListMeals from '../components/ListMeals';

const Favorites = () => {
  const state = useSelector((state) => state.meals.favoriteMeals);

  return (
    <View>
      <ListMeals data={state} />
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({});
