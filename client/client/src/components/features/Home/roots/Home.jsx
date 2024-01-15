import Footer from "../../Footer/roots/Footer";
import Header from "../../Header/roots/Header";
import CarrouselContainer from "../components/Carousel/CarouselContainer";
import HowToBuyContainer from "../components/HowToBuy/HowToBuyContainer";
import NewsletterSubscribe from "../components/NewsletterSubscribe/NewsletterSubscribe";
import PhotoBannerContainer from "../components/PhotoBanner/PhotoBannerContainer";
import ProductHighlights from "../components/ProductHighlights/ProductHighlights";
import styles from "./Home.module.css";

const Home = () => {
  const logOut = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className={styles.homeContainer}>
      <div>
        <button onClick={logOut}>Logout</button>
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

      <div className={styles.footer}>
      </div>
    </div>
  );
};

export default Home;
