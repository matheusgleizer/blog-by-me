import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

const cache = new InMemoryCache();

const link = createHttpLink({
  uri: 'http://localhost:5050/graphql',
  credentials: 'include',
});

export const client = new ApolloClient({
  link,
  cache: cache,
  version: '1.3',
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all',
    },
    mutate: {
      errorPolicy: 'all',
    },
  },
  ssrMode: true,
  headers: {
    contentType: 'application/graphql',
  },
});
