import knex from 'knex';

const knexConnection = knex({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'clash',
    port: 5436,
  },
  options: {
    enableArithAbort: false,
  },
});

export default knexConnection;
