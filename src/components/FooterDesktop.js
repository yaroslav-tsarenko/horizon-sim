import PropTypes from "prop-types";
import "./FooterDesktop.css";

const FooterDesktop = ({
  className = "",
  linkPrivacyPolicHref,
  linkPrivacyPolicTarget,
  linkPictureApplesvg,
  linkPictureGooglesvg,
}) => {
  return (
    <footer className={`footer-desktop ${className}`}>
      <div className="footer">
        <div className="container">
          <div className="footer-brand">
            <div className="logo1">
              <img
                className="image-6-layerstyle-icon1"
                alt=""
                src="/image-6-layerstyle.svg"
              />
              <div className="footer-brand-name-container-wrapper">
                <div className="footer-brand-name-container">
                  <div className="footer-horizon-container">
                    <div className="horizon1">Horizon</div>
                  </div>
                  <div className="sim1">SIM</div>
                </div>
              </div>
            </div>
            <div className="footer-navigation">
              <div className="footer-links">
                <div className="link-destinations1">Destinations</div>
                <div className="link-what1">What is an eSIM</div>
                <div className="link-about1">About Us</div>
                <div className="link-help1">Help center</div>
                <div className="link-download">Download App</div>
                <div className="link-become">Become affiliate</div>
              </div>
            </div>
          </div>
          <div className="separator" />
          <div className="footer-legal">
            <div className="legal-container">
              <div className="legal-content">
                <div className="all-rights-reserved">All rights reserved.</div>
                <a className="link-privacy">Privacy Policy</a>
                <a
                  className="link-terms"
                  href="https://www.figma.com/design/ChO0euFDvPgaehWUhty9Gg?node-id=1-4524"
                  target="_blank"
                >
                  Terms of Service
                </a>
                <div className="button-cookie">Cookie Preferences</div>
              </div>
            </div>
            <div className="app-links">
              <img
                className="link-picture-applesvg"
                loading="lazy"
                alt=""
                src={linkPictureApplesvg}
              />
              <img
                className="link-picture-googlesvg"
                loading="lazy"
                alt=""
                src={linkPictureGooglesvg}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

FooterDesktop.propTypes = {
  className: PropTypes.string,
  linkPrivacyPolicHref: PropTypes.string.isRequired,
  linkPrivacyPolicTarget: PropTypes.string,
  linkPictureApplesvg: PropTypes.string,
  linkPictureGooglesvg: PropTypes.string,
};

export default FooterDesktop;
