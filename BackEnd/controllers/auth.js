const passport = require("passport");
const Users = require("../models/User");
const authUtil = require("../utils/auth");

const signUp = async (req, res) => {
  let userDetails = req.body;

  const avatarUrl = await authUtil.avatarURLGenerator(userDetails.name);
  userDetails.displayPicture = avatarUrl;
  userDetails.accountType = "email";
  Users.create(userDetails)
    .then((newUser) => {
      const { email, _id, name, username, image, accountType, displayPicture } =
        newUser;
      return res.status(201).send({
        message: "Successfully registered!",
        success: true,
        userInfo,
      });
    })
    .catch((err) => {
      const errors = authUtil.handleErrors(err);
      res.send(errors);
    });
};

const signIn = (req, res, next) => {
  passport.authenticate("local", (err, logUser, info) => {
    if (err) throw err;
    if (!logUser) res.send(info);
    else {
      req.login(logUser, (err) => {
        if (err) throw err;
        res.send({
          message: `Successfully Authenticated, welcome back ${logUser.name}`,
          success: true,
          logUser,
        });
      });
    }
  })(req, res, next);
};

module.exports = {
  signIn,
  signUp,
};
