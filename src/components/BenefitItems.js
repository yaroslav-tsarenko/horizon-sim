import { useMemo } from "react";
import PropTypes from "prop-types";
import "./BenefitItems.css";

const BenefitItems = ({
  className = "",
  img,
  heading3Affordable,
  findADataPlanThatWorksFor,
  budget,
  propFlex,
  propMinHeight,
  propGap,
}) => {
  const benefitItemsStyle = useMemo(() => {
    return {
      flex: propFlex,
      minHeight: propMinHeight,
      gap: propGap,
    };
  }, [propFlex, propMinHeight, propGap]);

  return (
    <div className={`benefit-items ${className}`} style={benefitItemsStyle}>
      <img className="img-icon2" alt="" src={img} />
      <div className="benefit-descriptions">
        <div className="heading-3">{heading3Affordable}</div>
        <div className="find-a-data-container">
          <span>
            <p className="find-a-data">{findADataPlanThatWorksFor}</p>
            <p className="budget">{budget}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

BenefitItems.propTypes = {
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

export default BenefitItems;
