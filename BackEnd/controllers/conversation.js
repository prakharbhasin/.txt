const Conversations = require("../models/Conversation");
const Users = require("../models/User");
const Messages = require("../models/Message");
const authUtil = require("../utils/auth");

const getAllConversations = async (req, res) => {
  const userID = req.params.userID;
  console.log(userID);

  await Conversations.find({
    members: { $in: [userID] },
  })
    .then(async (conversations) => {
      let convoIDs = conversations.map((c) => c._id);
      var msgs = [];
      convoIDs.forEach(async (c) => {
        await Messages.find(
          { conversation: c },
          {
            senderName: 1,
            senderImage: 1,
            text: 1,
            createdAt: 1,
            conversation: 1,
            _id: 0,
          },
          { sort: { createdAt: -1 }, limit: 1 }
        ).then((newmsg) => {
          console.log(newmsg[0]);
          msgs.push(newmsg[0]);
        });
      });

      // messages.forEach((message) => {
      //   console.log(message.conversation, message.text);

      //   let convoIndex = conversations.findIndex(
      //     (c, index) => String(c._id) == String(message.conversation)
      //   );
      //   if (convoIndex >= 0)
      //     conversations[convoIndex] = {
      //       ...conversations[convoIndex]._doc,
      //       lastMessage: message,
      //     };
      // });

      // console.log(conver);

      // convoIDs.forEach(async (e) => {
      //   await Messages.findOne(
      //     { conversation: e },
      //     { senderName: 1, senderImage: 1, text: 1, createdAt: 1, _id: 0 },
      //     { sort: { createdAt: -1 } }
      //   )
      //     .then((messages) => {
      //       conversations = { ...conversations, ...messages };
      //       console.log(`Hello ${messages}`);
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //     });
      // });
      // Messages.findOne(
      //   { conversation: "60ec8d884569c564881f5e30" },
      //   { senderName: 1, senderImage: 1, text: 1, createdAt: 1, _id: 0 },
      //   { sort: { createdAt: -1 } }
      // )
      //   .then((messages) => {
      //     console.log(`Hello ${messages}`);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
      res.send({ success: true, conversations, msgs });
    })
    .catch((error) => {
      res.send({ success: false, message: "No Conversations!" });
      console.log(error);
    });
};

const getConvoDetails = async (req, res) => {
  var convoID = req.params.convoID;
  await Conversations.findById(convoID).then(async (conversation) => {
    await Users.find({ _id: { $in: conversation.members } })
      .then((users) => {
        let convoDetails = {
          users,
          displayPicture: conversation.displayPicture,
          name: conversation.name,
        };
        res.send({ success: true, convoDetails });
      })
      .catch((err) => {
        console.log(err);
        res.send({ success: false, message: "Could not load conversations!" });
      });
  });
};

const createConversation = async (req, res) => {
  var convoDetails = req.body;
  // console.log(convoDetails);
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
      res.send({ message: "Error in Creating Conversations", success: false });
    });
};

module.exports = {
  getAllConversations,
  getConvoDetails,
  createConversation,
};
