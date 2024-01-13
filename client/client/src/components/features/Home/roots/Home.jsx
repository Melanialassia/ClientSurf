import Footer from "../../Footer/roots/Footer";
import Header from "../../Header/roots/Header";
import CarrouselContainer from "../components/Carousel/CarouselContainer";
import NewsletterSubscribe from "../components/NewsletterSubscribe/NewsletterSubscribe";
import ProductFilter from "../components/ProductFilter/ProductFilter";
import ProductHighlights from "../components/ProductHighlights/ProductHighlights";
import styles from "./Home.module.css"

const Home = () => {

  const logOut = () => {
    localStorage.clear();
    window.location.reload()
  }

  return (
    <div className={styles.homeContainer}>
      <div>
        <Header />
        <button onClick={logOut}>Logout</button>
      </div>

      <div>
        <CarrouselContainer />
      </div>

      <div className={styles.productFilter}>
        <ProductFilter link="/home" text="Filter by surfboards" />

        <ProductFilter link="/home" text="Filter by clothing" />
      </div>

      <div >
        <p className={styles.aboutUs}>
          La Ola Urbana was born from the desire to promote and enrich the
          surfing experience to the community of Rosario and its surroundings.
          🤙🤙 Therefore, our commitment is focused on equipping and advising
          you, but also in facilitating and solving everything you need at the
          time to take route to the sea. The sea is far away, but we bring you
          closer. We are La Ola Urbana.
        </p>
      </div>

      <div className={styles.highlights}>
        <ProductHighlights />
      </div>

      <div className={styles.newsletter}>
        <NewsletterSubscribe />
      </div>

      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;