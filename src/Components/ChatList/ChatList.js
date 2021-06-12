import React from "react";
import RecentChat from "../RecentChat/RecentChat";
import "./ChatList.css";

export default function ChatPanel() {
  return (
    <div className='chat-list'>
      <h1 className='chat heading'>Chats</h1>
      <RecentChat
        senderName='Prakhar Bhasin'
        lastSender='You'
        lastMessage='LOL'
        Time='20:13'
        senderImage='https://avatars.githubusercontent.com/u/61727284?v=4'
        active={false}
      />
      <RecentChat
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
      />
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
