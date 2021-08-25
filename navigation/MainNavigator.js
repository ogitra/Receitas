import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigatorAndroid from './navigators/TabNavigatorAndroid';
import TabNavigatorIOS from './navigators/TabNavigatorIOS';

const MainNavigator = () => {
  return (
    <NavigationContainer>
      {Platform.OS === 'android' ? <TabNavigatorAndroid /> : <TabNavigatorIOS />}
    </NavigationContainer>
  );
};

export default MainNavigator;
