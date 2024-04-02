const dotenv = require("dotenv");
dotenv.config();
const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.static("public"));
app.use(cors());
app.use(express.json());

//require routes
const messageRoute = require("./routes/messageRoute");
const userRoute = require("./routes/userRoute");

const URL = process.env.DB_URL

app.use("/messages", messageRoute);
app.use("/user", userRoute);

mongoose
  .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));


  app.listen(5000, () => {
    console.log("THE BACKEND SERVER IS LIVE");
  });