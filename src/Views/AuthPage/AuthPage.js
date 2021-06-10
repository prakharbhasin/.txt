import React, { useState } from "react";
import LoginCard from "../../Components/AuthComponents/LoginCard";
import SignUpCard from "../../Components/AuthComponents/SignUpCard";

import LoginIllus from "../../Assets/login-illus1.png";
import "./AuthPage.css";

export default function AuthPage() {
  const [newUser, setNewUser] = useState(false);

  const getCard = () => {
    switch (newUser) {
      case false:
        return <LoginCard toggle={toggleNewUser} />;
      case true:
        return <SignUpCard toggle={toggleNewUser} />;

      default:
        return <LoginCard />;
    }
  };

  const toggleNewUser = () => {
    setNewUser(!newUser);
  };

  return (
    <div className='login-container'>
      <div className='login-section'>
        <img src={LoginIllus} alt='Login!' className='login-illus' />
      </div>
      <div className='login-section'>
        <h1 className='login heading'>Come. Connect.</h1>
        <p className='login subtext'>Interesting by-line goes here lol</p>
        {getCard()}
      </div>
    </div>
  );
}
