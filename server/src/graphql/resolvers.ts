import { createUser, signInUser, signOutUser } from './resolvers/userResolvers/userMutation';


const resolvers = {
  Mutation: {
    createUser,
    signInUser,
    signOutUser
  },
};

export default resolvers;
