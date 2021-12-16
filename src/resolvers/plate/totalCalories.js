export default async ({ ingredients }, _, { cache }) => {
  let totalCalories = 0;

  ingredients.forEach(async (ingredient) => {
    totalCalories += ingredient.calorie;
  });

  return totalCalories;
};
