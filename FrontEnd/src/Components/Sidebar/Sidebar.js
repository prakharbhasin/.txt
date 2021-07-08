import React from "react";
import ToggleButton from "../toggleButton";
import { useStoreActions } from "easy-peasy";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

import "./Sidebar.css";

export default function Sidebar() {
  const verifyUser = useStoreActions((actions) => actions.verifyUser);
  return (
    <div className='sidebar'>
      <FontAwesomeIcon icon={faQuoteLeft} id='sidebar-icons' />
      <ToggleButton />
      <FontAwesomeIcon
        icon={faQuoteLeft}
        id='sidebar-icons'
        onClick={verifyUser}
      />
    </div>
  );
}
