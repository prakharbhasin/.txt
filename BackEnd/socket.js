const socketio = require("socket.io");
const msgController = require("./controllers/message");

const socket = async (server) => {
  global.io = socketio(server, {
    cors: {
      origin: "*",
    },
  });
  global.io.on("connection", (socket) => {
    socket.emit("This is a test", "Hello");
    console.log(socket.id);
    console.log("Connected to client");

    socket.on("disconnect", (skt) => {
      global.io.emit("A User disconneced", { skt });
    });
    socket.on("join-room", (roomDetails) => {
      console.log(`${roomDetails.userName} joined ${roomDetails.currentChat}`);
    });

    socket.on("new-msg", (messageDetails) => {
      global.console.log(messageDetails);
      msgController.newMessage(messageDetails);
      socket.broadcast
        .to(messageDetails.conversation)
        .emit("receive-msg", messageDetails);
    });
  });
};

module.exports = { socket };
