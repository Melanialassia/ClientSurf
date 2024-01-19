import LoginModal from "../../LoginModal/root/LoginModal";
import CarrouselContainer from "../components/Carousel/CarouselContainer";
import HowToBuyContainer from "../components/HowToBuy/HowToBuyContainer";
import NewsletterSubscribe from "../components/NewsletterSubscribe/NewsletterSubscribe";
import PhotoBannerContainer from "../components/PhotoBanner/PhotoBannerContainer";
import ProductHighlights from "../components/ProductHighlights/ProductHighlights";
import styles from "./Home.module.css";
import { useSelector } from "react-redux";

const Home = () => {
  const open = useSelector((s) => s.openModal);

  return (
    <div className={styles.homeContainer}>
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
