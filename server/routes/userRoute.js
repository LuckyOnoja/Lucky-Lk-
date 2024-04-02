const express = require("express");
const router = express.Router();
const UserModel = require("../models/Usermodel");

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  const newUser = new UserModel({ email, password });
  try {
    const user = await newUser.save();
    res.json({ message: "User signed up sucessfully", user });
  } catch (error) {
    res.status(500).json({ message: "Error signing up try again " });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email, password });
  if (user) {
    res.json({ message: "Login succesful", user });
  } else {
    res.status(401).json({
      message: "Invalid email or password ",
    });
  }
});

module.exports = router;
