import 'dotenv/config';
import express, { Request, Response } from 'express';
import { ApolloServer } from 'apollo-server-express';
import { db } from './database';
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';
import { middleware } from './config/middleware';
import {
  AuthenticationError,
  ApolloServerPluginLandingPageGraphQLPlayground,
} from 'apollo-server-core';
import { tokenGenerator, getUserByToken } from './config/middleware/auth';
import 'dotenv/config';

const { PORT, NODE_ENV, DEV_ORIGIN, PROD_ORIGIN } = process.env;

const app: express.Application = express();
const port: string | number = PORT || 5050;
const isDevelopment: boolean = NODE_ENV === 'development';
// const staticDir: string = isDevelopment ? './dist' : '.';
// const origin: string = isDevelopment ? DEV_ORIGIN : PROD_ORIGIN;

const corsOptions = {
  credentials: true,
  origin: "http://localhost:3000"
};


middleware(app);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
  context: ({ req, res }) => {
    console.log(req.cookies)

    try {
      const token = req.cookies('auth-token');

      if (!token) {
        return { user: null };
      }

      const user = getUserByToken(token);

      if (user) {
        return { user, isAuthenticated: true, token };
      }
    } catch (err) {
      return new AuthenticationError('User is not authenticated');
    }
  },
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  // formatResponse: (response, requestContext) => {},
});

const startServer = async (): Promise<void> => {
  try {
    await server.start();
    server.applyMiddleware({
      app,
      cors: corsOptions,
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
