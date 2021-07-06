import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebookF } from "@fortawesome/free-brands-svg-icons";

export default function LoginCard({ toggle }) {
  const [loggedUser, setLoggedUser] = useState({});
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
    var config = {
      method: "post",
      url: "http://localhost:5000/auth/signin",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        let responseData = response.data;
        if (responseData.success) {
          toast.success(responseData.message);
          console.log(responseData);
        } else {
          console.log(responseData.message);
          toast.error(responseData.message);
        }
      })
      .catch(function (err) {
        console.log(err);
      });
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
      <form class='auth-form' onSubmit={handleSubmit}>
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
