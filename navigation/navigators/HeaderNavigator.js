import React, { useState } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../../components/UI/CustomHeaderButton';
import MainPage from '../../screens/MainPage';
import CategoryMeal from '../../screens/CategoryMeal';
import MealDetails from '../../screens/MealDetails';
import Filters from '../../screens/Filters';
import Favorites from '../../screens/Favorites';
import { Colors } from '../../defaultStyles/DefaultStyles';
import { useDispatch, useSelector } from 'react-redux';
import { toogleFavorite, toogleModal } from '../../store/actions/meals';

const Stack = createStackNavigator();

const HeaderNavigator = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.meals.favoriteMeals);
  const stateModal = useSelector((state) => state.modal.modal);

  const toogleFavoriteHandler = (id) => {
    dispatch(toogleFavorite(id));
  };

  const toogleModalHandler = () => {
    dispatch(toogleModal(!stateModal));
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.Primary : '',
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.Primary,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen
        name='Receitas'
        children={MainPage}
        options={{
          title: 'Receitas',
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item iconName={'ios-menu'} title='menu' onPress={toogleModalHandler} iconSize={27} />
            </HeaderButtons>
          ),
        }}
      />
      <Stack.Screen
        name='CategoryMeal'
        component={CategoryMeal}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
      <Stack.Screen
        name='MealDetails'
        component={MealDetails}
        options={({ route }) => {
          const isFav = state.some((item) => item.id === route.params.id);

          return {
            title: 'Preparo',
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                  iconName={isFav ? 'ios-star' : 'ios-star-outline'}
                  title='favorite'
                  onPress={() => toogleFavoriteHandler(route.params.id)}
                />
              </HeaderButtons>
            ),
          };
        }}
      />
      <Stack.Screen
        name='Filters'
        component={Filters}
        options={() => ({
          title: 'Filtro',
        })}
      />
    </Stack.Navigator>
  );
};

export default HeaderNavigator;
