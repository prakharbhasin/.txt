import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";

export default function SignUpCard({ toggle }) {
  const [newUser, setNewUser] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

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
      <button className='login-button'>Sign Up</button>
    </>
  );
}
