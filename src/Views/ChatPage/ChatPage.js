import React, { useState } from "react";
import ChatList from "../../Components/ChatList/ChatList";
import ChatInfoPanel from "../../Components/ChatInfoPanel/ChatInfoPanel";
import ChatHeader from "../../Components/ChatHeader/ChatHeader";
import MessageContainer from "../../Components/MessageContainer/MessageContainer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import "./ChatPage.css";

export default function ChatPage() {
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div className='chat-container'>
      <div className='sidebar'></div>
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
        <div className='compose-message-container'>
          <input
            className='compose-message'
            type='text'
            placeholder='Type a message'
          />
          <FontAwesomeIcon id='send-message-button' icon={faPaperPlane} />
        </div>
      </div>
      <ChatInfoPanel show={showInfo} toggle={toggleInfo} />
    </div>
  );
}
