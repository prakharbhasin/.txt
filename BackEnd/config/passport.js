// const GoogleStrategy = require("passport-google-oauth20").Strategy;
// const mongoose = require("mongoose");
// const User = require("../models/User");

// module.exports = function (passport) {
//   passport.use(
//     new GoogleStrategy(
//       {
//         clientID: process.env.GOOGLE_CLIENT_ID,
//         clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//         callbackURL: "/auth/google/callback",
//       },
//       async (accessToken, refreshToken, profile, success) => {
//         // console.log(profile);
//         const newUser = {
//           id: profile.id,
//           displayName: profile.displayName,
//           firstName: profile.firstName,
//           lastName: profile.lastName,
//           image: profile.photos[0].value,
//           accountType:''
//         };
//         try {
//           let user = await User.findOne({ id: profile.id });
//           if (user) {
//             success(null, user);
//           } else {
//             user = await User.create(newUser);
//             success(null, user);
//           }
//         } catch (err) {
//           console.error(err);
//         }
//       }
//     )
//   );
//   passport.serializeUser((user, success) => {
//     success(null, user.id);
//   });

//   passport.deserializeUser((id, success) => {
//     User.findById(id, (err, user) => success(err, user));
//   });
// };
