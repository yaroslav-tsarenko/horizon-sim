import BackgroundBorder from "./BackgroundBorder";
import PropTypes from "prop-types";
import "./FrameComponent5.css";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <section className={`faq-content-wrapper ${className}`}>
      <div className="faq-content">
        <h1 className="frequently-asked-questions">{`Frequently asked questions about eSIMs `}</h1>
        <div className="faq-items">
          <BackgroundBorder heading3HowCanIGetAnESIMF="How can I get an eSIM for United States?" />
          <BackgroundBorder heading3HowCanIGetAnESIMF="Will an eSIM work on my phone or tablet?" />
          <BackgroundBorder heading3HowCanIGetAnESIMF="How much is an eSIM plan for United States?" />
        </div>
      </div>
    </section>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
