import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import AuthPage from "./Views/AuthPage/AuthPage";
import ChatPage from "./Views/ChatPage/ChatPage";
import ErrorPage from "./Views/404Page/404Page";

import { useStoreActions, useStoreState } from "easy-peasy";

export default function Router() {
  const verifyUser = useStoreActions((actions) => actions.verifyUser);
  const setSocketConnection = useStoreActions(
    (actions) => actions.setSocketConnection
  );
  const getChats = useStoreActions((actions) => actions.getChats);
  const userID = useStoreState((state) => state.userInfo)._id;
  const islogged = useStoreState((state) => state.isLogged);
  const socketIo = useStoreState((state) => state.socket);
  useEffect(() => {
    verifyUser();

    console.log(socketIo);
    socketIo.on("connection", (socket) => {
      console.log(socket.handshake.query); // prints { x: "42", EIO: "4", transport: "polling" }
    });
    socketIo.on("connect_error", (e) => {
      // revert to classic upgrade
      console.log(e);
      socketIo.io.opts.transports = ["polling", "websocket"];
    });

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (userID !== undefined) {
      getChats(userID);
    }

    // eslint-disable-next-line
  }, [userID]);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          {islogged ? <Redirect to='/chat' /> : <Redirect to='/auth' />}
        </Route>
        <Route exact path='/auth' component={AuthPage} />
        <Route exact path='/chat' component={ChatPage} />
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
}
