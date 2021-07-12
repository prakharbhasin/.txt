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
  userInfo: {},

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

  verifyUser: thunk(async (actions) => {
    let authToken = await cookies.load("ChatAppToken");
    console.log(`token: ${authToken}`);
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

  signOut: action((state) => {
    cookies.remove("ChatAppToken");
    state.isLogged = false;
    state.authToken = null;
    state.userInfo = {};
  }),
};
