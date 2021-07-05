const router = require("express").Router();
const authController = require("../controllers/auth");

router.post("/signin", authController.signIn);
router.post("/signup", authController.signUp);

module.exports = { router };
