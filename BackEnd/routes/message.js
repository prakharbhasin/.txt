const router = require("express").Router();
const msgController = require("../controllers/message");

router.get("/home", async (req, res) => {
  res.send("hello from messages route");
});

router.post("/new", async (req, res) => {
  msgController.newMessage(req, res);
});

module.exports = { router };
