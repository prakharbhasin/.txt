const router = require("express").Router();
const convoController = require("../controllers/conversation");

router.get("/getall/:userID", (req, res) => {
  convoController.getAllConversations(req, res);
});

router.get("/getdetails/:convoID", (req, res) => {
  convoController.getConvoDetails(req, res);
});

router.post("/create", (req, res) => {
  convoController.createConversation(req, res);
});

module.exports = { router };
