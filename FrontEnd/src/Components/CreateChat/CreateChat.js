import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import PersonalChat from "./PersonalChat/PersonalChat";

import "./CreateChat.css";

export default function CreateChat({ show, toggle, ref }) {
  const [chatType, setChatType] = useState(false);
  return (
    <div open={show} onClose={toggle} className='modal-container'>
      <div className='modal'>
        <div className='modal-header'>
          <h1 className='modal-heading'>New Chat</h1>
          <FontAwesomeIcon id='modal-close' icon={faTimes} onClick={toggle} />
        </div>
        <div className='modal-tab'>
          <h4
            className={chatType ? "" : "active"}
            onClick={() => {
              setChatType(false);
            }}
          >
            Personal
          </h4>
          <h4
            className={chatType ? "active" : ""}
            onClick={() => {
              setChatType(true);
            }}
          >
            Group
          </h4>
        </div>
        <PersonalChat />
      </div>
    </div>
  );
}
