import 'dotenv/config';
import path from 'path';
import express, { Request, Response } from 'express';
import { ApolloServer } from 'apollo-server-express';
import { db } from './database';
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';
import { middleware } from './config/middleware';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';

const { PORT, NODE_ENV, DEV_ORIGIN, PROD_ORIGIN } = process.env;

const app: express.Application = express();
const port: string | number = PORT || 3000;
const isDevelopment: boolean = NODE_ENV === 'development';
// const staticDir: string = isDevelopment ? './dist' : '.';
const origin: string = isDevelopment ? DEV_ORIGIN : PROD_ORIGIN;

interface CorsOpts {
  origin: string;
  credentials: boolean;
}

const cors: CorsOpts = {
  origin,
  credentials: true,
};

middleware(app);

app.get('', (_req: Request, res: Response): void => {
  res.send('hello world');
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
  context: async ({ req, res }): Promise<{ req: object; res: object }> => ({
    req,
    res,
  }),
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

const startServer = async (): Promise<void> => {
  try {
    await server.start();
    server.applyMiddleware({
      app,
      cors,
      path: '/graphql',
    });
    app.listen(port, () => {
      console.log(`Express server listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

db.connect().then((): Promise<void> => startServer());
