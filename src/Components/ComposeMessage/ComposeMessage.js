import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import "./ComposeMessage.css";

export default function ComposeMessage() {
  return (
    <div className='compose-message-container'>
      <input
        className='compose-message'
        type='text'
        placeholder='Type a message'
      />
      <FontAwesomeIcon id='send-message-button' icon={faPaperPlane} />
    </div>
  );
}
