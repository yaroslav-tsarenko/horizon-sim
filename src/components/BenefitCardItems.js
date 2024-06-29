import { useMemo } from "react";
import PropTypes from "prop-types";
import "./BenefitCardItems.css";

const BenefitCardItems = ({
  className = "",
  img,
  heading3Affordable,
  findADataPlanThatWorksFor,
  budget,
  propFlex,
  propMinHeight,
  propGap,
}) => {
  const benefitCardItemsStyle = useMemo(() => {
    return {
      flex: propFlex,
      minHeight: propMinHeight,
      gap: propGap,
    };
  }, [propFlex, propMinHeight, propGap]);

  return (
    <div
      className={`benefit-card-items ${className}`}
      style={benefitCardItemsStyle}
    >
      <img className="img-icon6" alt="" src={img} />
      <div className="heading-3-affordable-parent">
        <h3 className="heading-31">{heading3Affordable}</h3>
        <div className="find-a-data-container1">
          <span>
            <p className="find-a-data1">{findADataPlanThatWorksFor}</p>
            <p className="budget1">{budget}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

BenefitCardItems.propTypes = {
  className: PropTypes.string,
  img: PropTypes.string,
  heading3Affordable: PropTypes.string,
  findADataPlanThatWorksFor: PropTypes.string,
  budget: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propMinHeight: PropTypes.any,
  propGap: PropTypes.any,
};

export default BenefitCardItems;
