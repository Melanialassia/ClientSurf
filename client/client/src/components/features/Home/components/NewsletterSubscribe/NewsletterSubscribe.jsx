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

        <p>Subscribirse al Newsletter</p>
      </div>
    </div>
  );
};

export default NewsletterSubscribe;
