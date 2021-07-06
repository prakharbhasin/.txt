import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";

export default function SignUpCard({ toggle }) {
  toast.configure();
  const [newUser, setNewUser] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleClick = () => {
    toggle();
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    var data = JSON.stringify({ ...newUser });
    var config = {
      method: "post",
      url: "http://localhost:5000/auth/signup",
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
      <FontAwesomeIcon
        id='change-auth-button'
        icon={faArrowAltCircleLeft}
        onClick={handleClick}
      />
      <form className='auth-form' onSubmit={handleSignUp}>
        <input
          className='login-input'
          type='text'
          placeholder='Full Name'
          name='name'
          onChange={handleChange}
        />
        <input
          className='login-input'
          type='text'
          placeholder='Username'
          name='username'
          onChange={handleChange}
        />
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
        <button className='login-button' type='submit'>
          Sign Up
        </button>
      </form>
    </>
  );
}
