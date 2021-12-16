export default async ({ id, name }, _, { cache }) => {
  console.info('file called');
  return `http://image.ingredient.com/${id}/${name}`;
};
