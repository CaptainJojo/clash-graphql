import { BaseRedisCache } from 'apollo-server-cache-redis';
import Redis from 'ioredis';

const redisOptions = {
  host: 'localhost',
  port: 6380,
};

export const redisCache = new BaseRedisCache({
  client: new Redis(redisOptions),
});
