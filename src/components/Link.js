import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Link.css";

const Link = ({ className = "", border, turkey, img, propGap }) => {
  const linkStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  return (
    <div className={`link ${className}`} style={linkStyle}>
      <div className="destination-items">
        <img className="border-icon" loading="lazy" alt="" src={border} />
        <div className="turkey">{turkey}</div>
      </div>
      <img className="img-icon1" alt="" src={img} />
    </div>
  );
};

Link.propTypes = {
  className: PropTypes.string,
  border: PropTypes.string,
  turkey: PropTypes.string,
  img: PropTypes.string,

  /** Style props */
  propGap: PropTypes.any,
};

export default Link;
