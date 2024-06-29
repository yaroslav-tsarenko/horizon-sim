import Header1 from "../components/Header1";
import FrameComponent4 from "../components/FrameComponent4";
import Background1 from "../components/Background1";
import BenefitCardItems from "../components/BenefitCardItems";
import FrameComponent from "../components/FrameComponent";
import FrameComponent5 from "../components/FrameComponent5";
import FooterDesktop from "../components/FooterDesktop";
import "./ProductDescriptionPage.css";

const ProductDescriptionPage = () => {
  return (
    <div className="productdescriptionpage">
      <Header1 />
      <FrameComponent4 />
      <section className="how-it-works-content-parent">
        <div className="how-it-works-content">
          <h1 className="heading-21">How to set up an eSIM</h1>
          <div className="before-buying-an">
            Before buying an eSIM plan, check if your phone is eSIM compatible.
            Then, follow these steps to get an eSIM plan with HorizonSim
          </div>
        </div>
        <div className="background-parent">
          <div className="background1">
            <div className="background2">
              <div className="empty-steps">01</div>
              <div className="step-1f629f1easvg-wrapper">
                <img
                  className="step-1f629f1easvg-icon"
                  loading="lazy"
                  alt=""
                  src="/step1f629f1easvg.svg"
                />
              </div>
            </div>
            <div className="background3">
              <h3 className="data-plan-selection">
                Data Plan Selection Made Simple
              </h3>
              <div className="horizon-sim-streamlines">
                Horizon Sim streamlines the process of selecting your ideal data
                plan.
              </div>
            </div>
          </div>
          <Background1
            prop="02"
            step2eb28dc5asvg="/step1f629f1easvg.svg"
            effortlessAppDownload="Effortless App Download"
            downloadingTheHorizonSimA="Downloading the Horizon Sim app is your ticket to hassle-free connectivity."
          />
          <Background1
            prop="03"
            step2eb28dc5asvg="/step320eb749esvg1@2x.png"
            effortlessAppDownload="Activation Made Easy"
            downloadingTheHorizonSimA="Activating your Horizon Sim eSIM is a seamless process that takes just minutes."
            propFlex="unset"
            propMinWidth="unset"
          />
        </div>
      </section>
      <section className="background4">
        <div className="frame-parent">
          <div className="why-saily-parent">
            <div className="why-saily1">Why Saily?</div>
            <h1 className="heading-22">Stay connected wherever you go</h1>
          </div>
          <div className="benefits-cards">
            <BenefitCardItems
              img="/img-10.svg"
              heading3Affordable="Affordable"
              findADataPlanThatWorksFor="Find a data plan that works for your"
              budget="budget."
            />
            <BenefitCardItems
              img="/img-11.svg"
              heading3Affordable="Easy to use"
              findADataPlanThatWorksFor="Just get the app and buy a data"
              budget="plan. Easy!"
              propFlex="0.9156"
              propMinHeight="unset"
              propGap="32px"
            />
            <BenefitCardItems
              img="/img-12.svg"
              heading3Affordable="Avoid roaming charges"
              findADataPlanThatWorksFor="Sneaky roaming fees are a thing of"
              budget="the past."
              propFlex="0.9831"
              propMinHeight="unset"
              propGap="32px"
            />
          </div>
        </div>
      </section>
      <FrameComponent
        activateYourESIM="Activate Your eSIM:"
        unlockThePowerOfSeamlessC="Unlock the power of seamless connectivity with eSIM activation, a simple process that empowers you to stay connected on your terms. Whether you're upgrading to a new device or embracing the convenience of digital SIM technology for the first time, activating your eSIM is a breeze."
        image="/image-11@2x.png"
      />
      <FrameComponent5 />
      <FooterDesktop
        linkPictureApplesvg="/link--picture--applesvg1@2x.png"
        linkPictureGooglesvg="/link--picture--googlesvg1@2x.png"
      />
    </div>
  );
};

export default ProductDescriptionPage;
