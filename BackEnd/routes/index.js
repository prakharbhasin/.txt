const router = require("express").Router();

const authRoute = require("./auth").router;

router.use("/auth", authRoute);

//testing
router.get("/home", (req, res) => {
  res.send("hello world");
});

module.exports = {
  router,
};
