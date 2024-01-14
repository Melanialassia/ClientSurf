import React from "react";
import { loginWithGoogle } from "../utils/constants";

const LoginWithGoogleButton = ({ handleClick }) => {
  return (
    <div>
      <button onClick={handleClick}>{loginWithGoogle}</button>
    </div>
  );
};

export default LoginWithGoogleButton;
