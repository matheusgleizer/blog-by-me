"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userQuery_1 = require("./resolvers/userResolvers/userQuery");
const userMutation_1 = require("./resolvers/userResolvers/userMutation");
const resolvers = {
    Query: {
        getUserByEmail: userQuery_1.getUserByEmail,
        isAuthenticated: userQuery_1.isAuthenticated,
    },
    Mutation: {
        createUser: userMutation_1.createUser,
        signInUser: userMutation_1.signInUser,
        signOutUser: userMutation_1.signOutUser
    },
};
exports.default = resolvers;
