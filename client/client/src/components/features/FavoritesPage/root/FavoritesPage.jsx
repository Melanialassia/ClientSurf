import React from "react";
import FavoriteCard from "../components/FavoriteCard/FavoriteCard";
import { getAllFavoriteProducts } from "../../../../redux/actions/action";
import styles from "./FavoritesPage.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Button, Empty } from 'antd';
import EmptyPage from "../../EmptyPage/roots/EmptyPage";

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const [reload, setReload] = useState(false);
  const favoriteProducts = useSelector((s) => s.favoriteProducts);

  useEffect(() => {
    dispatch(getAllFavoriteProducts());
    setReload(true);
  }, [reload]);

  return (
    <div className={styles.container}>
      <p className={styles.title}>Favoritos</p>

      {favoriteProducts.length === 0 ? (
        <EmptyPage />
      ) : (
        <div>
          {favoriteProducts.map((product) => (
            <FavoriteCard key={product.idProduct} product={product} />
          ))}
        </div>
      )}

      {/*       <div>
        {favoriteProducts.map((product) => {
          return <FavoriteCard key={product.idProduct} product={product} />;
        })}
      </div> */}
    </div>
  );
};

export default FavoritesPage;
