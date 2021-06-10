import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebookF } from "@fortawesome/free-brands-svg-icons";

export default function LoginCard({ toggle }) {
  const handleClick = () => {
    toggle();
  };
  return (
    <>
      <div className='social-login-container'>
        <button id='social-login-button'>
          <FontAwesomeIcon id='social-icon' icon={faGoogle} />
          Google
        </button>
        <button id='social-login-button'>
          <FontAwesomeIcon id='social-icon' icon={faFacebookF} />
          Facebook
        </button>
      </div>
      <input className='login-input' type='text' placeholder='Email ID' />
      <input className='login-input' type='password' placeholder='Password' />
      <button className='login-button'>Log In</button>
      <p className='change-auth-text' onClick={handleClick}>
        New User?
      </p>
    </>
  );
}
