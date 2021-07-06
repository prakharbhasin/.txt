const Users = require("../models/User");
const localStrategy = require("passport-local").Strategy;
const authUtil = require("../utils/auth");

const signUp = async (req, res) => {
  let userDetails = req.body;

  const avatarUrl = await authUtil.avatarURLGenerator(userDetails.name);
  userDetails.displayPicture = avatarUrl;
  Users.create(userDetails).then((newUser) => {
    const { email, _id, name, username, image, accountType, displayPicture } =
      newUser;
    return res.status(201).send({
      message: "Successfully registered!",
    });
  });
};

const signIn = (passport) => {
  passport.use(
    new localStrategy({ usernameField: "email" }, (email, password, finish) => {
      Users.findOne({ email: email }).then((currUser) => {
        if (!currUser) {
          return finish(null, false, {
            message: "No User with the given email is registered",
          });
        }
        const matchPass = authUtil.verifyPass(password, currUser.password);
        if (matchPass) {
          return finish(null, user);
        } else {
          return finish(null, false, {
            message: "The entered Password is Incorrect",
          });
        }
      });
    })
  );
  passport.serializeUser(function (currUser, finish) {
    finish(null, currUser.id);
  });

  passport.deserializeUser(function (id, finish) {
    Users.findById(id, function (err, currUser) {
      finish(err, currUser);
    });
  });
};
module.exports = {
  signIn,
  signUp,
};
