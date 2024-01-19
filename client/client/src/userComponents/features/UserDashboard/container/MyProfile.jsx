//hooks
import React from 'react';
//components
import {
  myAccount,
  personalInfo
} from '../utils/constants'
//style-sheets
import styles from './MyProfile.module.css';

const MyProfile = () => {
  return (
    <div className={styles.container}>
      <h1>{myAccount}</h1>
      <h2>{personalInfo}</h2>
    </div>
  )
}

export default MyProfile