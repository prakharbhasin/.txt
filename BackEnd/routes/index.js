const router = require("express").Router();

const authRoute = require("./auth").router;
const convoRoute = require("./conversation").router;
const msgRoute = require("./message").router;

router.use("/auth", authRoute);
router.use("/conversation", convoRoute);
router.use("/message", msgRoute);

//testing
router.get("/home", (req, res) => {
  res.send("hello world");
});

module.exports = {
  router,
};
