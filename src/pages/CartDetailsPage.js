import FrameComponent from "../components/FrameComponent";
import CartItems from "../components/CartItems";
import FooterDesktop from "../components/FooterDesktop";
import "./CartDetailsPage.css";

const CartDetailsPage = () => {
  return (
    <div className="cartdetailspage">
      <FrameComponent
        yourCart="Your Cart"
        viewOrEditYourCartBeforeC="View or edit your cart before checkout"
      />
      <CartItems />
      <FooterDesktop
        linkPictureApplesvg="/link--picture--applesvg@2x.png"
        linkPictureGooglesvg="/link--picture--googlesvg@2x.png"
      />
    </div>
  );
};

export default CartDetailsPage;
