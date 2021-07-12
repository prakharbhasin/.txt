const router = require("express").Router();

const authRoute = require("./auth").router;
const convoRoute = require("./conversation").router;

router.use("/auth", authRoute);
router.use("/conversation", convoRoute);

//testing
router.get("/home", (req, res) => {
  res.send("hello world");
});

module.exports = {
  router,
};
