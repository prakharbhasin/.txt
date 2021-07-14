import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useStoreState, useStoreActions } from "easy-peasy";

import "./ComposeMessage.css";

export default function ComposeMessage() {
  // const { currentChat, userInfo } = useStoreState();
  const currentChat = useStoreState((state) => state.currentChat);
  const userInfo = useStoreState((state) => state.userInfo);
  const [message, setMessage] = useState("");
  const getMessages = useStoreActions((actions) => actions.getMessages);
  const sendMessages = useStoreActions((actions) => actions.sendMessages);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("s");
    await sendMessages({
      text: message,
      conversation: currentChat,
      senderName: userInfo.name,
      senderImage: userInfo.displayPicture,
    });
    getMessages(currentChat);
    setMessage(" ");
  };

  return (
    <form className='compose-message-container' onSubmit={handleSubmit}>
      <input
        className='compose-message'
        type='text'
        value={message}
        placeholder='Type a message'
        name='new-message'
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <FontAwesomeIcon
        id='send-message-button'
        icon={faPaperPlane}
        type='submit'
      />
    </form>
  );
}
