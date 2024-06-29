import { useMemo } from "react";
import PropTypes from "prop-types";
import "./BackgroundBorderShadow.css";

const BackgroundBorderShadow = ({ className = "", background, propWidth }) => {
  const backgroundBorderShadowStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={`backgroundbordershadow ${className}`}
      style={backgroundBorderShadowStyle}
    >
      <div className="backgroundbordershadow-inner">
        <div className="img-parent">
          <img className="img-icon" loading="lazy" alt="" src="/img.svg" />
          <div className="enter-country">Enter country</div>
        </div>
      </div>
      <img className="background-icon" loading="lazy" alt="" src={background} />
    </div>
  );
};

BackgroundBorderShadow.propTypes = {
  className: PropTypes.string,
  background: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
};

export default BackgroundBorderShadow;
