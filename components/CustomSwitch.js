import React from 'react';
import { StyleSheet, Switch, View, Text } from 'react-native';
import { Colors } from '../defaultStyles/DefaultStyles';

const CustomSwitch = ({ value, onChange, label }) => {
  return (
    <View style={styles.switch}>
      <Text style={styles.text}>{label}</Text>

      <Switch
        trackColor={{ false: '#ccc', true: Colors.Primary }}
        thumbColor={Colors.Primary}
        ios_backgroundColor='#3e3e3e'
        onValueChange={onChange}
        value={value}
      />
    </View>
  );
};

export default CustomSwitch;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'openSansRegular',
    fontSize: 16,
  },
  switch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
});
