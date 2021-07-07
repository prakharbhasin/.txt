const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { token } = require("morgan");

//Sign Up Utils
const hashPass = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        reject(err);
      }
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
          reject(err);
        }
        resolve(hash);
      });
    });
  });
};

const avatarURLGenerator = (name) => {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(
    name
  )}&background=random&bold=true`;
};

const createToken = (userInfo) => {
  const auth_token = jwt.sign(userInfo, process.env.JWT_SECRET, {
    expiresIn: "7d",
    algorithm: process.env.JWT_ALGO,
  });

  return auth_token;
};

const handleErrors = (error) => {
  const err = { message: "", code: 406, success: false };

  if (error.code === 11000) {
    err.message = "User with entered email ID already exists!";
    err.code = 409;
    return err;
  }
};

//SignIn Utils
const verifyPass = (inputPass, hashedPass) => {
  return bcrypt.compare(inputPass, hashedPass);
};

module.exports = {
  hashPass,
  avatarURLGenerator,
  verifyPass,
  handleErrors,
  createToken,
};
