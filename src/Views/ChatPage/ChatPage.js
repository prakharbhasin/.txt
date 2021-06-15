import React, { useState } from "react";
import ChatList from "../../Components/ChatList/ChatList";
import ChatInfoPanel from "../../Components/ChatInfoPanel/ChatInfoPanel";
import ChatHeader from "../../Components/ChatHeader/ChatHeader";

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
