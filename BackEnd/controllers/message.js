const Messages = require("../models/Message");

const newMessage = async (req, res) => {
  let msgDetails = req.body;
  Messages.create(msgDetails)
    .then((newMsg) => {
      const { _id, text, conversation, senderName, senderImage } = newMsg;
      const msgInfo = { _id, text, conversation, senderName, senderImage };
      return res.status(201).send({
        success: true,
        message: "Message Sent!",
        msgInfo,
      });
    })
    .catch((err) => {
      res.send({
        success: false,
        message: "An Error Occurred while Sending Message",
      });
    });
};

const getMessages = async (req, res) => {
  const convoID = req.params.convoID;
  console.log(convoID);
  await Messages.find({
    conversation: convoID,
  })
    .then((messages) => {
      res.send({ success: true, messages });
    })
    .catch((err) => {
      res.send({ sucess: false, message: "Error Loading Messages!" });
    });
};

module.exports = {
  newMessage,
  getMessages,
};
