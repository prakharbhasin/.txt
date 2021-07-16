import React, { useState, useEffect, useRef } from "react";
import { Redirect } from "react-router";
import Sidebar from "../../Components/Sidebar/Sidebar";
import ChatList from "../../Components/ChatList/ChatList";
import ChatInfoPanel from "../../Components/ChatInfoPanel/ChatInfoPanel";
import ChatHeader from "../../Components/ChatHeader/ChatHeader";
import MessageContainer from "../../Components/MessageContainer/MessageContainer";
import ComposeMessage from "../../Components/ComposeMessage/ComposeMessage";
import NoChatsDark from "../../Assets/NoChatsDark.png";
import NoChatsLight from "../../Assets/NoChatsLight.png";

import "./ChatPage.css";
import { useStoreActions, useStoreState } from "easy-peasy";

export default function ChatPage() {
  const [showInfo, setShowInfo] = useState(false);
  const scrollRef = useRef();
  const darkTheme = useStoreState((state) => state.darkTheme);
  const currentChat = useStoreState((state) => state.currentChat);
  const userName = useStoreState((state) => state.userInfo).name;
  const getChats = useStoreActions((actions) => actions.getMessages);
  const setChats = useStoreActions((actions) => actions.setMessages);
  const getChatDetails = useStoreActions((actions) => actions.getChatDetails);
  const messages = useStoreState((state) => state.messages);
  const isLogged = useStoreState((state) => state.isLogged);
  const socketIO = useStoreState((state) => state.socket);
  const [newMessage, setNewMessage] = useState([]);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  useEffect(() => {
    if (currentChat !== "") {
      getChats(currentChat);
      getChatDetails(currentChat);
      socketIO.emit("join-room", { userName, currentChat });
      // socketIO.on("receive-msg", (messageDetails) => {
      //   console.log("received new message");
      //   console.log(messageDetails);
      // console.log(messages[0]);
      // setChats([...messages, messageDetails]);
      // });
    }

    // eslint-disable-next-line
  }, [currentChat]);

  useEffect(() => {
    if (currentChat !== "") {
      socketIO.on("receive-msg", (messageDetails) => {
        console.log("received new message");
        console.log(messageDetails);
        setNewMessage(messageDetails);
        console.log([...messages, newMessage]);
        // console.log(messages[0]);
      });
    }

    // eslint-disable-next-line
  }, [currentChat]);

  useEffect(() => {
    if (newMessage) {
      setChats([...messages, newMessage]);
    }
  }, [newMessage]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView();
  }, [messages]);

  useEffect(() => {
    // console.log(messages);
    // eslint-disable-next-line
  }, [isLogged]);

  // useEffect(() => {
  //   socketIO.on("receive-msg", (messageDetails) => {
  //     console.log("received new message");
  //     console.log(messageDetails);
  //   });

  //   // eslint-disable-next-line
  // }, []);

  return isLogged ? (
    <div className='chat-container'>
      <Sidebar />
      <ChatList />
      {currentChat !== "" ? (
        <div className='chat-body'>
          <ChatHeader toggle={toggleInfo} />
          <div className='chat-messages'>
            {messages !== []
              ? messages.map((m) => {
                  return (
                    <MessageContainer
                      sentMsg={m.senderName === userName ? true : false}
                      messageBody={m.text}
                      senderImage={m.senderImage}
                    />
                  );
                })
              : ""}
            <div ref={scrollRef}></div>
          </div>
          <ComposeMessage />
        </div>
      ) : (
        <div className='chat-body empty'>
          <img
            src={darkTheme ? NoChatsDark : NoChatsLight}
            alt='no-chats'
            className='no-chats-image'
          />
          <h1 className='no-chats-heading'>What are you waiting for?</h1>
          <p className='no-chats-sub'>Start Chatting Now!</p>
        </div>
      )}
      <ChatInfoPanel show={showInfo} toggle={toggleInfo} />
    </div>
  ) : (
    <Redirect to='/' />
  );
}
