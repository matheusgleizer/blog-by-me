// import passportGoogle from 'passport-google-oauth20';
// import { User } from '../../database/models/user.model';
// const GoogleStrategy = passportGoogle.Strategy;

// const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || '';
// const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || '';

// module.exports = (passport: any) => {
//   passport.use(
//     new GoogleStrategy(
//       {
//         clientID: GOOGLE_CLIENT_ID,
//         clientSecret: GOOGLE_CLIENT_SECRET,
//         callbackURL: '/auth/google/callback',
//       },
//       async (accessToken: any, refreshToken: any, profile: any, done: any) => {
//         const newUser = {
//           googleId: profile.id,
//           displayName: profile.displayName,
//           firstName: profile.name.givenName,
//           lastName: profile.name.familyName,
//           image: profile.photos[0].value,
//         };

//         try {
//           let user = await User.findOne({ googleId: profile.id });

//           if (user) {
//             done(null, user);
//           } else {
//             user = await User.create(newUser);
//             done(null, user);
//           }
//         } catch (err) {
//           console.error(err);
//         }
//       }
//     )
//   );

//   passport.serializeUser((user: any, done: any) => {
//     done(null, user.id);
//   });

//   passport.deserializeUser((id: any, done: any) => {
//     User.findById(id, (err: any, user: any) => done(err, user));
//   });
// };
