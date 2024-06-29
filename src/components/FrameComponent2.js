import { Button } from "@mui/material";
import Link from "./Link";
import Background from "./Background";
import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section className={`destination-content-parent ${className}`}>
      <div className="destination-content">
        <div className="destination-header">
          <div className="where">Where?</div>
          <div className="destination-subheader">
            <div className="subheader-container">
              <h1 className="heading-25">Choose your destination</h1>
              <div className="pick-a-data">Pick a data plan for your trip.</div>
            </div>
            <div className="view-all-button-container">
              <Button
                className="button"
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
                View All Countries
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="destinations">
        <Link border="/border@2x.png" turkey="Turkey" img="/img-1@2x.png" />
        <Link
          border="/border-1@2x.png"
          turkey="United States"
          img="/img-2@2x.png"
          propGap="20px"
        />
        <Link
          border="/border-2@2x.png"
          turkey="Thailand"
          img="/img-3@2x.png"
          propGap="20px"
        />
        <Link
          border="/border-3@2x.png"
          turkey="Malaysia"
          img="/img-4@2x.png"
          propGap="20px"
        />
        <Link
          border="/border-4@2x.png"
          turkey="United Arab Emirates"
          img="/img-5@2x.png"
          propGap="28px"
        />
        <Link
          border="/border-5@2x.png"
          turkey="China"
          img="/img-6@2x.png"
          propGap="20px"
        />
        <Link
          border="/border-6@2x.png"
          turkey="Japan"
          img="/img-7@2x.png"
          propGap="20px"
        />
        <Link
          border="/border-7@2x.png"
          turkey="France"
          img="/img-8@2x.png"
          propGap="20px"
        />
        <Link
          border="/border-8@2x.png"
          turkey="India"
          img="/img-9@2x.png"
          propGap="20px"
        />
      </div>
      <div className="heading-2-how-does-saily-wor-parent">
        <h1 className="heading-26">How does HorizonSIM work?</h1>
        <div className="dont-have-horizonsim">
          Don’t have HorizonSim? Download our App Now.
        </div>
      </div>
      <div className="background-group">
        <div className="background12">
          <div className="background13">
            <div className="steps-divider">01</div>
            <div className="step-illustrations">
              <img
                className="step-1f629f1easvg-icon2"
                loading="lazy"
                alt=""
                src="/step1f629f1easvg.svg"
              />
            </div>
          </div>
          <div className="background14">
            <div className="data-plan-selection2">
              Data Plan Selection Made Simple
            </div>
            <div className="horizon-sim-streamlines2">
              Horizon Sim streamlines the process of selecting your ideal data
              plan.
            </div>
          </div>
        </div>
        <Background
          prop="02"
          step2eb28dc5asvg="/step1f629f1easvg.svg"
          effortlessAppDownload="Effortless App Download"
          downloadingTheHorizonSimA="Downloading the Horizon Sim app is your ticket to hassle-free connectivity."
        />
        <Background
          prop="03"
          step2eb28dc5asvg="/step320eb749esvg@2x.png"
          effortlessAppDownload="Activation Made Easy"
          downloadingTheHorizonSimA="Activating your Horizon Sim eSIM is a seamless process that takes just minutes."
          propMinWidth="269px"
        />
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
