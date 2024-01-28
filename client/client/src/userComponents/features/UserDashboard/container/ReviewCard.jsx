import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { SendOutlined } from "@ant-design/icons";
import { Button, Card, Rate, Input, Flex } from "antd";
import styles from "./ReviewCard.module.css";

function ReviewCard({ sale, user }) {
  const dispatch = useDispatch();
  const [rate, setRate] = useState(3);
  const { TextArea } = Input;
  return (
    <Card>
      <div className={styles.container}>
        <img
          className={styles.image}
          src="https://m.media-amazon.com/imaSges/I/613KIO7ThDL._AC_SX569_.jpg"
          alt="Product image"
        />

        <div className={styles.textContainer}>
          <div className={styles.nameRate}>
            <Link>
              <p>Nombre del producto || $99.99</p>
            </Link>

            <Rate onChange={setRate} value={rate}/>
          </div>

          <div>
            <TextArea className={styles.textarea} rows={4} placeholder="maxLength is 6" maxLength={6} />
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <Button type="primary" icon={<SendOutlined />}>
            Enviar
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default ReviewCard;
