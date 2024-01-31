import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { SendOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Card, Rate, Input, Flex, message } from "antd";
import styles from "./ReviewCard.module.css";
import { AddRating } from "../../../../redux/actions/action";
import axios from "axios";

function ReviewCard({ idProduct, idUser }) {
  const dispatch = useDispatch();
  const [rate, setRate] = useState(0);
  const [rateStatus, setRateStatus] = useState(false);
  const [product, setProduct] = useState({});

  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await handlerProductDetails(idProduct);

        const savedRate = localStorage.getItem(`rate_${idProduct}`);
        if (savedRate !== null) {
          setRate(JSON.parse(savedRate));
          setRateStatus(true);
        }

      } catch (error) {
        throw Error("No se pudo traer los objetos de la compra: ", error);
      }
    };
    fetchData();
  }, []);

  const handlerProductDetails = async (idProduct) => {
    const { data } = await axios.get(
      `https://surf-4i7c.onrender.com/surf/product/${idProduct}`
    );
    const response = data.listProducts[0];
    setProduct(response);
  };
 
  const handleAddRating = () => {
    const data = {
      idUser: idUser,
      idProduct: idProduct,
      points: rate,
      comment: ""


    };

    dispatch(AddRating(data));
    localStorage.setItem(`rate_${idProduct}`, JSON.stringify(data.points));
    setRateStatus(true); 
    messageApi.open({
      type: "success",
      content: "Calificacion enviada! 🏄🏼",
    });
  };

  const handleEditRating = () => {
    const data = {
      idUser: idUser,
      idProduct: idProduct,
      points: rate,
    };
    dispatch(AddRating(data));
    setRateStatus(false);
    messageApi.open({
      type: "success",
      content: "Calificacion enviada! 🏄🏼",
    });
  };

  return (
    <Card className={styles.container}>
      {contextHolder}
      <div >
        <div className={styles.nameRate}>
          <p>{product.name}</p>

          {/* <div>
            <TextArea className={styles.textarea} rows={4} placeholder="maxLength is 6" maxLength={6} />
          </div> */}
        </div>

        <img className={styles.image} src={product.image} alt="Product image" />

        <Rate disabled={rateStatus} onChange={setRate} value={rate} />

        <div className={styles.buttonContainer}>
          {rateStatus ? (
            <Button
              disabled={true}
              /* onClick={() => handleEditRating()} */
              type="primary"
              icon={<EditOutlined />}
            >
              Calificación enviada
            </Button>
          ) : (
            <Button
              onClick={() => handleAddRating()}
              type="primary"
              icon={<SendOutlined />}
            >
              Enviar Calificación
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}

export default ReviewCard;
