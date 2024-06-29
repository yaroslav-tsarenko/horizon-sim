import { Button } from "@mui/material";
import ItemLabel from "./ItemLabel";
import PropTypes from "prop-types";
import "./FrameComponent4.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section className={`image-parent ${className}`}>
      <img className="image-icon3" loading="lazy" alt="" src="/image1@2x.png" />
      <div className="frame-container">
        <div className="heading-1-esim-for-united-st-parent">
          <h1 className="heading-12">eSIM for United States</h1>
          <div className="item-affordable-data-plans-parent">
            <div className="item-affordable">
              Experience seamless connectivity wherever you roam in the United
              States with our dedicated eSIM plans designed for domestic use.
            </div>
            <Button
              className="button1"
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
                height: 48,
              }}
            >
              Go to Checkout
            </Button>
          </div>
        </div>
        <Button
          className="button2"
          startIcon={<img width="16px" height="16px" src="/img.svg" />}
          disableElevation
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#000",
            fontSize: "12",
            borderColor: "#b1b1b4",
            borderRadius: "9999px",
            "&:hover": { borderColor: "#b1b1b4" },
            width: 196.2,
            height: 34,
          }}
        >
          Check compatibility
        </Button>
        <div className="heading-2-choose-the-plan-th-parent">
          <h3 className="heading-29">Choose the plan that’s best for you</h3>
          <div className="plans-container">
            <div className="item-label1">
              <div className="border2" />
              <div className="data-amounts-parent">
                <div className="data-amounts">
                  <div className="gb1">1 GB</div>
                </div>
                <div className="plan-durations">
                  <div className="days1">7 days</div>
                </div>
                <div className="empty-plan-data">$3.99</div>
              </div>
            </div>
            <ItemLabel gB="3 GB" prop="$8.99" />
            <ItemLabel gB="5 GB" prop="$13.99" propTop="147px" propLeft="0px" />
            <ItemLabel
              gB="10 GB"
              prop="$22.99"
              propTop="147px"
              propLeft="247px"
            />
            <div className="item-label2">
              <div className="border3" />
              <div className="gb-group">
                <div className="gb2">20 GB</div>
                <div className="days2">30 days</div>
              </div>
              <div className="div2">$36.99</div>
            </div>
          </div>
        </div>
        <div className="frame-div">
          <div className="activation-images-wrapper">
            <div className="activation-images">
              <input className="img" type="radio" />
              <input className="img1" type="radio" />
              <img className="img-icon5" alt="" src="/img-31.svg" />
            </div>
          </div>
          <div className="activation-description">
            <div className="well-guide-you">
              We’ll guide you through the activation process in the Saily app
              after purchase.
            </div>
            <div className="if-you-dont">
              If you don’t manage to activate your plan, you’ll be eligible for
              a refund.
            </div>
            <div className="secure-payment-guaranteed">
              Secure payment guaranteed.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
