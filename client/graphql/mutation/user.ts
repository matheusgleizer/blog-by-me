import { gql } from '@apollo/client';

export const getUserByEmail = (email: string) => gql`
    query getUserByEmail(input: {${email}}) {
        _id
        displayName
        firstName
        lastName
        image
        googleId
        createdAt
        email
    }
`;

export const SIGN_IN_MUTATION = gql`
  mutation SignInMutation($email: String!, $password: String!) {
    signInUser(input: { email: $email, password: $password }) {
      isAuthenticated
      token
      user {
        _id
        displayName
        firstName
        lastName
        image
        googleId
        createdAt
        email
      }
    }
  }
`;
