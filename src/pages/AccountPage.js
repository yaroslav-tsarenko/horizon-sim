import FrameComponent from "../components/FrameComponent";
import FrameComponent1 from "../components/FrameComponent1";
import FooterDesktop from "../components/FooterDesktop";
import "./AccountPage.css";

const AccountPage = () => {
  return (
    <div className="accountpage">
      <FrameComponent
        yourCart="Welcome, Darnell"
        viewOrEditYourCartBeforeC="Your Personal Dashboard"
      />
      <FrameComponent1 />
      <FooterDesktop
        linkPrivacyPolicHref="https://www.figma.com/design/ChO0euFDvPgaehWUhty9Gg?node-id=1-3974"
        linkPrivacyPolicTarget="_blank"
        linkPictureApplesvg="/link--picture--applesvg@2x.png"
        linkPictureGooglesvg="/link--picture--googlesvg@2x.png"
      />
    </div>
  );
};

export default AccountPage;
