import * as Express from 'express';
import { createPgConnection } from '../lib/pg';
import { buildSchema } from 'type-graphql';
import { resolve } from 'path';
import { graphqlUploadExpress } from 'graphql-upload';
import compression from 'compression';
import * as cors from 'cors';

const bootstrap = async () => {
  await createPgConnection();

  const schema = await buildSchema({
    resolvers: [resolve(__dirname, `graphql/**/*.resolvers.js`)], // graphql 폴더에 리졸버 파일 작성!`
    validate: true,
    orphanedTypes: [],
  });

  const app = Express();

  app.use(graphqlUploadExpress());
  app.use(cors());
  app.use(compression());
};

bootstrap();
