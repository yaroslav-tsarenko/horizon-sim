import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./Header1.css";

const Header1 = ({ className = "" }) => {
  return (
    <header className={`header2 ${className}`}>
      <div className="header3">
        <div className="logo-group">
          <div className="logo2">
            <img
              className="image-6-layerstyle-icon2"
              loading="lazy"
              alt=""
              src="/image-6-layerstyle.svg"
            />
            <div className="logo-inner">
              <div className="frame-group">
                <div className="horizon-wrapper">
                  <a className="horizon2">Horizon</a>
                </div>
                <a className="sim2">SIM</a>
              </div>
            </div>
          </div>
          <div className="header-links-parent-wrapper">
            <div className="header-links-parent">
              <div className="header-links-container">
                <div className="header-links">
                  <div className="link-destinations2">Destinations</div>
                  <div className="link-what2">What is an eSIM</div>
                  <div className="link-about2">About Us</div>
                  <div className="link-help2">Help center</div>
                </div>
              </div>
              <Button
                className="button-download-app1"
                disableElevation
                variant="outlined"
                sx={{
                  textTransform: "none",
                  color: "#000",
                  fontSize: "16",
                  borderColor: "#000",
                  borderRadius: "9999px",
                  "&:hover": { borderColor: "#000" },
                  width: 176.3,
                  height: 48,
                }}
              >
                Download App
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Header1.propTypes = {
  className: PropTypes.string,
};

export default Header1;
