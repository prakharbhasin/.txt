const mongoose = require("mongoose");
const { isEmail } = require("validator");

const Schema = mongoose.Schema;

const userSchema = Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      validate: isEmail,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    displayPicture: {
      type: String,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      min: 3,
      required: true,
    },
    accountType: {
      type: String,
      required: true,
    },
    friends: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

userSchema.statics.signin = async function (email, password) {
  const currUser = await this.findOne({ email });

  if (currUser) {
    const success = authUtils.verifyPass(password, currUser.password);

    if (success) {
      return currUser;
    }
    throw Error("Entered Password is incorrect.");
  }
  throw Error("No User with the given Email address exists.");
};

const User = mongoose.model("User", userSchema);
module.exports = User;

// userSchema.pre()
