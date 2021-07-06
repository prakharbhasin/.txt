const mongoose = require("mongoose");
const { isEmail } = require("validator");
const authUtils = require("../utils/auth");

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

userSchema.pre("save", async function (next) {
  this.password = await authUtils.hashPass(this.password);

  next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;
