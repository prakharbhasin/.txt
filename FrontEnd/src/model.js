import { action } from "easy-peasy";

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */

export default {
  darkTheme: false,
  toggle: action((state) => {
    state.darkTheme = !state.darkTheme;
  }),
};
