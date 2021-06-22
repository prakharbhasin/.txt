import React from "react";
import ToggleButton from "../toggleButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <FontAwesomeIcon icon={faQuoteLeft} id='sidebar-icons' />
      <ToggleButton />
    </div>
  );
}
