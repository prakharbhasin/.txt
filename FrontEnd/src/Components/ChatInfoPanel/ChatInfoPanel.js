import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./ChatInfoPanel.css";

export default function ChatInfoPanel({ show, toggle }) {
  return (
    <div className={`contact-info-container ` + (show ? "active" : "")}>
      <FontAwesomeIcon id='info-close' icon={faTimes} onClick={toggle} />
      <img
        className='contact-info-img'
        src='https://avatars.githubusercontent.com/u/53562523?v=4'
        alt=''
      />
      <h1 className='contact-info-name'>Ishit Beswal</h1>
      <p className='contact-info-mail'>
        <span>Email: </span>ib370@snu.edu.in
      </p>
    </div>
  );
}
