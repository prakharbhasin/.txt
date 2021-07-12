const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const conversationSchema = Schema(
  {
    name: {
      type: String,
    },
    displayPicture: {
      type: String,
    },
    members: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

const Conversation = mongoose.model("Conversation", conversationSchema);
module.exports = Conversation;
