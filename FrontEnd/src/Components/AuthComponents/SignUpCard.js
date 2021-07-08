import React, { useState } from "react";
import { useStoreActions } from "easy-peasy";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";

export default function SignUpCard({ toggle }) {
  const [newUser, setNewUser] = useState({});
  const signIn = useStoreActions((actions) => actions.signUp);

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
    signIn(data);
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
