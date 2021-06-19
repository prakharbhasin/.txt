import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

import "./ChatHeader.css";

export default function ChatHeader({ toggle }) {
  return (
    <div className='active-chat-header'>
      <img
        className='active-chat-image'
        src='https://avatars.githubusercontent.com/u/53562523?v=4'
        alt='active'
      />
      <p className='active-chat-contact'>Ishit Beswal</p>
      <FontAwesomeIcon
        icon={faInfoCircle}
        id='contact-info-button'
        onClick={toggle}
      />
    </div>
  );
}
