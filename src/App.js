import logo from "./logo.svg";
import LoginIllus from "./Assets/login-illus1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebookF } from "@fortawesome/free-brands-svg-icons";
// import { faGoogle } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function App() {
  return (
    <div className='App'>
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

export default App;
