export default async (_, { id }, { cache }) => {
  const ingredients = await cache.get(`plate:${id}`).then((item) => item && JSON.parse(item));

  return {
    ingredients: ingredients ?? [],
  };
};
