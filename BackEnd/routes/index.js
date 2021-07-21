const router = require("express").Router();

const authRoute = require("./auth").router;
const convoRoute = require("./conversation").router;
const msgRoute = require("./message").router;
const userRoute = require("./user").router;

router.use("/auth", authRoute);
router.use("/conversation", convoRoute);
router.use("/message", msgRoute);
router.use("/user", userRoute);

module.exports = {
  router,
};
