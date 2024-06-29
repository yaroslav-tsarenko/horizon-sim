import Header from "../components/Header";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent2 from "../components/FrameComponent2";
import BenefitItems from "../components/BenefitItems";
import FrameComponent3 from "../components/FrameComponent3";
import FooterDesktop from "../components/FooterDesktop";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <Header />
      <FrameComponent1 />
      <FrameComponent2 />
      <section className="background">
        <div className="benefit-content">
          <div className="benefits-header">
            <div className="why-saily">Why Saily?</div>
            <h1 className="heading-2">Stay connected wherever you go</h1>
          </div>
          <div className="benefits">
            <BenefitItems
              img="/img-10.svg"
              heading3Affordable="Affordable"
              findADataPlanThatWorksFor="Find a data plan that works for your"
              budget="budget."
            />
            <BenefitItems
              img="/img-11.svg"
              heading3Affordable="Easy to use"
              findADataPlanThatWorksFor="Just get the app and buy a data"
              budget="plan. Easy!"
              propFlex="0.9156"
              propMinHeight="unset"
              propGap="32px"
            />
            <BenefitItems
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
      <FrameComponent3 />
      <FooterDesktop
        linkPictureApplesvg="/link--picture--applesvg@2x.png"
        linkPictureGooglesvg="/link--picture--googlesvg@2x.png"
      />
    </div>
  );
};

export default HomePage;
