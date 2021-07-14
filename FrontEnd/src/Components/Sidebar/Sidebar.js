import React from "react";
import ToggleButton from "../toggleButton";
import { useStoreActions, useStoreState } from "easy-peasy";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import "./Sidebar.css";

export default function Sidebar() {
  const signOut = useStoreActions((actions) => actions.signOut);
  const userImage = useStoreState((state) => state.userInfo).displayPicture;
  return (
    <div className='sidebar'>
      <div className='sidebar-section'>
        {/* <FontAwesomeIcon icon={faQuoteLeft} id='sidebar-icons' /> */}
        <img src={userImage} className='sidebar-profile-image' />
      </div>
      <div className='sidebar-section'>
        <ToggleButton />
        <FontAwesomeIcon
          icon={faSignOutAlt}
          id='sidebar-icons'
          onClick={signOut}
        />
      </div>
    </div>
  );
}
