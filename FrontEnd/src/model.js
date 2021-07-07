import { action } from "easy-peasy";

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */

export default {
  darkTheme: true,
  authToken: "",
  isLogged: false,
  toggleTheme: action((state) => {
    state.darkTheme = !state.darkTheme;
  }),
  toggleLog: action((state) => {
    state.isLogged = !state.isLogged;
  }),
  setToken: action((state, token) => {
    state.authToken = token;
  }),
};
