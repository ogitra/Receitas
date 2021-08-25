export const TOOGLE_FAVORITE = 'TOOGLE_FAVORITE';
export const TOOGLE_MODAL = 'TOOGLE_MODAL';
export const FILTERED_MEALS = 'FILTERED_MEALS';

export const toogleFavorite = (id) => {
  return { type: TOOGLE_FAVORITE, mealId: id };
};

export const toogleModal = () => {
  return { type: TOOGLE_MODAL };
};

export const filteredMeals = (filterSettings) => {
  return { type: FILTERED_MEALS, filtered: filterSettings };
};
