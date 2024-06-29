import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Background1.css";

const Background1 = ({
  className = "",
  prop,
  step2eb28dc5asvg,
  effortlessAppDownload,
  downloadingTheHorizonSimA,
  propFlex,
  propMinWidth,
}) => {
  const background1Style = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propFlex, propMinWidth]);

  return (
    <div className={`background15 ${className}`} style={background1Style}>
      <div className="background16">
        <div className="div3">{prop}</div>
        <div className="step-2eb28dc5asvg-container">
          <img
            className="step-2eb28dc5asvg-icon1"
            loading="lazy"
            alt=""
            src={step2eb28dc5asvg}
          />
        </div>
      </div>
      <div className="background17">
        <div className="effortless-app-download-container">
          <h3 className="effortless-app-download1">{effortlessAppDownload}</h3>
        </div>
        <div className="downloading-the-horizon1">
          {downloadingTheHorizonSimA}
        </div>
      </div>
    </div>
  );
};

Background1.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
  step2eb28dc5asvg: PropTypes.string,
  effortlessAppDownload: PropTypes.string,
  downloadingTheHorizonSimA: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default Background1;
