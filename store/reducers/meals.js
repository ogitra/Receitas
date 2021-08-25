import mealsReady from '../../data/meals';
import { FILTERED_MEALS, TOOGLE_FAVORITE } from '../actions/meals';

const initialState = {
  meals: mealsReady,
  filteredMeals: mealsReady,
  favoriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOOGLE_FAVORITE:
      const existingMeals = state.favoriteMeals.findIndex((item) => item.id === action.mealId);

      if (existingMeals < 0) {
        const updatedFavoriteMeals = [...state.favoriteMeals];

        updatedFavoriteMeals.unshift(state.meals.find((item) => item.id === action.mealId));

        return { ...state, favoriteMeals: updatedFavoriteMeals };
      } else {
        const updatedFavoriteMeals = [...state.favoriteMeals];

        updatedFavoriteMeals.splice(
          updatedFavoriteMeals.findIndex((item) => item.id === action.mealId),
          1
        );

        return { ...state, favoriteMeals: updatedFavoriteMeals };
      }
    case FILTERED_MEALS:
      const updateFilteredMeals = state.meals.filter((item) => {
        if (action.filtered.isGlutenFree && !item.isGlutenFree) {
          return false;
        }
        if (action.filtered.isLactoseFree && !item.isLactoseFree) {
          return false;
        }
        if (action.filtered.isVegan && !item.isVegan) {
          return false;
        }
        if (action.filtered.isVegetarian && !item.isVegetarian) {
          return false;
        }
        return true;
      });

      return { ...state, filteredMeals: updateFilteredMeals };

    default:
      return state;
  }
};

export default mealsReducer;
