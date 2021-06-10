import React from "react";
import demoImg from "../../Assets/login-bg.jpg";

import "./ChatPage.css";

export default function ChatPage() {
  return (
    <div className='chat-container'>
      <div className='sidebar'></div>
      <div className='chat-list'>
        <h1 className='chat heading'>Chats</h1>
        <div className='recent-chat-container active'>
          <img
            src='https://avatars.githubusercontent.com/u/61727284?v=4'
            className='chat-dp'
          />
          <div className='recent-chat-details'>
            <p className='recent-chat-sender'>Prakhar Bhasin</p>
            <p className='recent-chat-text'>You: lol</p>
          </div>
          <p className='recent-chat-time'>18:12</p>
        </div>
        <div className='recent-chat-container'>
          <img
            src='https://avatars.githubusercontent.com/u/53562523?v=4'
            className='chat-dp'
          />
          <div className='recent-chat-details'>
            <p className='recent-chat-sender'>Ishit Beswal</p>
            <p className='recent-chat-text'>Ishit: Noice</p>
          </div>
          <p className='recent-chat-time'>18:12</p>
        </div>
        <div className='recent-chat-container'>
          <img src={demoImg} className='chat-dp' />
          <div className='recent-chat-details'>
            <p className='recent-chat-sender'>Apoorva Nautiyal</p>
            <p className='recent-chat-text'>You: Message</p>
          </div>
          <p className='recent-chat-time'>18:12</p>
        </div>
      </div>
      <div className='chat-body'>
        <h1>Chat Body</h1>
      </div>
    </div>
  );
}
