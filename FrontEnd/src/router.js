import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import AuthPage from "./Views/AuthPage/AuthPage";
import ChatPage from "./Views/ChatPage/ChatPage";
import { useStoreActions, useStoreState } from "easy-peasy";

export default function Router() {
  const verifyUser = useStoreActions((actions) => actions.verifyUser);
  const islogged = useStoreState((state) => state.isLogged);

  useEffect(() => {
    verifyUser();
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          {islogged ? <Redirect to='/chat' /> : <Redirect to='/auth' />}
        </Route>
        <Route exact path='/auth' component={AuthPage} />
        <Route exact path='/chat' component={ChatPage} />
      </Switch>
    </BrowserRouter>
  );
}
