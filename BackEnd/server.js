const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
dotenv.config({ path: "./config/config.env" });

connectDB();

const server = express();

const PORT = process.env.PORT || 5000;

server.listen(PORT, console.log(`The server is running on port ${PORT}`));
