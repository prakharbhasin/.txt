const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const conversationSchema = Schema({
  members: [
    {
      type: String,
    },
  ],
});

const conversation = mongoose.model("conversation", conversationSchema);
module.exports = conversation;
