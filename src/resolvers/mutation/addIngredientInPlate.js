import { pubsub } from '../../pubsub';

const ADD_INGREDIENT = 'add_ingredient';
export default async (_, { id, ingredientId }, { dataSources, cache }) => {
  const ingredient = await dataSources.ingredientDataSource.getById(ingredientId);

  let ingredients = await cache.get(`plate:${id}`).then((item) => item && JSON.parse(item));
  if (!ingredients) {
    ingredients = [ingredient[0]];
  } else {
    ingredients.push(ingredient[0]);
  }

  await cache.set(`plate:${id}`, JSON.stringify(ingredients));

  pubsub.publish(ADD_INGREDIENT, {
    addIngredient: ingredient[0],
  });

  return ingredient[0];
};
