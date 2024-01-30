import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReviewCard from "../container/ReviewCard";
import styles from "./ReviewPage.module.css";
//import { getSaleDetails } from "../../../../redux/actions/action";
import axios from "axios";

const ReviewPage = ({ idSale, idUser }) => {
  const dispatch = useDispatch();
  const [userSale, setUserSale] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await handlerGetSaleDetails(35); //TODO: cambiar por idSale
      } catch (error) {
        throw Error("No se pudo traer los objetos de la compra: ", error);
      }
    };
    fetchData();
  }, []);

  const handlerGetSaleDetails = async (idSale) => {
    const { data } = await axios.get(
      `https://surf-4i7c.onrender.com/surf/detail/${idSale}`
    );
    const response = data.data;
    setUserSale(response);
  };

  return (
    < >
      <p className={styles.title}>Califica tu compra</p>
      <div className={styles.wrapper}>
      {userSale.map((item) => (
        <ReviewCard
          key={item.idProduct}
          idProduct={item.idProduct}
          idUser={84} /* TODO: cambiar por idUser */
        />
      ))}
      </div>
    </>
  );
};

export default ReviewPage;
