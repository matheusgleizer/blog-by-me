// import {User} from '../models/user.model';

// const addGoogleUser: any =
//   (User: any) =>
//   ({ id, email, firstName, lastName, profilePhoto }) => {
//     const user = new User({
//       id,
//       email,
//       firstName,
//       lastName,
//       profilePhoto,
//       source: 'google',
//     });
//     return user.save();
//   };

// const getUsers: any = (User: any) => () => {
//   return User.find({});
// };

// const getUserByEmail =
//   (User: any) =>
//   async ({ email }) => {
//     return await User.findOne({ email });
//   };

// module.exports = (User: any) => {
//   return {
//     addGoogleUser: addGoogleUser(User),
//     getUsers: getUsers(User),
//     getUserByEmail: getUserByEmail(User),
//   };
// };
