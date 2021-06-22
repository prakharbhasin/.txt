import React, { useState } from "react";

import Sidebar from "../../Components/Sidebar/Sidebar";
import ChatList from "../../Components/ChatList/ChatList";
import ChatInfoPanel from "../../Components/ChatInfoPanel/ChatInfoPanel";
import ChatHeader from "../../Components/ChatHeader/ChatHeader";
import MessageContainer from "../../Components/MessageContainer/MessageContainer";
import ComposeMessage from "../../Components/ComposeMessage/ComposeMessage";

import "./ChatPage.css";

export default function ChatPage() {
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div className='chat-container'>
      <Sidebar />
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
