import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  ImageBackground,
} from 'react-native';

const MealCard = (props) => {
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <TouchableCmp onPress={props.onPressHandler}>
      <View style={styles.container}>
        <View style={styles.bgImageContainer}>
          <ImageBackground
            style={styles.image}
            source={{
              uri: props.image,
            }}
          >
            <Text style={styles.listTitle}>{props.title}</Text>
          </ImageBackground>
        </View>

        <View style={styles.listItemDetails}>
          <Text>{props.duration}min</Text>
          <Text>{props.affordability}</Text>
          <Text>{props.complexity}</Text>
        </View>
      </View>
    </TouchableCmp>
  );
};

export default MealCard;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginHorizontal: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 10,
    elevation: 8,
    alignItems: 'center',
    height: 220,
    backgroundColor: 'white',
  },

  bgImageContainer: {
    height: '80%',
    width: '100%',
    marginBottom: 10,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  listTitle: {
    width: '100%',
    textAlign: 'center',
    fontFamily: 'openSansBold',
    fontSize: 17,
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: 'white',
    paddingVertical: 3,
  },

  listItemDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
  },
});
