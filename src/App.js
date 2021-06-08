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

        <FontAwesomeIcon id='social-login-button' icon={faGoogle} />
        <FontAwesomeIcon id='social-login-button' icon={faFacebookF} />
      </div>
    </div>
  );
}

export default App;
