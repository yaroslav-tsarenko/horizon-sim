import BackgroundBorder from "./BackgroundBorder";
import PropTypes from "prop-types";
import "./FrameComponent7.css";

const FrameComponent7 = ({ className = "" }) => {
  return (
    <section className={`f-a-q-content-wrapper ${className}`}>
      <div className="f-a-q-content">
        <h1 className="heading-211">FAQ</h1>
        <div className="f-a-q-items">
          <BackgroundBorder heading3HowCanIGetAnESIMF="Is my phone compatible with eSIMs?" />
          <BackgroundBorder heading3HowCanIGetAnESIMF="How to install an eSIM without a QR code" />
          <BackgroundBorder heading3HowCanIGetAnESIMF="How to manually install an eSIM on your phone" />
          <BackgroundBorder heading3HowCanIGetAnESIMF="Can I use an eSIM without the app?" />
          <BackgroundBorder heading3HowCanIGetAnESIMF="Can I install an eSIM without activating it?" />
          <BackgroundBorder heading3HowCanIGetAnESIMF="How long does it take to activate an eSIM?" />
        </div>
      </div>
    </section>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent7;
