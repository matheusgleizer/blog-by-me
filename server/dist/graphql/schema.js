"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const typeDefs = (0, apollo_server_express_1.gql) `
  scalar Date
  type User {
    _id: String
    displayName: String
    firstName: String!
    lastName: String!
    image: String
    googleId: String
    createdAt: Date
    email: String
    password: String
  }
  type IsAuthenticated {
    status: Int!
  }
  type SignIn {
    isAuthenticated: Boolean!
  }
  type CreateAccountPayload {
    _id: String!
    token: String!
    email: String!
  }
  input UserCredentials {
    _id: String
    displayName: String!
    firstName: String!
    lastName: String!
    image: String
    googleId: String
    createdAt: Date
    email: String!
    password: String!
  }
  input GetUserByEmail {
    email: String!
  }
  type SignOutUser {
    status: Int!
  }
  type Query {
    getUserByEmail(input: GetUserByEmail): User
    isAuthenticated: IsAuthenticated
  }
  type Mutation {
    createUser(input: UserCredentials): User!
    signInUser(input: UserCredentials): SignIn!
    signOutUser: SignOutUser!
  }
`;
exports.default = typeDefs;
