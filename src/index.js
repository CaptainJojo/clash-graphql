import { createServer } from 'http';
import { execute, subscribe } from 'graphql';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { makeExecutableSchema } from '@graphql-tools/schema';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import resolvers from './resolvers';
import typeDefs from './typeDefs';
import { IngredientDataSource } from './dataSources/ingredientDataSource';
import db from './db/db';
import { redisCache } from './cache/redis';

(async function () {
  const app = express();

  const httpServer = createServer(app);

  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  const subscriptionServer = SubscriptionServer.create(
    { schema, execute, subscribe },
    { server: httpServer, path: '/graphql' }
  );

  const ingredientDataSource = new IngredientDataSource(db);
  const server = new ApolloServer({
    schema,
    context: (ctx) => {
      return { ...ctx, cache: redisCache };
    },
    cache: redisCache,
    dataSources: () => ({ ingredientDataSource }),
    plugins: [
      {
        async serverWillStart() {
          return {
            async drainServer() {
              subscriptionServer.close();
            },
          };
        },
      },
    ],
  });
  await server.start();
  server.applyMiddleware({ app });

  const PORT = 4000;
  httpServer.listen(PORT, () => console.log(`Server is now running on http://localhost:${PORT}/graphql`));
})();
