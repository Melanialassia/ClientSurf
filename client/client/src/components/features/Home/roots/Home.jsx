import CarrouselContainer from "../components/Carousel/CarouselContainer";
import HowToBuyContainer from "../components/HowToBuy/HowToBuyContainer";
import NewsletterSubscribe from "../components/NewsletterSubscribe/NewsletterSubscribe";
import PhotoBannerContainer from "../components/PhotoBanner/PhotoBannerContainer";
import ProductHighlights from "../components/ProductHighlights/ProductHighlights";
import styles from "./Home.module.css";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getIdUser } from "../../../../redux/actions/action";

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


  return (
    <div className={styles.homeContainer}>
      <div>
        <CarrouselContainer />
      </div>

      <div>
        <PhotoBannerContainer />
      </div>

      <div>
        <HowToBuyContainer />
      </div>

      <div className={styles.highlights}>
        <ProductHighlights />
      </div>

      <div className={styles.newsletter}>
        <NewsletterSubscribe />
      </div>

      <div className={styles.footer}></div>
    </div>
  );
};

export default Home;
