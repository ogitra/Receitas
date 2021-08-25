import React from 'react';
import { FlatList } from 'react-native';
import MealCard from './MealCard';
import { useNavigation } from '@react-navigation/native';

const ListMeals = ({ data }) => {
  const navigation = useNavigation();

  return (
    <FlatList
      key={Math.random()}
      numColumns={1}
      data={data}
      renderItem={(itemData) => {
        return (
          <MealCard
            title={itemData.item.title}
            image={itemData.item.imageUrl}
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}
            duration={itemData.item.duration}
            onPressHandler={() => navigation.navigate('MealDetails', { id: itemData.item.id })}
          ></MealCard>
        );
      }}
    />
  );
};

export default ListMeals;
