import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';

const ListCategories = (props) => {
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <TouchableCmp onPress={props.onPressHandler}>
      <View style={{ ...styles.listItem, backgroundColor: props.color }}>
        <Text style={styles.listTitle}>{props.name}</Text>
      </View>
    </TouchableCmp>
  );
};

export default ListCategories;

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 10,
    elevation: 8,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 15,
  },
  listTitle: {
    fontFamily: 'openSansRegular',
    textAlign: 'right',
    fontSize: 16,
  },
});
