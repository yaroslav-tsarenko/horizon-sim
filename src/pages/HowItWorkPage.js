import Header1 from "../components/Header1";
import Content from "../components/Content";
import BenefitCardItems from "../components/BenefitCardItems";
import Background1 from "../components/Background1";
import FrameComponent7 from "../components/FrameComponent7";
import FooterDesktop from "../components/FooterDesktop";
import "./HowItWorkPage.css";

const HowItWorkPage = () => {
  return (
    <div className="howitworkpage">
      <Header1 />
      <Content />
      <section className="background5">
        <div className="why-saily-content-parent">
          <div className="why-saily-content">
            <div className="why-saily2">Why Saily?</div>
            <h1 className="heading-23">Stay connected wherever you go</h1>
          </div>
          <div className="benefits1">
            <BenefitCardItems
              img="/img-10.svg"
              heading3Affordable="Affordable"
              findADataPlanThatWorksFor="Find a data plan that works for your"
              budget="budget."
              propFlex="1"
              propMinHeight="203px"
              propGap="unset"
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
      <section className="how-it-works-content-group">
        <div className="how-it-works-content1">
          <h1 className="heading-24">How to set up an eSIM</h1>
          <div className="before-buying-an1">
            Before buying an eSIM plan, check if your phone is eSIM compatible.
            Then, follow these steps to get an eSIM plan with HorizonSim
          </div>
        </div>
        <div className="steps">
          <div className="background6">
            <div className="background7">
              <div className="step-icons">01</div>
              <div className="step-1f629f1easvg-container">
                <img
                  className="step-1f629f1easvg-icon1"
                  loading="lazy"
                  alt=""
                  src="/step1f629f1easvg.svg"
                />
              </div>
            </div>
            <div className="background8">
              <h3 className="data-plan-selection1">
                Data Plan Selection Made Simple
              </h3>
              <div className="horizon-sim-streamlines1">
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
            propFlex="1"
            propMinWidth="326px"
          />
          <Background1
            prop="03"
            step2eb28dc5asvg="/step320eb749esvg2@2x.png"
            effortlessAppDownload="Activation Made Easy"
            downloadingTheHorizonSimA="Activating your Horizon Sim eSIM is a seamless process that takes just minutes."
            propFlex="unset"
            propMinWidth="unset"
          />
        </div>
      </section>
      <section className="paragraphbackground-wrapper">
        <div className="paragraphbackground">
          <div className="help-content">
            <h1 className="get-help-with">Get help with your eSIM</h1>
            <div className="if-you-have-container">
              <span>
                <p className="if-you-have">
                  If you have any questions, our team is available via chat 24/7
                  on the Horizonsim app. You can also send us an
                </p>
                <p className="email-if-you">
                  email if you have a more detailed question.
                </p>
              </span>
            </div>
            <div className="link-supportsailycom">support@horizonsim.com</div>
          </div>
        </div>
      </section>
      <FrameComponent7 />
      <FooterDesktop
        linkPictureApplesvg="/link--picture--applesvg@2x.png"
        linkPictureGooglesvg="/link--picture--googlesvg@2x.png"
      />
    </div>
  );
};

export default HowItWorkPage;
