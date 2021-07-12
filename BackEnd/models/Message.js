const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = Schema(
  {
    text: {
      type: String,
      required: true,
    },
    conversation: {
      type: Schema.Types.ObjectId,
      ref: "Conversation",
      required: true,
    },
    sender: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },

  { timestamps: true }
);

const Message = mongoose.model("Message", MessageSchema);
module.exports = Message;
