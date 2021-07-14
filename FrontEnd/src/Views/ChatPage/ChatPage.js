import React, { useState, useEffect } from "react";

import Sidebar from "../../Components/Sidebar/Sidebar";
import ChatList from "../../Components/ChatList/ChatList";
import ChatInfoPanel from "../../Components/ChatInfoPanel/ChatInfoPanel";
import ChatHeader from "../../Components/ChatHeader/ChatHeader";
import MessageContainer from "../../Components/MessageContainer/MessageContainer";
import ComposeMessage from "../../Components/ComposeMessage/ComposeMessage";

import "./ChatPage.css";
import { useStoreActions, useStoreState } from "easy-peasy";

export default function ChatPage() {
  const [showInfo, setShowInfo] = useState(false);
  const currentChat = useStoreState((state) => state.currentChat);
  const userName = useStoreState((state) => state.userInfo).name;
  const getChats = useStoreActions((actions) => actions.getMessages);
  const getChatDetails = useStoreActions((actions) => actions.getChatDetails);
  const messages = useStoreState((state) => state.messages);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  useEffect(() => {
    if (currentChat !== "") {
      getChats(currentChat);
      getChatDetails(currentChat);
    }
  }, [currentChat]);

  return (
    <div className='chat-container'>
      <Sidebar />
      <ChatList />
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
          {/* <MessageContainer
            sentMsg={true}
            messageBody='Hi Ishit, how are You?'
          />
          <MessageContainer
            sentMsg={false}
            messageBody='I am fine, what about you Prakhar?'
          /> */}
        </div>
        <ComposeMessage />
      </div>
      <ChatInfoPanel show={showInfo} toggle={toggleInfo} />
    </div>
  );
}
