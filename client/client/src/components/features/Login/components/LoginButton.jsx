import React from "react";
import { login } from "../utils/constants";

const LoginButton = () => {
  return (
    <div>
      <button type="submit">{login}</button>
    </div>
  );
};

export default LoginButton;
