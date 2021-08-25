import React from 'react';
import { Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

import { Colors } from '../../defaultStyles/DefaultStyles';

const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
      IconComponent={Ionicons}
      iconSize={18}
      color={Platform.OS === 'android' ? 'white' : Colors.Primary}
      {...props}
    ></HeaderButton>
  );
};

export default CustomHeaderButton;
