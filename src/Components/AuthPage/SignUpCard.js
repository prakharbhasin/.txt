import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";

export default function SignUpCard({ toggle }) {
  const handleClick = () => {
    toggle();
  };
  return (
    <>
      <FontAwesomeIcon
        id='change-auth-button'
        icon={faArrowAltCircleLeft}
        onClick={handleClick}
      />

      <input className='login-input' type='text' placeholder='Full Name' />
      <input className='login-input' type='text' placeholder='Email ID' />
      <input className='login-input' type='password' placeholder='Password' />
      <button className='login-button'>Sign Up</button>
    </>
  );
}
