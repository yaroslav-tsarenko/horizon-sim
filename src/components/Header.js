import PropTypes from "prop-types";
import "./Header.css";

const Header = ({ className = "" }) => {
  return (
    <header className={`header ${className}`}>
      <div className="header1">
        <div className="logo-parent">
          <div className="logo">
            <img
              className="image-6-layerstyle-icon"
              loading="lazy"
              alt=""
              src="/image-6-layerstyle.svg"
            />
            <div className="brand-name-container-wrapper">
              <div className="brand-name-container">
                <div className="horizon-container">
                  <a className="horizon">Horizon</a>
                </div>
                <a className="sim">SIM</a>
              </div>
            </div>
          </div>
          <div className="navigation-links-container-wrapper">
            <div className="navigation-links-container">
              <div className="links-container">
                <div className="links">
                  <div className="link-destinations">Destinations</div>
                  <div className="link-what">What is an eSIM</div>
                  <div className="link-about">About Us</div>
                  <div className="link-help">Help center</div>
                </div>
              </div>
              <div className="button-download-app">
                <a
                  className="download-app"
                  href="https://www.figma.com/design/ChO0euFDvPgaehWUhty9Gg?node-id=1-3096"
                  target="_blank"
                >
                  Download App
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
