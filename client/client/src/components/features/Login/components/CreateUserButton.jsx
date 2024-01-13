import React from 'react';
import { createAnAccount } from '../utils/constants';

const CreateUserButton = () => {
  return (
    <div>
      <button>{createAnAccount}</button>
    </div>
  )
};

export default CreateUserButton;
