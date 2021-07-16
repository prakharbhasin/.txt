const express = require("express");
const dotenv = require("dotenv");
const passport = require("passport");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const morgan = require("morgan");

const connectDB = require("./config/db");
const pageRouter = require("./routes/index");
const socket = require("./socket");

dotenv.config({ path: "./config/config.env" });
connectDB();
require("./config/passport-local")(passport);

const server = express();
const httpServer = require("http").createServer(server);

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
server.use(morgan("dev"));

socket.socket(httpServer);

const PORT = process.env.PORT || 5000;

httpServer.listen(PORT);
httpServer.on("listening", () => {
  global.console.log(`Now tuning into port: ${PORT}`);
});

// server.listen(PORT, console.log(`The server is running on port ${PORT}`));

server.use("/", pageRouter.router);
