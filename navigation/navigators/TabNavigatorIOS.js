import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';
import HeaderNavigator from './HeaderNavigator';
import { Colors } from '../../defaultStyles/DefaultStyles';
import FavoriteBottomIconNavigator from './FavoriteBottomIconNavigator';

const Tab = createBottomTabNavigator();

const TabNavigatorIOS = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarActiveTintColor: Colors.Secondary, tabBarInactiveTintColor: 'gray' }}
    >
      <Tab.Screen
        name='HeaderNavigator'
        component={HeaderNavigator}
        options={{
          title: 'Receitas',
          tabBarIcon: ({ color }) => <Ionicons name={'ios-restaurant'} size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name='Favorites'
        component={FavoriteBottomIconNavigator}
        options={{
          title: 'Favoritos',
          tabBarIcon: ({ color }) => <Ionicons name={'ios-star'} size={24} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigatorIOS;
