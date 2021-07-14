import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { useStoreState } from "easy-peasy";

import "./ChatHeader.css";

export default function ChatHeader({ toggle }) {
  const currChatDetails = useStoreState((state) => state.currentChatDetails);
  return (
    <>
      {currChatDetails !== {} ? (
        <div className='active-chat-header'>
          <img
            className='active-chat-image'
            src={currChatDetails.displayPicture}
            alt='active'
          />
          <div style={{ padding: "0 2%", width: "20%" }}>
            <p className='active-chat-contact'>{currChatDetails.name}</p>
            {currChatDetails.users !== undefined &&
            currChatDetails.users.length > 2
              ? currChatDetails.users.map((u) => {
                  return (
                    <p className='active-chat-users'>
                      {" "}
                      {`${u.name.split(" ").slice(0, -1)}`}
                    </p>
                  );
                })
              : ""}
          </div>
          <FontAwesomeIcon
            icon={faInfoCircle}
            id='contact-info-button'
            onClick={toggle}
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
}
