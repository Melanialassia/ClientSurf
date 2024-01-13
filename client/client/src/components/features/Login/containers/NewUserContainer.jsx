import React from 'react';
import { Link } from 'react-router-dom';
import { newCustomers, textnewCustomers } from '../utils/constants';
import CreateUserButton from '../components/CreateUserButton';


const NewUserContainer = () => {


  return (
    <div>

      <h2>{newCustomers}</h2>
      <h4>{textnewCustomers}</h4>
      <Link to={'/account/create'}>
     <CreateUserButton/>
      </Link>

    </div>

    
  )
};

export default NewUserContainer;
