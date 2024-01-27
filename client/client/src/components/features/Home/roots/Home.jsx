//HOOKS
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { filterProducts, getIdUser } from "../../../../redux/actions/action";
import { Link } from "react-router-dom";
//COMPONENTS
import CarrouselContainer from "../components/Carousel/CarouselContainer";
import HowToBuyContainer from "../components/HowToBuy/HowToBuyContainer";
import NewsletterSubscribe from "../components/NewsletterSubscribe/NewsletterSubscribe";
import ProductHighlights from "../components/ProductHighlights/ProductHighlights";
//STYLE-SHEETS
import styles from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();

  const dataUser = useSelector((state) => state.dataUser);

  let userInfoFistrLogin = null;

  if (dataUser) {
    userInfoFistrLogin = dataUser.idUser;
  }

  const open = useSelector((state) => state.openModal);

  useEffect(() => {
    if (userInfoFistrLogin) {
      dispatch(getIdUser(userInfoFistrLogin));
    }
  }, [userInfoFistrLogin]);

  useEffect(() => {
    if (userInfoFistrLogin) {
      dispatch(getIdUser(userInfoFistrLogin));
    }
  }, [userInfoFistrLogin]);

  const HandleFilterTable = () => {
    const obj = {
      idCategory: 1,
    };
    dispatch(filterProducts(obj));
  };

  const HandleFilterAccesories = () => {
    const obj = {
      idCategory: 2,
    };
    dispatch(filterProducts(obj));
  };

  return (
    <div className={styles.homeContainer}>
      <div>
        <CarrouselContainer />
      </div>

      <div>
        <Link to={"/products"}>
          <img
            onClick={() => HandleFilterTable()}
            src="/assets/images/tablas.png"
            alt="Imagen 1"
            className={styles.imagenFiltrotabla}
          />
        </Link>

        <Link to={"/products"}>
          <img
            onClick={() => HandleFilterAccesories()}
            src="/assets/images/accesorios.png"
            alt="Imagen 1"
            className={styles.imagenFiltroaccesorio}
          />
        </Link>
      </div>

      <div>
        <HowToBuyContainer />
      </div>

      <div className={styles.highlights}>
        <ProductHighlights />
      </div>

      {/* <div className={styles.newsletter}>
        <NewsletterSubscribe />
      </div> */}

      <div className={styles.footer}></div>
    </div>
  );
};

export default Home;
