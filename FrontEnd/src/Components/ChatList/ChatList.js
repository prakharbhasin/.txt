import React, { useEffect } from "react";
import RecentChat from "../RecentChat/RecentChat";
import "./ChatList.css";
import { useStoreState } from "easy-peasy";

export default function ChatPanel({ toggleModal }) {
  const chats = useStoreState((state) => state.chats);
  const currentChat = useStoreState((state) => state.currentChat);

  useEffect(() => {
    console.log(chats);
  }, [chats]);
  //
  return (
    <div className='chat-list'>
      <div className='chat-list-header'>
        <h1 className='chat heading'>Chats</h1>
        <button onClick={toggleModal} className='create-chat-button'>
          +
        </button>
      </div>
      {chats !== []
        ? chats.map((c) => {
            return (
              <RecentChat
                senderName={c.name}
                lastSender='You'
                lastMessage='LOL'
                Time='20:13'
                senderImage={c.displayPicture}
                active={c._id === currentChat ? true : false}
                id={c._id}
                key={c._id}
              />
            );
          })
        : ""}
      {/* <RecentChat
        senderName='Ishit Beswal'
        lastSender='You'
        lastMessage='LOL'
        Time='20:13'
        senderImage='https://avatars.githubusercontent.com/u/53562523?v=4'
        active={false}
      /> */}
      {/*<RecentChat
        senderName='Ishit Beswal'
        lastSender='Ishit'
        lastMessage='Noicee'
        Time='19:53'
        senderImage='https://avatars.githubusercontent.com/u/53562523?v=4'
        active={true}
      />
      <RecentChat
        senderName='Kirtik Singh'
        lastSender='Kirtik'
        lastMessage='HAHAHAHAHA'
        Time='17:45'
        senderImage='https://avatars.githubusercontent.com/u/42700919?v=4'
        active={false}
      />
      <RecentChat
        senderName='Apoorva Nautiyal'
        lastSender='You'
        lastMessage='Hellloooo'
        Time='15:03'
        senderImage='https://raw.githubusercontent.com/prkhrbhsn/CloudTunes/master/Front-End/myapp/assets/Appu.png'
        active={false}
      /> */}
      {/* <RecentChat
        senderName='Ishit Beswal'
        lastSender='Ishit'
        lastMessage='Noicee'
        Time='19:53'
        senderImage='https://avatars.githubusercontent.com/u/53562523?v=4'
        active={false}
      />
      <RecentChat
        senderName='Apoorva Nautiyal'
        lastSender='You'
        lastMessage='Hellloooo'
        Time='15:03'
        senderImage='https://raw.githubusercontent.com/prkhrbhsn/CloudTunes/master/Front-End/myapp/assets/Appu.png'
        active={false}
      />
      <RecentChat
        senderName='Ishit Beswal'
        lastSender='Ishit'
        lastMessage='Noicee'
        Time='19:53'
        senderImage='https://avatars.githubusercontent.com/u/53562523?v=4'
        active={false}
      />
      <RecentChat
        senderName='Apoorva Nautiyal'
        lastSender='You'
        lastMessage='Hellloooo'
        Time='15:03'
        senderImage='https://raw.githubusercontent.com/prkhrbhsn/CloudTunes/master/Front-End/myapp/assets/Appu.png'
        active={false}
      />
      <RecentChat
        senderName='Ishit Beswal'
        lastSender='Ishit'
        lastMessage='Noicee'
        Time='19:53'
        senderImage='https://avatars.githubusercontent.com/u/53562523?v=4'
        active={false}
      />
      <RecentChat
        senderName='Apoorva Nautiyal'
        lastSender='You'
        lastMessage='Hellloooo'
        Time='15:03'
        senderImage='https://raw.githubusercontent.com/prkhrbhsn/CloudTunes/master/Front-End/myapp/assets/Appu.png'
        active={false}
      />
      <RecentChat
        senderName='Ishit Beswal'
        lastSender='Ishit'
        lastMessage='Noicee'
        Time='19:53'
        senderImage='https://avatars.githubusercontent.com/u/53562523?v=4'
        active={false}
      />
      <RecentChat
        senderName='Apoorva Nautiyal'
        lastSender='You'
        lastMessage='Hellloooo'
        Time='15:03'
        senderImage='https://raw.githubusercontent.com/prkhrbhsn/CloudTunes/master/Front-End/myapp/assets/Appu.png'
        active={false}
      /> */}
      {/* <RecentChat />
      <RecentChat /> */}
    </div>
  );
}
