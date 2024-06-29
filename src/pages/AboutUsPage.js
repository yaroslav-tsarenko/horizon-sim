import Header1 from "../components/Header1";
import FrameComponent from "../components/FrameComponent";
import FrameComponent6 from "../components/FrameComponent6";
import FooterDesktop from "../components/FooterDesktop";
import "./AboutUsPage.css";

const AboutUsPage = () => {
  return (
    <div className="aboutuspage">
      <Header1 />
      <FrameComponent
        activateYourESIM="What is Horizon Sim?"
        unlockThePowerOfSeamlessC="Experience unparalleled freedom with Horizonsim – the premier virtual network provider offering cutting-edge eSIM services. Say goodbye to physical SIM cards and hello to a world of limitless connectivity."
        image="/picture--image@2x.png"
      />
      <section className="about-us-content">
        <div className="picture-image-parent">
          <img
            className="picture-image"
            alt=""
            src="/picture--image-1@2x.png"
          />
          <div className="created-by-nexustech-solutions-parent">
            <h1 className="created-by-nexustech">
              Created by NexusTech Solutions
            </h1>
            <div className="horizonsim-proudly-crafted-container">
              <p className="horizonsim-proudly-crafted">
                Horizonsim, proudly crafted by Nexus Tech Solutions,
                revolutionizes the way we experience connectivity in the digital
                age. Born from a passion for innovation and a commitment to
                excellence, Horizonsim offers users a seamless and intuitive
                eSIM solution designed to transcend borders and limitations.
              </p>
              <p className="blank-line">&nbsp;</p>
              <p className="join-the-horizonsim">
                Join the Horizonsim community today and experience the freedom
                of seamless connectivity, brought to you by Nexus Tech
                Solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <FrameComponent6 />
      <FooterDesktop
        linkPictureApplesvg="/link--picture--applesvg@2x.png"
        linkPictureGooglesvg="/link--picture--googlesvg@2x.png"
      />
    </div>
  );
};

export default AboutUsPage;
