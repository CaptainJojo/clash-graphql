import { RedisPubSub } from 'graphql-redis-subscriptions';
import Redis from 'ioredis';

const redisOptions = {
  host: 'localhost',
  port: 6380,
};

export const getPubSubEngine = () => {
  return new RedisPubSub({
    publisher: new Redis(redisOptions),
    subscriber: new Redis(redisOptions),
  });
};

export const pubsub = getPubSubEngine();
