const express = require("express");
const dotenv = require("dotenv");
const passport = require("passport");
const session = require("express-session");
const connectDB = require("./config/db");
dotenv.config({ path: "./config/config.env" });

connectDB();

server.use(
  session({
    secret: "Prakhars chat app",
    resave: false,
    saveUninitialized: false,
  })
);

server.use(passport.initialize());
server.use(passport.session());

const server = express();

const PORT = process.env.PORT || 5000;

server.listen(PORT, console.log(`The server is running on port ${PORT}`));
