import { SessionProvider } from 'next-auth/react';
import './styles.css';

import type { AppProps } from 'next/app';
import type { Session } from 'next-auth';
import { ApolloProvider } from '@apollo/client';
import { client } from '../graphql/apollo-client';

// Use of the <SessionProvider> is mandatory to allow components that call
// `useSession()` anywhere in your application to access the `session` object.
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <ApolloProvider client={client}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ApolloProvider>
  );
}
