import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebookF } from "@fortawesome/free-brands-svg-icons";

import LoginIllus from "../../Assets/login-illus1.png";
import "./AuthPage.css";

export default function AuthPage() {
  return (
    <div className='login-container'>
      <div className='login-section'>
        <img src={LoginIllus} alt='Login!' className='login-illus' />
      </div>
      <div className='login-section'>
        <h1 className='login heading'>Come. Connect.</h1>
        <p className='login subtext'>Interesting by-line goes here lol</p>
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
      </div>
    </div>
  );
}
