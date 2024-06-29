import Header from "../components/Header";
import BackgroundBorderShadow from "../components/BackgroundBorderShadow";
import DestinationGrid from "../components/DestinationGrid";
import FooterDesktop from "../components/FooterDesktop";
import "./ProductListingPage.css";

const ProductListingPage = () => {
  return (
    <div className="productlistingpage">
      <Header />
      <div className="hero">
        <div className="heading-1">Connectivity Without Borders:</div>
        <div className="explore-all-destinations">
          Explore all destinations with Horizon Sim. Our global network ensures
          seamless connectivity wherever your travels take you.
        </div>
      </div>
      <div className="search-bar">
        <BackgroundBorderShadow
          background="/background1.svg"
          propWidth="759.8px"
        />
        <DestinationGrid />
      </div>
      <FooterDesktop
        linkPrivacyPolicHref="https://www.figma.com/design/ChO0euFDvPgaehWUhty9Gg?node-id=1-3974"
        linkPrivacyPolicTarget="_blank"
        linkPictureApplesvg="/link--picture--applesvg@2x.png"
        linkPictureGooglesvg="/link--picture--googlesvg@2x.png"
      />
    </div>
  );
};

export default ProductListingPage;
