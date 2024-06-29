import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FeatureList.css";

const FeatureList = ({ className = "", img, customerSupport, propPadding }) => {
  const featureListStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={`feature-list ${className}`} style={featureListStyle}>
      <div className="img-wrapper">
        <img className="img-icon8" alt="" src={img} />
      </div>
      <div className="customer-support">{customerSupport}</div>
    </div>
  );
};

FeatureList.propTypes = {
  className: PropTypes.string,
  img: PropTypes.string,
  customerSupport: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
};

export default FeatureList;
