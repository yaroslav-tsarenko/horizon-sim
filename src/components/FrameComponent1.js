import BackgroundBorderShadow from "./BackgroundBorderShadow";
import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section className={`heading-1-parent ${className}`}>
      <div className="heading-11" />
      <div className="hero-content">
        <h1 className="browse-the-world-container">
          <p className="browse-the-world">Browse the world with</p>
          <p className="saily">Saily</p>
        </h1>
        <div className="worldwide-esim-data">Worldwide eSIM data service.</div>
      </div>
      <BackgroundBorderShadow background="/background.svg" />
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
