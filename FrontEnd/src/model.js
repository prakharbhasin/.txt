import { action, thunk } from "easy-peasy";
import cookies from "react-cookies";
import axios from "axios";
import { toast } from "react-toastify";
import { io } from "socket.io-client";

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */

toast.configure();
export default {
  darkTheme: true,
  authToken: null,
  isLogged: false,
  userInfo: {},
  chats: [],
  currentChat: "",
  currentChatDetails: {},
  messages: [],
  socket: io("http://localhost:5000", {
    secure: true,
    reconnection: true,
    rejectUnauthorized: false,
  }),

  //SignUp
  signUp: thunk((actions, newUser) => {
    var config = {
      method: "post",
      url: "http://localhost:5000/auth/signup",
      headers: {
        "Content-Type": "application/json",
      },
      data: newUser,
    };
    axios(config)
      .then(async (response) => {
        let responseData = await response.data;
        if (responseData.success) {
          toast.success(responseData.message);
          actions.setToken(responseData.auth_token);
          actions.setUser(responseData.userInfo);
          localStorage.setItem("authToken", responseData.auth_token);
          // console.log(responseData);
        } else {
          console.log(responseData.message);
          toast.error(responseData.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }),

  //SignIn
  signIn: thunk((actions, userInfo) => {
    var config = {
      method: "post",
      url: "http://localhost:5000/auth/signin",
      headers: {
        "Content-Type": "application/json",
      },
      data: userInfo,
    };
    axios(config)
      .then(async (response) => {
        let responseData = await response.data;
        if (responseData.success) {
          toast.success(responseData.message);
          actions.setToken(responseData.auth_token);
          actions.setUser(responseData.userInfo);
          localStorage.setItem("authToken", responseData.auth_token);
          // console.log(responseData);
        } else {
          console.log(responseData.message);
          toast.error(responseData.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }),

  verifyUser: thunk(async (actions) => {
    let authToken = await cookies.load("ChatAppToken");
    // console.log(`token: ${authToken}`);
    if (authToken === undefined) {
      actions.signOut();
    } else {
      var config = {
        method: "get",
        url: "http://localhost:5000/auth/verify",
        headers: {
          "Content-Type": "application/json",
          Authorization: authToken,
        },
      };

      axios(config).then(async (response) => {
        let responseData = await response.data;
        if (responseData.success) {
          toast.success(responseData.message);
          actions.setToken(authToken);
          actions.setUser(responseData.user);
          localStorage.setItem("authToken", responseData.auth_token);
        } else {
          console.log(responseData.message);
          toast.error(responseData.message);
        }
      });
    }
  }),

  getChats: thunk(async (actions, userID) => {
    // console.log(userID);
    var config = {
      method: "get",
      url: `http://localhost:5000/conversation/getall/${userID}`,
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios(config).then(async (response) => {
      let responseData = await response.data;
      if (responseData.success) {
        // console.log(responseData);
        actions.setChats(responseData.conversations);
      } else {
        console.error(responseData);
      }
    });
  }),

  getChatDetails: thunk(async (actions, convoID) => {
    var config = {
      method: "get",
      url: `http://localhost:5000/conversation/getdetails/${convoID}`,
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios(config).then(async (response) => {
      let responseData = await response.data;
      if (responseData.success) {
        // console.log(responseData);
        actions.setChatDetails(responseData.convoDetails);
      } else {
        console.error(responseData);
      }
    });
  }),

  getMessages: thunk(async (actions, convoID) => {
    var config = {
      method: "get",
      url: `http://localhost:5000/message/get/${convoID}`,
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios(config).then(async (response) => {
      let responseData = await response.data;
      if (responseData.success) {
        // console.log(responseData);
        actions.setMessages(responseData.messages);
      } else {
        // console.error(responseData);
      }
    });
  }),

  sendMessages: thunk(async (actions, newMessage) => {
    var config = {
      method: "post",
      url: "http://localhost:5000/message/new",
      headers: {
        "Content-Type": "application/json",
      },
      data: newMessage,
    };

    axios(config)
      .then(async (response) => {
        let responseData = await response.data;
        if (responseData.success) {
          // console.log(responseData);
        } else {
          // console.log(responseData.message);
          // toast.error(responseData.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }),

  //Actions
  toggleTheme: action((state) => {
    state.darkTheme = !state.darkTheme;
  }),

  setToken: action((state, token) => {
    cookies.save("ChatAppToken", token);
    state.authToken = token;
  }),

  setUser: action((state, userInfo) => {
    state.isLogged = true;
    state.userInfo = userInfo;
  }),

  setChats: action((state, chats) => {
    state.chats = chats;
  }),

  setCurrentChat: action((state, chat) => {
    state.currentChat = chat;
  }),

  setChatDetails: action((state, currentChat) => {
    state.currentChatDetails = currentChat;
  }),

  setMessages: action((state, messages) => {
    console.trace("MESSAGES CHANGED BITCH!");
    state.messages = messages;
  }),

  signOut: action((state) => {
    cookies.remove("ChatAppToken");
    state.isLogged = false;
    state.authToken = null;
    state.userInfo = {};
    state.chats = [];
    state.currentChat = "";
    state.currentChatDetails = {};
    state.messages = [];
    toast.warning("Successfully Logged Out");
  }),
};
