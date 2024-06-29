import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Background.css";

const Background = ({
  className = "",
  prop,
  step2eb28dc5asvg,
  effortlessAppDownload,
  downloadingTheHorizonSimA,
  propMinWidth,
}) => {
  const backgroundStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={`background9 ${className}`} style={backgroundStyle}>
      <div className="background10">
        <div className="div">{prop}</div>
        <div className="step-2eb28dc5asvg-wrapper">
          <img
            className="step-2eb28dc5asvg-icon"
            loading="lazy"
            alt=""
            src={step2eb28dc5asvg}
          />
        </div>
      </div>
      <div className="background11">
        <div className="effortless-app-download-wrapper">
          <div className="effortless-app-download">{effortlessAppDownload}</div>
        </div>
        <div className="downloading-the-horizon">
          {downloadingTheHorizonSimA}
        </div>
      </div>
    </div>
  );
};

Background.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
  step2eb28dc5asvg: PropTypes.string,
  effortlessAppDownload: PropTypes.string,
  downloadingTheHorizonSimA: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
};

export default Background;
