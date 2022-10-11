import { getCsrfToken } from 'next-auth/react';
import { signInCallback } from '../../utils/callback/signIn';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SIGN_IN_MUTATION } from '../../graphql/mutation/user';

export default function CredentialsSignIn({ csrfToken }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInUser, {data, loading, error}] = useMutation(SIGN_IN_MUTATION)

  if (loading) return 'Submitting...';
  if(error) console.log((JSON.stringify(error, null, 2)))
  if (error) return `Submission error! ${error.message}`;
  if(data) console.log(data)

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        signInUser({variables: {email: email, password: password}});
      }}
    >
      <input name='csrfToken' type='hidden' defaultValue={csrfToken} />
      <label>
        Email:
        <input
          name='email'
          type='text'
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          name='password'
          type='password'
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type='submit'>Sign in</button>
    </form>
  );
}

// export async function getServerSideProps(context: any) {
//   return {
//     props: {
//       csrfToken: await getCsrfToken(context),
//     },
//   };
// }
