const Messages = require("../models/Message");

const newMessage = async (msgDetails) => {
  Messages.create(msgDetails).then((newMsg) => {
    const { _id, text, conversation, senderName, senderImage } = newMsg;
    const msgInfo = { _id, text, conversation, senderName, senderImage };
    global.io.emit("receive-msg", msgInfo);
  });
};

const getMessages = async (req, res) => {
  const convoID = req.params.convoID;
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
