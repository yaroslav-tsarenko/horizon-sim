import PropTypes from "prop-types";
import "./BackgroundBorder.css";

const BackgroundBorder = ({ className = "", heading3HowCanIGetAnESIMF }) => {
  return (
    <div className={`backgroundborder ${className}`}>
      <div className="item-button">
        <h2 className="heading-32">{heading3HowCanIGetAnESIMF}</h2>
        <img className="img-icon7" alt="" src="/img-71.svg" />
      </div>
    </div>
  );
};

BackgroundBorder.propTypes = {
  className: PropTypes.string,
  heading3HowCanIGetAnESIMF: PropTypes.string,
};

export default BackgroundBorder;
