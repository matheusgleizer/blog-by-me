import { getProviders, signIn } from 'next-auth/react';
import React from 'react';
import CredentialsSignIn from './email-signin';
import { Button } from '@mui/material';

export default function SignIn({ providers }: any): React.ReactNode {
  return (
    <>
      <Button href='/auth/email-signin'>Sign in with email</Button>
      {Object.values(providers).map((provider: any) => (
        <div key={provider.name}>
          <Button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </Button>
        </div>
      ))}
    </>
  );
}

export async function getServerSideProps(context: any) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
