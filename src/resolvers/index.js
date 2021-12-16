import plate from './query/plate';
import allIngredients from './query/allIngredients';
import addIngredientInPlate from './mutation/addIngredientInPlate';
import file from './ingredient/file';
import addIngredient from './subcription/addIngredient';
import totalCalories from './plate/totalCalories';

export default {
  Query: {
    plate,
    allIngredients,
  },
  Mutation: {
    addIngredientInPlate,
  },
  Subscription: {
    addIngredient,
  },
  Ingredient: {
    file,
  },
  Plate: {
    totalCalories,
  },
};
