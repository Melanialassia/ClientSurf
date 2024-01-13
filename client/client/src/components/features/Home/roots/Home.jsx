import Footer from "../../Footer/roots/Footer";
import Header from "../../Header/roots/Header";
import CarrouselContainer from "../components/Carousel/CarouselContainer";
import NewsletterSubscribe from "../components/NewsletterSubscribe/NewsletterSubscribe";
import ProductFilter from "../components/ProductFilter/ProductFilter";
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
        <Header />
        <button onClick={logOut}>Logout</button>
      </div>

      <div>
        <CarrouselContainer />
      </div>

      <div className={styles.productFilter}>
        <ProductFilter link="/" text="Filtrar por tablas" />

        <ProductFilter link="/" text="Filtrar por indumentaria" />
      </div>

      <div>
        <p className={styles.aboutUs}>
          La Ola Urbana nace a partir del deseo de fomentar y enriquecer la
          experiencia del Surfing a la comunidad de Rosario y alrededores.. 🤙🤙
          Por eso, nuestro compromiso está enfocado en equiparte y asesorarte,
          pero también en facilitar y resolver todo lo que necesitas al momento
          de emprender ruta hacia el mar. El mar está lejos, pero nosotros te
          acercamos. Somos la Ola Urbana
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
