import LoginModal from "../../LoginModal/root/LoginModal";
import CarrouselContainer from "../components/Carousel/CarouselContainer";
import HowToBuyContainer from "../components/HowToBuy/HowToBuyContainer";
import NewsletterSubscribe from "../components/NewsletterSubscribe/NewsletterSubscribe";
import PhotoBannerContainer from "../components/PhotoBanner/PhotoBannerContainer";
import ProductHighlights from "../components/ProductHighlights/ProductHighlights";
import styles from "./Home.module.css";
import { useSelector, useDispatch } from "react-redux";
import { OPEN_MODAL } from "../../../../redux/actions-types/actions-types";

const Home = () => {
  const dispatch = useDispatch();

  const open = useSelector((s) => s.openModal);

  const logOut = () => {
    localStorage.clear();
    window.location.reload();
  };

  const handleOpenModal = () => {
    dispatch({ type: OPEN_MODAL });
  };

  return (
    <div className={styles.homeContainer}>
      <div>
        <button onClick={logOut}>Logout</button>
        <br></br>
        <button onClick={handleOpenModal}>Open model</button>
      </div>

      <div>
        <LoginModal open={open} />
      </div>

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
