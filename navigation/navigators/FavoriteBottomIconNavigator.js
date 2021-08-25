import React from 'react';
import { Platform } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import Favorites from '../../screens/Favorites';

import { Colors } from '../../defaultStyles/DefaultStyles';

const Stack = createStackNavigator();

const FavoriteBottomIconNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.Secondary : '',
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.Secondary,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen name='Favoritos ' component={Favorites} />
    </Stack.Navigator>
  );
};

export default FavoriteBottomIconNavigator;
