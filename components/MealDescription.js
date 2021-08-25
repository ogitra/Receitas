import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, ScrollView } from 'react-native';
import { Colors } from '../defaultStyles/DefaultStyles';

const MealDescription = (props) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imgAndTitle}>
          <Image
            style={styles.image}
            source={{
              uri: props.image,
            }}
          ></Image>
          <Text style={styles.mainTitle}>{props.title}</Text>
        </View>
        <View style={styles.ingAndComplexityContainer}>
          <View style={styles.ingredients}>
            <Text style={styles.title}>Ingredientes</Text>
            {props.ingredients.map((item) => {
              return (
                <Text key={Math.random()} style={styles.ingItem}>
                  {item}
                </Text>
              );
            })}
          </View>
          <View style={styles.mealComplexity}>
            <View style={styles.mealComplexityItemGroup}>
              <Text style={styles.mealComplexityItemTitle}>Custo</Text>
              <Text>{props.affordability}</Text>
            </View>
            <View style={styles.mealComplexityItemGroup}>
              <Text style={styles.mealComplexityItemTitle}>Dificuldade</Text>
              <Text>{props.complexity}</Text>
            </View>
            <View style={styles.mealComplexityItemGroup}>
              <Text style={styles.mealComplexityItemTitle}>Tempo</Text>
              <Text>{props.duration} min</Text>
            </View>
          </View>
        </View>

        <View style={styles.stepsContainer}>
          <Text style={styles.stepsTitle}>Preparo</Text>
          {props.steps.map((item) => {
            return (
              <Text key={Math.random()} style={styles.ingItem}>
                {item}
              </Text>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDescription;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgAndTitle: {
    marginBottom: 20,
    alignItems: 'center',
    width: '100%',
  },
  image: {
    height: 150,
    width: '100%',
  },
  mainTitle: {
    fontSize: 20,
    fontFamily: 'openSansBold',
    color: Colors.Primary,
  },
  ingAndComplexityContainer: {
    flexDirection: 'row',
    width: '100%',
    padding: 10,
    justifyContent: 'space-between',
  },

  title: {
    fontFamily: 'openSansBold',
    fontSize: 20,
    marginBottom: 10,
  },
  ingItem: {
    fontSize: 15,
    marginVertical: 2,
    borderColor: '#ccc',
    borderBottomWidth: 1,
  },
  mealComplexity: {
    justifyContent: 'space-around',
  },

  mealComplexityItemGroup: {
    alignItems: 'center',
  },
  mealComplexityItemTitle: {
    color: Colors.Secondary,
    fontSize: 17,
  },
  stepsContainer: { paddingHorizontal: 10 },

  stepsTitle: {
    fontFamily: 'openSansBold',
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
});
