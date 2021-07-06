const Users = require("../models/User");
const authUtils = require("../utils/auth");
const localStrategy = require("passport-local").Strategy;

module.exports = (passport) => {
  passport.use(
    new localStrategy({ usernameField: "email" }, (email, password, done) => {
      Users.findOne({ email: email }).then(async (currUser) => {
        if (!currUser) {
          return done(null, false, {
            message: "No User with the given email is registered",
          });
        }
        const matchPass = await authUtils.verifyPass(
          password,
          currUser.password
        );

        if (matchPass) {
          return done(null, currUser, {
            message: "Authentication successful!",
          });
        } else {
          return done(null, false, {
            success: false,
            message: "The entered Password is Incorrect",
          });
        }
      });
    })
  );
  passport.serializeUser(function (currUser, cb) {
    cb(null, currUser.id);
  });

  passport.deserializeUser(function (id, cb) {
    Users.findById(id, function (err, currUser) {
      cb(err, currUser);
    });
  });
};
