// .env file
require("dotenv").config();

// server imports:
const express = require("express");
const app = express();

// external imports:
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = 8081 || process.env.PORT;

//routes
const userRouter = require("./routes/userRoutes");
const chatRouter = require("./routes/chatRoures");

// DB connection
mongoose
  .connect(process.env.DB, {})
  .then(() => {
    console.log("DB connect");
  })
  .catch(() => {
    console.log("DB connect Failed");
  });

// essential server settings
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.set("routes", __dirname + "/routes");

// routes define
app.use("/api/v1/user", userRouter);
app.use("/api/v1/chat", chatRouter);


app.listen(PORT, () => console.log("connected: " + PORT));
