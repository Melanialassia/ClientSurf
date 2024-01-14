import React from "react";
import { createAccount } from "../utils/constants";

const SaveButton = ({ handleDisable }) => {
  return (
    <div>
      <button type="submit" disabled={handleDisable}>
        {createAccount}
      </button>
    </div>
  );
};

export default SaveButton;
