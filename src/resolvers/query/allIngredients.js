export default (_, __, { dataSources }) => {
  return dataSources.ingredientDataSource.getIngredients();
};
