import React from "react";
import "./RecentChat.css";

export default function RecentChat({
  senderName,
  lastSender,
  lastMessage,
  Time,
  senderImage,
  active,
}) {
  return (
    <div className={`recent-chat-container ` + (active ? "active" : "")}>
      <img src={senderImage} className='chat-dp' alt='dp' />
      <div className='recent-chat-details'>
        <p className='recent-chat-sender'>{senderName}</p>
        <p className='recent-chat-text'>
          {lastSender}: {lastMessage}
        </p>
      </div>
      <p className='recent-chat-time'>{Time}</p>
    </div>
  );
}
