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
import cors from 'cors';

const { PORT, NODE_ENV, DEV_ORIGIN, PROD_ORIGIN } = process.env;

const app: express.Application = express();
app.use(cors())
const port: string | number = PORT || 3000;
const isDevelopment: boolean = NODE_ENV === 'development';
// const staticDir: string = isDevelopment ? './dist' : '.';
const origin: string = isDevelopment ? DEV_ORIGIN : PROD_ORIGIN;

middleware(app);

app.get('', (_req: Request, res: Response): void => {
  res.send('hello world');
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: false,
  cache: 'bounded',
  context: ({ req, res }) => {
    try {
      const token = req.headers.authorization;

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
