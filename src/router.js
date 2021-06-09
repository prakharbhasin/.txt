import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AuthPage from "./Components/AuthPage/AuthPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/auth' component={AuthPage} />
      </Switch>
    </BrowserRouter>
  );
}
