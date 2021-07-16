import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useStoreActions, useStoreState } from "easy-peasy";
import { io } from "socket.io-client";
import "./ComposeMessage.css";

export default function ComposeMessage() {
  // const { currentChat, userInfo } = useStoreState();
  const currentChat = useStoreState((state) => state.currentChat);
  const userInfo = useStoreState((state) => state.userInfo);
  const [message, setMessage] = useState("");
  const setMessages = useStoreActions((actions) => actions.setMessages);
  const messages = useStoreState((state) => state.messages);
  const socketIO = useStoreState((state) => state.socket);

  // const getMessages = useStoreActions((actions) => actions.getMessages);
  // const sendMessages = useStoreActions((actions) => actions.sendMessages);

  // const [socketIO, setSocketIO] = useState();

  // useEffect(() => {
  //   setSocketIO(
  //     io("http://localhost:5000", {
  //       secure: true,
  //       reconnection: true,
  //       rejectUnauthorized: false,
  //     })
  //   );
  //   // eslint-disable-next-line
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setMessage("s");
    // await sendMessages({
    //   text: message,
    //   conversation: currentChat,
    //   senderName: userInfo.name,
    //   senderImage: userInfo.displayPicture,
    // });
    // getMessages(currentChat);
    socketIO.emit("new-msg", {
      text: message,
      conversation: currentChat,
      senderName: userInfo.name,
      senderImage: userInfo.displayPicture,
    });
    // setMessages([
    //   ...messages,
    //   {
    //     text: message,
    //     conversation: currentChat,
    //     senderName: userInfo.name,
    //     senderImage: userInfo.displayPicture,
    //   },
    // ]);
    // prints { x: "42", EIO: "4", transport: "polling" }

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
