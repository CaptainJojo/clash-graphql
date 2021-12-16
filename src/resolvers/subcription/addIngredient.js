import { pubsub } from '../../pubsub';

const ADD_INGREDIENT = 'add_ingredient';
export default {
  subscribe: () => pubsub.asyncIterator([ADD_INGREDIENT]),
};
