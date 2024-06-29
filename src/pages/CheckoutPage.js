import FrameComponent from "../components/FrameComponent";
import BillingDetails from "../components/BillingDetails";
import FooterDesktop from "../components/FooterDesktop";
import "./CheckoutPage.css";

const CheckoutPage = () => {
  return (
    <div className="checkoutpage">
      <FrameComponent
        yourCart="Checkout"
        viewOrEditYourCartBeforeC="View or edit your cart before checkout"
      />
      <BillingDetails />
      <FooterDesktop
        linkPictureApplesvg="/link--picture--applesvg@2x.png"
        linkPictureGooglesvg="/link--picture--googlesvg@2x.png"
      />
    </div>
  );
};

export default CheckoutPage;
