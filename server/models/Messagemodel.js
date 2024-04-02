const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  message: String,
  adminAuth: Boolean,
  adminReply: String,
  userId: String,
});

const messageModel = mongoose.model("Messages", messageSchema);

module.exports = messageModel;
