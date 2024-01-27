//HOOKS
import { useSelector, useDispatch } from "react-redux";
import { filterProducts, getIdUser } from "../../../../redux/actions/action";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
//COMPONENTS
import NewsletterSubscribe from "../components/NewsletterSubscribe/NewsletterSubscribe";
import ProductHighlights from "../components/ProductHighlights/ProductHighlights";
import CarrouselContainer from "../components/Carousel/CarouselContainer";
import HowToBuyContainer from "../components/HowToBuy/HowToBuyContainer";
//ACTION
import { logOut } from "../../../../redux/actions/action";
//STYLE-SHEETS
import styles from "./Home.module.css";
//LIBRARY
import { Modal } from "antd";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dataUser = useSelector((state) => state.dataUser);

  let userInfoFistrLogin = null;
  let activeUser = null;

  if (dataUser) {
    userInfoFistrLogin = dataUser.idUser;
    activeUser = dataUser.activeUser;
  }

  const open = useSelector((state) => state.openModal);

  const handleLogOut = () => {
    localStorage.removeItem('access');
    localStorage.setItem('logedUser', JSON.stringify(false));
    localStorage.removeItem('idLevel');
    dispatch(logOut());
    navigate('/login');
  }

  useEffect(() => {
    if (dataUser && activeUser === true) {
      dispatch(getIdUser(dataUser.idUser));
    }

    if(dataUser && activeUser === false){
      Modal.error({
        title: "Usuario inhabilitado",
        content: "Tu cuenta se encuentra inhabilitada. ¡Para activar tu cuenta mandanos un mensaje a laolaurbana@gmail.com !",
        onOk: () => {
           handleLogOut();
        },
      });
    }
  }, [dataUser, activeUser, dispatch]);


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
