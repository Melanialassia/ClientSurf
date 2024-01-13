import React from "react";
import { MailOutlined } from "@ant-design/icons";
import styles from "./NewsletterSubscribe.module.css"

const NewsletterSubscribe = () => {
  return (
    <div>
      <div className={styles.socialMedia}>
        <MailOutlined 
        style={{
          fontSize: "80px",
        }}
        />

        <p>Subscribe to the newsletter</p>
      </div>
    </div>
  );
};

export default NewsletterSubscribe;
