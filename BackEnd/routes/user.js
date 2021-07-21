const router = require("express").Router();
const userController = require("../controllers/users");

router.get("/all/:id", async (req, res) => {
  userController.getAll(req, res);
});

module.exports = {
  router,
};
