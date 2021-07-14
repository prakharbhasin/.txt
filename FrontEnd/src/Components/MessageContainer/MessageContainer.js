import React from "react";

import "./MessageContainer.css";

export default function MessageContainer({
  sentMsg,
  messageBody,
  senderImage,
}) {
  return (
    <div className={`chat-msg-container ` + (sentMsg ? "you" : "sender")}>
      <img src={senderImage} alt='' className='in-chat-image' />
      <p className={`chat-message ` + (sentMsg ? "you" : "sender")}>
        {messageBody}
      </p>
    </div>
  );
}
