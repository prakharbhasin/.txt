import "./App.css";
import Router from "./router";
import { useStoreState } from "easy-peasy";

function App() {
  const theme = useStoreState((state) => state.darkTheme);

  return (
    <div id={theme ? "dark-theme" : "light-theme"}>
      <Router />{" "}
    </div>
  );
}

export default App;
