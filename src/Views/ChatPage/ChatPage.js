import React from "react";
import demoImg from "../../Assets/login-bg.jpg";
import ChatList from "../../Components/ChatList/ChatList";

import "./ChatPage.css";

export default function ChatPage() {
  return (
    <div className='chat-container'>
      <div className='sidebar'></div>
      <ChatList />
      <div className='chat-body'>
        <h1>Chat Body</h1>
      </div>
    </div>
  );
}
