import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import ListMeals from '../components/ListMeals';
import { useSelector } from 'react-redux';

const CategoryMeal = ({ route }) => {
  const { categoryId } = route.params;
  const state = useSelector((state) => state.meals.filteredMeals);

  const mealsFilteredbyCategory = state.filter((item) => item.categoryIds.includes(categoryId));

  if (mealsFilteredbyCategory.length === 0) {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.text}>Não há receitas nesta categoria para o filtro selecionado</Text>
      </View>
    );
  }

  return (
    <View style={{ ...styles.container }}>
      <ListMeals data={mealsFilteredbyCategory} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'openSansBold',
    textAlign: 'center',
  },
});

export default CategoryMeal;
