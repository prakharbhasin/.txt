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
        <div className='active-chat-header'>
          <img
            className='active-chat-image'
            src='https://avatars.githubusercontent.com/u/53562523?v=4'
            alt='active'
          />
          <p className='active-chat-contact'>Ishit Beswal</p>
        </div>
        <div className='chat-messages'>
          <div className='chat-msg-container you'>
            <img
              src='https://avatars.githubusercontent.com/u/53562523?v=4'
              alt=''
              className='in-chat-image'
            />
            <p className='chat-message you'>Hi Ishit, How are you?</p>
          </div>

          <div className='chat-msg-container sender'>
            <img
              src='https://avatars.githubusercontent.com/u/53562523?v=4'
              alt=''
              className='in-chat-image'
            />
            <p className='chat-message sender'>I'm good, what's up?</p>
          </div>
          <div className='chat-msg-container you'>
            <img
              src='https://avatars.githubusercontent.com/u/53562523?v=4'
              alt=''
              className='in-chat-image'
            />
            <p className='chat-message you'>I got an award today!</p>
          </div>
          <div className='chat-msg-container sender'>
            <img
              src='https://avatars.githubusercontent.com/u/53562523?v=4'
              alt=''
              className='in-chat-image'
            />
            <p className='chat-message sender'>I'm good, what's up?</p>
          </div>
          <div className='chat-msg-container you'>
            <img
              src='https://avatars.githubusercontent.com/u/53562523?v=4'
              alt=''
              className='in-chat-image'
            />
            <p className='chat-message you'>I got an award today!</p>
          </div>
          <div className='chat-msg-container sender'>
            <img
              src='https://avatars.githubusercontent.com/u/53562523?v=4'
              alt=''
              className='in-chat-image'
            />
            <p className='chat-message sender'>I'm good, what's up?</p>
          </div>
          <div className='chat-msg-container you'>
            <img
              src='https://avatars.githubusercontent.com/u/53562523?v=4'
              alt=''
              className='in-chat-image'
            />
            <p className='chat-message you'>I got an award today!</p>
          </div>
          <div className='chat-msg-container sender'>
            <img
              src='https://avatars.githubusercontent.com/u/53562523?v=4'
              alt=''
              className='in-chat-image'
            />
            <p className='chat-message sender'>I'm good, what's up?</p>
          </div>
          <div className='chat-msg-container you'>
            <img
              src='https://avatars.githubusercontent.com/u/53562523?v=4'
              alt=''
              className='in-chat-image'
            />
            <p className='chat-message you'>I got an award today!</p>
          </div>
          <div className='chat-msg-container sender'>
            <img
              src='https://avatars.githubusercontent.com/u/53562523?v=4'
              alt=''
              className='in-chat-image'
            />
            <p className='chat-message sender'>Oh wow!</p>
          </div>
          <div className='chat-msg-container sender'>
            <img
              src='https://avatars.githubusercontent.com/u/53562523?v=4'
              alt=''
              className='in-chat-image'
            />
            <p className='chat-message sender'>Noicee</p>
          </div>
        </div>
      </div>
    </div>
  );
}
