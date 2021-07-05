const bcrypt = require("bcrypt");

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

//SignIn Utils
const verifyPass = (inputPass, hashedPass) => {
  return bcrypt.compare(inputPass, hashedPass);
};

module.exports = {
  hashPass,
  avatarURLGenerator,
  verifyPass,
};
