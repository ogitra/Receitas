import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HeaderNavigator from './HeaderNavigator';
import { Colors } from '../../defaultStyles/DefaultStyles';
import FavoriteBottomIconNavigator from './FavoriteBottomIconNavigator';

const Tab = createMaterialBottomTabNavigator();

const TabNavigatorAndroid = () => {
  return (
    <Tab.Navigator activeColor='white' inactiveColor='gray' shifting={true}>
      <Tab.Screen
        name='HeaderNavigator'
        component={HeaderNavigator}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name={'ios-restaurant'} size={24} color={color} />,
          tabBarColor: Colors.Primary,
          tabBarLabel: <Text style={styles.tabBarLabelText}>Receitas</Text>,
        }}
      />
      <Tab.Screen
        name='Favorites'
        component={FavoriteBottomIconNavigator}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name={'ios-star'} size={24} color={color} />,
          tabBarColor: Colors.Secondary,
          tabBarLabel: <Text style={styles.tabBarLabelText}>Favoritos</Text>,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarLabelText: {
    fontFamily: 'openSansBold',
  },
});

export default TabNavigatorAndroid;
