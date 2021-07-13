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

module.exports = {
  newMessage,
};
