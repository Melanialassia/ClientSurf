//HOOKS
import React from "react";
import { Link } from "react-router-dom";
//COMPONENTS
import {
  fAQ,
  changePolicy,
  contact,
  celNumber,
  email,
  opneningHs,
  days
} from "../utils/constants";
//STYLE-SHEETS
import styles from "./Footer.module.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    <div className={styles.footerContainer}>
      <div>
        <img
          className={styles.logo}
          src="/assets/images/logoFooter.png"
          alt="Logo"
        />
      </div>

      <div className={styles.policiess}>
        <Link to={"/faq"} onClick={scrollToTop}>
        <p>{fAQ}</p>
        </Link>
        <Link to={"/change-policy"} onClick={scrollToTop}>
          <p>{changePolicy}</p>
        </Link>
      </div>
      <div className={styles.policies}>
        <p>{contact}</p>
        <p className={styles.policis}>{celNumber}</p>
        <p className={styles.policis}>{email}</p>
        <p className={styles.policis}>{opneningHs}</p>
        <p className={styles.policis}>{days}</p>
      </div>
      <a
        href="https://www.instagram.com/laolaurbana.ros/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className={styles.logoIg}
          src="/assets/images/logoIg.png"
          alt="LogoIg"
        />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=61551786068824"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className={styles.logoFb}
          src="/assets/images/facebook.png"
          alt="LogoFb"
        />
      </a>
    </div>
  );
};

export default Footer;
