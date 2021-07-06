const express = require("express");
const dotenv = require("dotenv");
const passport = require("passport");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const connectDB = require("./config/db");
const pageRouter = require("./routes/index");
dotenv.config({ path: "./config/config.env" });

connectDB();

const server = express();

server.use(express.json());

server.use(
  cors({
    origin: "http://localhost:3000", // <-- location of the react app
    credentials: true,
  })
);

server.use(
  session({
    secret: "Prakhars chat app",
    resave: true,
    saveUninitialized: true,
  })
);

server.use(cookieParser("Prakhars chat app"));

server.use(passport.initialize());
server.use(passport.session());

const PORT = process.env.PORT || 5000;

server.listen(PORT, console.log(`The server is running on port ${PORT}`));

server.use("/", pageRouter.router);
