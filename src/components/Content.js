import { Button } from "@mui/material";
import FeatureList from "./FeatureList";
import PropTypes from "prop-types";
import "./Content.css";

const Content = ({ className = "" }) => {
  return (
    <section className={`content ${className}`}>
      <div className="features">
        <div className="feature-list1">
          <div className="feature-items">
            <img className="img-icon9" loading="lazy" alt="" src="/img1.svg" />
          </div>
          <div className="esim-data-plans-container">
            <p className="esim-data-plans">eSIM data plans in 150</p>
            <p className="destinations1">destinations</p>
          </div>
        </div>
        <div className="feature-list2">
          <input className="frame-input" type="checkbox" />
          <div className="available-on-ios">Available on iOS and Android</div>
        </div>
        <FeatureList
          img="/img-21.svg"
          customerSupport="24/7 customer support"
        />
        <FeatureList
          img="/img-32.svg"
          customerSupport="Works on all smartphones that support eSIM"
          propPadding="unset"
        />
      </div>
      <div className="image-group">
        <div className="image">
          <div className="data-packs">
            <b className="esim-plan">Esim Plan</b>
            <img className="plan-divider-icon" loading="lazy" alt="" />
            <div className="plan-options">
              <div className="plan-grid">
                <div className="plan-cells">
                  <div className="gb3">1 GB</div>
                </div>
                <div className="plan-cells1">
                  <div className="gb4">3 GB</div>
                </div>
                <div className="plan-cells2">
                  <div className="gb5">5 GB</div>
                </div>
                <div className="plan-cells3">
                  <div className="gb6">10 GB</div>
                </div>
              </div>
              <div className="frame-parent2">
                <img
                  className="frame-child"
                  loading="lazy"
                  alt=""
                  src="/group-1.svg"
                />
                <img
                  className="frame-item"
                  loading="lazy"
                  alt=""
                  src="/group-2.svg"
                />
                <img
                  className="frame-inner"
                  loading="lazy"
                  alt=""
                  src="/group-3.svg"
                />
                <img
                  className="group-icon"
                  loading="lazy"
                  alt=""
                  src="/group-4.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="choose-plan">
          <div className="choose-plan-content">
            <div className="still-looking-for-a-data-plan-parent">
              <div className="still-looking-for">
                Still looking for a data plan?
              </div>
              <h1 className="heading-210">Find Your Perfect Fit</h1>
            </div>
            <div className="embark-on-a">
              Embark on a journey of seamless connectivity with our diverse
              range of eSIM plans tailored to suit your unique needs.
            </div>
            <Button
              className="button3"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#000",
                fontSize: "16",
                background: "#eda619",
                border: "#eda619 solid 1px",
                borderRadius: "9999px",
                "&:hover": { background: "#eda619" },
                width: 256.3,
                height: 48,
              }}
            >
              Choose Your Destination
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
