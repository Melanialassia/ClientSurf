import Footer from "../../Footer/roots/Footer";
import Header from "../../Header/roots/Header";
import Carrousel from "../components/Carrousel/Carrousel";
import NewsletterSubscribe from "../components/NewsletterSubscribe/NewsletterSubscribe";
import ProductFilter from "../components/ProductFilter/ProductFilter";
import ProductHighlights from "../components/ProductHighlights/ProductHighlights";

const Home = () => {
  return (
    <div>
      <div>
        <Header />
      </div>

      <div>
        <Carrousel />
      </div>

      <div>
        <ProductFilter link="/home" text="Filter by surfboards" />

        <ProductFilter link="/home" text="Filter by clothing" />
      </div>

      <div>
        <p>
          La Ola Urbana was born from the desire to promote and enrich the
          surfing experience to the community of Rosario and its surroundings.
          🤙🤙 Therefore, our commitment is focused on equipping and advising
          you, but also in facilitating and solving everything you need at the
          time to take route to the sea. The sea is far away, but we bring you
          closer. We are La Ola Urbana.
        </p>
      </div>

      <div>
        <ProductHighlights />
      </div>

      <div>
        <NewsletterSubscribe />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
