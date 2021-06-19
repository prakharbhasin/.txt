import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import { faLightbulb as farLightBulb } from "@fortawesome/free-solid-svg-icons";
import { useStoreState, useStoreActions } from "easy-peasy";

export default function ToggleButton() {
  const theme = useStoreState((state) => state.darkTheme);
  const toggle = useStoreActions((actions) => actions.toggle);
  return (
    <FontAwesomeIcon
      icon={theme ? faLightbulb : farLightBulb}
      onClick={toggle}
      id='sidebar-icons'
    ></FontAwesomeIcon>
  );
}
