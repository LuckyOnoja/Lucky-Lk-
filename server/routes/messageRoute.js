const express = require("express");
const router = express.Router();
const messageModel = require("../models/Messagemodel");

router.post("/uploadMessage", async (req, res) => {
  const { message, adminAuth, adminReply, userId } = req.body;
  const newMessage = new messageModel({
    message,
    adminAuth,
    adminReply,
    userId,
  });
  try {
    const messageData = await newMessage.save();
    res.json({ message: "message uploaded", messageData });
  } catch (error) {
    res.status(500).json({ message: "Error uploading message" });
  }
});

// Route to get all messages
router.get("/getAllMessages", async (req, res) => {
  try {
    const allMessages = await messageModel.find();
    res.json({ messages: allMessages });
  } catch (error) {
    console.error("Error getting all messages", error);
    res.status(500).json({ message: "Error getting all messages" });
  }
});

// Adjusted route to get all messages with a specific userId
router.get("/UserMessages", async (req, res) => {
    const { userId } = req.query;
    try {
      const allMessages = await messageModel.find({ userId });
      res.json(allMessages);
    } catch (error) {
      console.error("Error getting messages", error);
      res.status(500).json({ message: "Error getting messages" });
    }
  });

module.exports = router;
