import { action, thunk } from "easy-peasy";
import cookies from "react-cookies";
import axios from "axios";
import { toast } from "react-toastify";

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */

toast.configure();
export default {
  darkTheme: true,
  authToken: null,
  isLogged: false,

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
          actions.toggleLog();
          localStorage.setItem("authToken", responseData.auth_token);
          console.log(responseData);
        } else {
          console.log(responseData.message);
          toast.error(responseData.message);
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

  toggleLog: action((state) => {
    state.isLogged = !state.isLogged;
  }),

  setToken: action((state, token) => {
    cookies.save("ChatAppToken", token);
    state.authToken = token;
  }),
};
