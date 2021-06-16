import React, { useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import {
  faQuoteLeft,
  faLightbulb as farLightBulb,
} from "@fortawesome/free-solid-svg-icons";

import ChatList from "../../Components/ChatList/ChatList";
import ChatInfoPanel from "../../Components/ChatInfoPanel/ChatInfoPanel";
import ChatHeader from "../../Components/ChatHeader/ChatHeader";
import MessageContainer from "../../Components/MessageContainer/MessageContainer";
import ComposeMessage from "../../Components/ComposeMessage/ComposeMessage";

import "./ChatPage.css";

export default function ChatPage() {
  const theme = useStoreState((state) => state.darkTheme);
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  const toggle = useStoreActions((actions) => actions.toggle);

  return (
    <div className='chat-container'>
      <div className='sidebar'>
        <FontAwesomeIcon icon={faQuoteLeft} id='sidebar-icons' />
        <FontAwesomeIcon
          icon={theme ? faLightbulb : farLightBulb}
          onClick={toggle}
          id='sidebar-icons'
        ></FontAwesomeIcon>
      </div>
      <ChatList />
      <div className='chat-body'>
        <ChatHeader toggle={toggleInfo} />
        <div className='chat-messages'>
          <MessageContainer
            sentMsg={true}
            messageBody='Hi Ishit, how are You?'
          />
          <MessageContainer
            sentMsg={false}
            messageBody='I am fine, what about you Prakhar?'
          />
        </div>
        <ComposeMessage />
      </div>
      <ChatInfoPanel show={showInfo} toggle={toggleInfo} />
    </div>
  );
}
