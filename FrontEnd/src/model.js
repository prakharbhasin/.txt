import { action } from "easy-peasy";

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */

export default {
  darkTheme: true,
  toggle: action((state) => {
    state.darkTheme = !state.darkTheme;
  }),
};
