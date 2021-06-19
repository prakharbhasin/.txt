import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AuthPage from "./Views/AuthPage/AuthPage";
import ChatPage from "./Views/ChatPage/ChatPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/auth' component={AuthPage} />
        <Route exact path='/chat' component={ChatPage} />
      </Switch>
    </BrowserRouter>
  );
}
