import { useMemo } from "react";
import PropTypes from "prop-types";
import "./ItemLabel.css";

const ItemLabel = ({ className = "", gB, prop, propTop, propLeft }) => {
  const itemLabelStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div className={`item-label ${className}`} style={itemLabelStyle}>
      <div className="border1" />
      <div className="gb-parent">
        <div className="gb">{gB}</div>
        <div className="days-wrapper">
          <div className="days">30 days</div>
        </div>
        <div className="div1">{prop}</div>
      </div>
    </div>
  );
};

ItemLabel.propTypes = {
  className: PropTypes.string,
  gB: PropTypes.string,
  prop: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
};

export default ItemLabel;
