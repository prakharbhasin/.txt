import React from "react";

import "./MessageContainer.css";

export default function MessageContainer({ sentMsg, messageBody }) {
  return (
    <div className={`chat-msg-container ` + (sentMsg ? "you" : "sender")}>
      <img
        src={
          sentMsg
            ? "https://avatars.githubusercontent.com/u/61727284?v=4"
            : "https://avatars.githubusercontent.com/u/53562523?v=4"
        }
        alt=''
        className='in-chat-image'
      />
      <p className={`chat-message ` + (sentMsg ? "you" : "sender")}>
        {messageBody}
      </p>
    </div>
  );
}
