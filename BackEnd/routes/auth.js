const router = require("express").Router();
const authController = require("../controllers/auth");
const passport = require("passport");

router.post("/signin", (req, res) => {
  authController.signIn(req, res);
});
router.post("/signup", (req, res) => {
  authController.signUp(req, res);
});

module.exports = { router };
