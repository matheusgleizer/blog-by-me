import { getUserByEmail, isAuthenticated } from './resolvers/userResolvers/userQuery';
import { createUser, signInUser, signOutUser } from './resolvers/userResolvers/userMutation';


const resolvers = {
  Query: {
    getUserByEmail,
    isAuthenticated,
  },
  Mutation: {
    createUser,
    signInUser,
    signOutUser
  },
};

export default resolvers;
