import React from 'react';
import MealDescription from '../components/MealDescription';
import { useSelector } from 'react-redux';

const MealDetails = ({ route }) => {
  const { id } = route.params;
  const state = useSelector((state) => state.meals.meals);

  const mealSelected = state.filter((item) => item.id == id);

  return (
    <MealDescription
      id={mealSelected[0].id}
      title={mealSelected[0].title}
      image={mealSelected[0].imageUrl}
      steps={mealSelected[0].steps}
      ingredients={mealSelected[0].ingredients}
      complexity={mealSelected[0].complexity}
      affordability={mealSelected[0].affordability}
      duration={mealSelected[0].duration}
    ></MealDescription>
  );
};

export default MealDetails;
