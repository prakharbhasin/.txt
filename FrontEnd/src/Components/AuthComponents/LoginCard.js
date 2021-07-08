import React, { useState } from "react";

import { useStoreActions } from "easy-peasy";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebookF } from "@fortawesome/free-brands-svg-icons";

export default function LoginCard({ toggle }) {
  const [loggedUser, setLoggedUser] = useState({});
  const signIn = useStoreActions((actions) => actions.signIn);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoggedUser({ ...loggedUser, [name]: value });
  };

  const handleClick = () => {
    toggle();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var data = JSON.stringify({ ...loggedUser });
    signIn(data);
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
      <form className='auth-form' onSubmit={handleSubmit}>
        <input
          className='login-input'
          type='text'
          placeholder='Email ID'
          name='email'
          onChange={handleChange}
        />
        <input
          className='login-input'
          type='password'
          placeholder='Password'
          name='password'
          onChange={handleChange}
        />
        <button className='login-button'>Log In</button>
      </form>
      <p className='change-auth-text' onClick={handleClick}>
        New User?
      </p>
    </>
  );
}
