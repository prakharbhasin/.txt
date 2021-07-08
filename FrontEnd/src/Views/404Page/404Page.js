import React from "react";
import Lottie from "lottie-react";
import animationDark from "../../Assets/animationDark.json";
import animationLight from "../../Assets/animationLight.json";

import { useStoreState } from "easy-peasy";

import "./404Page.css";

export default function ErrorPage() {
  const darkTheme = useStoreState((state) => state.darkTheme);
  return (
    <div className='error-container'>
      <div className='error section'>
        <Lottie
          animationData={darkTheme ? animationDark : animationLight}
          className='error-animation'
          loop={false}
        />
      </div>
      <div className='error section'>
        <div>
          <h1 className='error-heading'>Whoooopss!</h1>
          <p className='error-subtext'>
            The page you're looking for doesn't exist.
          </p>
          <p className='error-subtext two'>
            (unless you wanted to see a cool 404 animation)
          </p>
        </div>
        <button href='/' className='error-button'>
          Go Back Home
        </button>
      </div>
    </div>
  );
}
