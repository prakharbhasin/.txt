import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./ChatInfoPanel.css";
import { useStoreState } from "easy-peasy";

export default function ChatInfoPanel({ show, toggle }) {
  const currChatDetails = useStoreState((state) => state.currentChatDetails);

  useEffect(() => {}, [currChatDetails]);
  return (
    <div className={`contact-info-container ` + (show ? "active" : "")}>
      <FontAwesomeIcon id='info-close' icon={faTimes} onClick={toggle} />
      <img
        className='contact-info-img'
        src={currChatDetails.displayPicture}
        alt=''
      />
      <h1 className='contact-info-name'>{currChatDetails.name}</h1>
      {currChatDetails.users !== undefined &&
      currChatDetails.users.length > 2 ? (
        currChatDetails.users.map((u) => {
          return (
            <div className='chat-users-info-container'>
              <img className='chat-user-info-image' src={u.displayPicture} />
              <p className='contact-info-mail multiple '>
                {/* <span>Email: </span> */}
                {u.name}
              </p>
            </div>
          );
        })
      ) : (
        <p className='contact-info-mail'>
          <span>Email: </span>
          {currChatDetails.users !== undefined
            ? currChatDetails.users[1].email
            : ""}
        </p>
      )}
    </div>
  );
}
