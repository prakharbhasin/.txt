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
      const { email, _id, name, username, accountType, displayPicture } =
        newUser;
      const userInfo = {
        email,
        _id,
        name,
        username,
        accountType,
        displayPicture,
      };
      const auth_token = authUtil.createToken(userInfo);
      return res.status(201).send({
        message: "Successfully registered!",
        success: true,
        userInfo,
        auth_token,
      });
    })
    .catch((err) => {
      console.log(err);
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
        const { email, _id, name, username, accountType, displayPicture } =
          logUser;
        const userInfo = {
          email,
          _id,
          name,
          username,
          accountType,
          displayPicture,
        };

        const auth_token = authUtil.createToken(userInfo);
        res.send({
          auth_token,
          message: `Welcome back, ${userInfo.name}`,
          success: true,
          userInfo,
        });
      });
    }
  })(req, res, next);
};

const handleLog = (req, res) => {};

module.exports = {
  signIn,
  signUp,
};
