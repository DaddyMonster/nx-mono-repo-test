import { createConnection, ConnectionOptions } from 'typeorm';
import { resolve } from 'path';

const pgProdOptions: ConnectionOptions = {
  type: 'postgres',
  database: process.env.PG_DATABASE,
  host: process.env.PG_HOST,
  username: process.env.PG_USERNAME,
  password: process.env.PG_PASSWORD,
  logging: false,
  synchronize: true,
  /* dropSchema: true, */
  port: process.env.PG_PORT,
  entities: [resolve(__dirname, '..', 'model-entities/**/*entity.js')],
};

const pgDevOption = Object.assign(pgProdOptions, { logging: true });

export const connectionOption =
  process.env.NODE_ENV === 'production' ? pgProdOptions : pgDevOption;

export const createPgConnection = async () =>
  createConnection(connectionOption);
