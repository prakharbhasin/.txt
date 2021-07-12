const jwt = require("jsonwebtoken");

const Conversations = require("../models/Conversation");
const Users = require("../models/User");
const authUtil = require("../utils/auth");

const getAllConversations = async (req, res) => {
  const userID = req.params.userID;
  console.log(userID);

  await Conversations.find({
    members: { $in: [userID] },
  })
    .then((conversations) => {
      res.send({ success: true, conversations });
    })
    .catch((error) => {
      res.send({ success: false, message: "No Conversations!" });
    });
};

const createConversation = async (req, res) => {
  var convoDetails = req.body;
  console.log(convoDetails);
  if (convoDetails.members.length == 2) {
    await Users.find(
      { _id: convoDetails.members[1] },
      { displayPicture: 1, name: 1, _id: 0 }
    )
      .then((result) => {
        convoDetails.name = result[0].name;
        convoDetails.displayPicture = result[0].displayPicture;
      })
      .catch((e) => {
        console.log(e);
      });
  } else {
    convoDetails.displayPicture = await authUtil.avatarURLGenerator(
      convoDetails.name
    );
  }

  Conversations.create(convoDetails)
    .then((newConvo) => {
      const { _id, name, members, displayPicture } = newConvo;
      const convoInfo = {
        _id,
        name,
        members,
        displayPicture,
      };

      return res.status(201).send({
        message: "Conversation Created!",
        success: true,
        convoInfo,
      });
    })
    .catch((err) => {
      console.log(err);
      res.send({ message: "Error in Creating Conversations", success: true });
    });
};

module.exports = {
  getAllConversations,
  createConversation,
};
