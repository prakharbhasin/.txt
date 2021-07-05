const express = require("express");
const dotenv = require("dotenv");
const passport = require("passport");
const session = require("express-session");
const connectDB = require("./config/db");
const pageRouter = require("./routes/index");
dotenv.config({ path: "./config/config.env" });

connectDB();

const server = express();

server.use(
  session({
    secret: "Prakhars chat app",
    resave: true,
    saveUninitialized: true,
  })
);

server.use(passport.initialize());
server.use(passport.session());

const PORT = process.env.PORT || 5000;

server.listen(PORT, console.log(`The server is running on port ${PORT}`));

server.use("/", pageRouter.router);
