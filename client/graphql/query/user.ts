import { gql, useQuery } from "@apollo/client";

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
`